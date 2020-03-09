import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
  ProductList,
} from './styles';

import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct(product) {
    const { addToCart, navigation } = this.props;
    addToCart(product);
    navigation.navigate('Cart');
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <ProductList
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Product>
              <ProductImage
                source={{
                  uri: item.image,
                }}
              />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.formattedPrice}</ProductPrice>
              <AddButton onPress={() => this.handleAddProduct(item)}>
                <CartAmount>
                  <Icon name="add-shopping-cart" size={20} color="#FFF" />
                  <CartAmountText>3</CartAmountText>
                </CartAmount>
                <AddButtonText>ADICIONAR</AddButtonText>
              </AddButton>
            </Product>
          )}
        />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

Home.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Home);
