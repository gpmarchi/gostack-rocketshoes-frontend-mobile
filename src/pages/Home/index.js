import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native';

import {
  Container,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  CartAmount,
  CartAmountText,
  AddButtonText,
} from './styles';

export default function Home({ navigation }) {
  // onPress={() => navigation.navigate('Cart')}
  return (
    <Container>
      <Product>
        <ProductImage
          source={{
            uri:
              'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
          }}
        />
        <ProductTitle>Tênis de Caminhada Leve Confortável</ProductTitle>
        <ProductPrice>R$ 129,90</ProductPrice>
        <AddButton onPress={() => navigation.navigate('Cart')}>
          <CartAmount>
            <Icon name="add-shopping-cart" size={30} color="#FFF" />
            <CartAmountText>3</CartAmountText>
          </CartAmount>
          <AddButtonText>ADICIONAR</AddButtonText>
        </AddButton>
      </Product>
    </Container>
  );
}

Home.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};
