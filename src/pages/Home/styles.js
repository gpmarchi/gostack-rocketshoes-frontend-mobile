import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  background: #191920;
  flex: 1;
`;

export const Product = styled.View`
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  width: 220px;
  margin: 10px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductTitle = styled.Text`
  color: #333;
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin: 14px 0;
  margin-top: auto;
`;

export const AddButton = styled.TouchableOpacity`
  background: #7159c1;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const CartAmount = styled.View`
  flex-direction: row;
  padding: 12px;
  align-items: center;
  background: ${darken(0.03, '#7159c1')};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const CartAmountText = styled.Text`
  margin: 0 4px 0 10px;
  color: #fff;
`;

export const AddButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  flex: 1;
  text-align: center;
`;

export const ProductList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
})`
  margin: 90px 10px 0 10px;
  max-height: 400px;
`;
