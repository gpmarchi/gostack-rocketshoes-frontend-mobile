import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #191920;
  flex: 1;
`;

export const Products = styled.View`
  background: #fff;
  margin: 90px 15px;
  border-radius: 4px;
  padding: 10px;
`;

export const Product = styled.View``;

export const ProductInfo = styled.View`
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  height: 80px;
  width: 80px;
`;

export const ProductDetails = styled.View`
  justify-content: center;
  flex: 1;
  padding: 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  color: #333;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProductDelete = styled.TouchableOpacity`
  justify-content: center;
`;

export const ProductControls = styled.View`
  background: #eee;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;

export const AmountControls = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AmountControlButton = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput.attrs({
  editable: false,
})`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
  height: 32px;
  color: #000;
`;

export const ProductSubtotal = styled.Text`
  font-weight: bold;
  font-size: 16px;
  flex: 1;
  text-align: right;
`;

export const CartTotal = styled.View`
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  align-items: center;
  margin-top: 20px;
`;

export const TotalText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #999;
`;

export const Total = styled.Text`
  font-weight: bold;
  font-size: 30px;
  margin-top: 5px;
  margin-bottom: 30px;
`;

export const OrderButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  padding: 12px 0;
  width: 100%;
`;

export const OrderText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;
