import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #191920;
  padding: 20px;
  flex: 1;
  flex-direction: row;
`;

export const ProductList = styled.FlatList`
  align-self: flex-start;
`;

export const ProductCard = styled.View`
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  margin-right: 15px;
  width: 220px;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
`;

export const ProductDescription = styled.Text.attrs({
  numberOfLines: 2,
})`
  align-self: flex-start;
  color: #333;
  font-size: 16px;
  margin: 0 10px 5px;
`;

export const ProductPrice = styled.Text`
  align-self: flex-start;
  color: #000;
  font-weight: bold;
  font-size: 21px;
  margin: 0 10px;
`;

export const AddButton = styled.TouchableOpacity`
  margin-top: 15px;
  background-color: #7159c1;
  flex-direction: row;
  border-radius: 4px;
`;

export const CartInformation = styled.View`
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const CartAmount = styled.Text`
  color: #fff;
  margin-left: 5px;
`;

export const AddButtonTextContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: left;
`;

export const AddButtonText = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  justify-content: center;
  align-items: center;
`;
