import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
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

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

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
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};
