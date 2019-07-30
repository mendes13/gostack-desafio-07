import React from 'react';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  LogoButton,
  Logo,
  BasketContainer,
  BasketCounter,
} from './styles';

function Header({ navigation }) {
  const cartAmount = useSelector(state => state.cart.length);

  function handleLinkToHome() {
    navigation.navigate('Home');
  }

  function handleLinkToCart() {
    navigation.navigate('Cart');
  }

  return (
    <Container>
      <LogoButton onPress={handleLinkToHome}>
        <Logo />
      </LogoButton>
      <BasketContainer onPress={handleLinkToCart}>
        <Icon name="shopping-basket" size={24} color="#fff" />
        <BasketCounter>{cartAmount}</BasketCounter>
      </BasketContainer>
    </Container>
  );
}

export default Header;
