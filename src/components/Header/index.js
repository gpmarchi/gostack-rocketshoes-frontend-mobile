import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import {
  Wrapper,
  Container,
  Logo,
  CartContainer,
  Cart,
  CartAmount,
} from './styles';

import logo from '../../assets/logo.png';

function Header({ cartSize }) {
  console.tron.log(cartSize);

  return (
    <Wrapper>
      <Container>
        <Logo source={logo} />
        <CartContainer>
          <Cart>
            <Icon name="shopping-basket" size={30} color="#FFF" />
          </Cart>
          <CartAmount>{cartSize}</CartAmount>
        </CartContainer>
      </Container>
    </Wrapper>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
