import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ProductList,
  ProductCard,
  ProductImage,
  ProductDescription,
  ProductPrice,
  AddButton,
  CartInformation,
  CartAmount,
  AddButtonTextContainer,
  AddButtonText,
} from './styles';

function Home() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <ProductList
        data={products}
        keyExtractor={product => String(product.id)}
        horizontal
        renderItem={({ item }) => (
          <ProductCard>
            <ProductImage source={{ uri: item.image }} />

            <ProductDescription>{item.title}</ProductDescription>

            <ProductPrice>{item.priceFormatted}</ProductPrice>

            <AddButton onPress={() => handleAddProduct(item.id)}>
              <CartInformation>
                <Icon name="add-shopping-cart" size={20} color="#fff" />
                <CartAmount>{amount[item.id] || 0}</CartAmount>
              </CartInformation>
              <AddButtonTextContainer>
                <AddButtonText>Adicionar</AddButtonText>
              </AddButtonTextContainer>
            </AddButton>
          </ProductCard>
        )}
      />
    </Container>
  );
}

export default Home;
