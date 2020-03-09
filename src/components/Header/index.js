import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Wrapper,
  Container,
  Logo,
  CartContainer,
  Cart,
  CartAmount,
} from './styles';

import logo from '../../assets/logo.png';

function Header({ cartSize, navigation }) {
  return (
    <Wrapper>
      <Container>
        <Logo source={logo} />
        <CartContainer>
          <Cart onPress={() => navigation.navigate('Cart')}>
            <Icon name="shopping-basket" size={30} color="#FFF" />
          </Cart>
          <CartAmount>{cartSize}</CartAmount>
        </CartContainer>
      </Container>
    </Wrapper>
  );
}

Header.propTypes = {
  cartSize: PropTypes.number.isRequired,
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};

export default connect(
  state => ({
    cartSize: state.cart.length,
  }),
  null
)(Header);
