import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import {
  Container,
  CartContainer,
  ProductList,
  ProductItem,
  ProductInformation,
  ProductImage,
  ProductText,
  ProductDescription,
  ProductPrice,
  ProductDelete,
  ProductFooter,
  ProductControlButton,
  ProductController,
  ProductAmount,
  ProductFinalPrice,
  Footer,
  Total,
  FinalPrice,
  FinishButton,
  FinishButtonText,
  EmptyContainer,
  EmptyContainerText,
} from './styles';

function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector(state =>
    state.cart.map(product => {
      return {
        ...product,
        priceFormatted: formatPrice(product.price),
        subtotal: formatPrice(product.price * product.amount),
      };
    })
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalPrice, product) => {
        return totalPrice + product.price * product.amount;
      }, 0)
    )
  );

  function incrementAmount(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrementAmount(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  function deleteProduct(id) {
    dispatch(CartActions.removeFromCart(id));
  }

  return (
    <Container>
      <CartContainer>
        {cart.length === 0 ? (
          <EmptyContainer>
            <Icon name="remove-shopping-cart" size={50} color="#ddd" />
            <EmptyContainerText>Seu carrinho está vazio</EmptyContainerText>
          </EmptyContainer>
        ) : (
          <>
            <ProductList
              data={cart}
              keyExtractor={product => String(product.id)}
              renderItem={({ item }) => (
                <ProductItem>
                  <ProductInformation>
                    <ProductImage source={{ uri: item.image }} />
                    <ProductText>
                      <ProductDescription>{item.title}</ProductDescription>
                      <ProductPrice>{item.priceFormatted}</ProductPrice>
                    </ProductText>
                    <ProductDelete onPress={() => deleteProduct(item.id)}>
                      <Icon name="delete-forever" color="#7159c1" size={28} />
                    </ProductDelete>
                  </ProductInformation>

                  <ProductFooter>
                    <ProductController>
                      <ProductControlButton
                        onPress={() => decrementAmount(item)}
                      >
                        <Icon
                          name="remove-circle-outline"
                          color="#7159C1"
                          size={20}
                        />
                      </ProductControlButton>
                      <ProductAmount value={String(item.amount)} />
                      <ProductControlButton
                        onPress={() => incrementAmount(item)}
                      >
                        <Icon
                          name="add-circle-outline"
                          color="#7159C1"
                          size={20}
                        />
                      </ProductControlButton>
                    </ProductController>
                    <ProductFinalPrice>{item.subtotal}</ProductFinalPrice>
                  </ProductFooter>
                </ProductItem>
              )}
            />
            <Footer>
              <Total>Total</Total>
              <FinalPrice>{total}</FinalPrice>
              <FinishButton>
                <FinishButtonText>Finalizar Pedido</FinishButtonText>
              </FinishButton>
            </Footer>
          </>
        )}
      </CartContainer>
    </Container>
  );
}

export default Cart;
