import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: #141419;
  flex-direction: row;
`;

export const Container = styled.View`
  background: #141419;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 70px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'cover',
})``;

export const CartContainer = styled.View`
  flex-direction: row;
`;

export const Cart = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
`;

export const CartAmount = styled.Text`
  background: #7159c1;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  color: #fff;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
