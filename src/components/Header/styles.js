import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  background-color: #141419;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const LogoButton = styled.TouchableOpacity``;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = styled.TouchableOpacity``;

export const BasketCounter = styled.Text`
  position: absolute;
  top: -8px;
  right: -8px;
  min-height: 18px;
  min-width: 18px;
  padding: 2px;
  justify-content: center;
  align-items: center;
  background-color: #7159c1;
  color: #fff;
  font-size: 10px;
  text-align: center;
  border-radius: 9px;
`;
