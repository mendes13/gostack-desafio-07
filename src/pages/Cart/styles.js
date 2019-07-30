import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #191920;
  flex: 1;
  padding: 20px;
  padding-bottom: 100px;
  flex-direction: row;
  align-items: flex-start;
`;

export const CartContainer = styled.View`
  flex: 1;
  background-color: #fff;
  border-radius: 4px;
  padding: 10px;
`;

export const ProductList = styled.FlatList`
  padding: 5px;
`;

export const ProductItem = styled.View`
  margin-bottom: 20px;
`;

export const ProductInformation = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
  margin-right: 10px;
`;

export const ProductText = styled.View`
  max-width: 200px;
`;

export const ProductDescription = styled.Text`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: bold;
`;

export const ProductDelete = styled.TouchableOpacity`
  margin-left: auto;
  padding: 15px;
`;

export const ProductFooter = styled.View`
  background-color: #eee;
  border-radius: 4px;
  padding: 5px 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProductController = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
  placeholderTextColor: '#666',
})`
  justify-content: center;
  font-size: 16px;
  background-color: #fff;
  margin: 0 5px;
  padding: 5px;
  height: 30px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 50px;
  text-align: center;
`;

export const ProductFinalPrice = styled.Text`
  padding: 5px 0;
  font-weight: bold;
  font-size: 16px;
  color: #000;
`;

export const Footer = styled.View`
  margin-top: 25px;
  align-items: center;
`;

export const Total = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  color: #999;
`;

export const FinalPrice = styled.Text`
  font-size: 30px;
  color: #000;
  font-weight: bold;
`;

export const FinishButton = styled.TouchableOpacity`
  margin-top: 25px;
  width: 100%;
  padding: 10px;
  align-items: center;
  background-color: #7159c1;
  border-radius: 4px;
`;

export const FinishButtonText = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
`;

export const EmptyContainer = styled.View`
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const EmptyContainerText = styled.Text`
  font-size: 20px;
  color: #333;
  margin-top: 30px;
  font-weight: bold;
`;
