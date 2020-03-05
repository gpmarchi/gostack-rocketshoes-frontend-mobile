import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Wrapper, Container, Logo } from './styles';

import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo source={logo} />
        <Icon name="shopping-basket" size={30} color="#FFF" />
      </Container>
    </Wrapper>
  );
}
