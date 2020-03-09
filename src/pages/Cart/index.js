import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Container,
  Products,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  AmountControls,
  AmountControlButton,
  ProductAmount,
  ProductSubtotal,
  CartTotal,
  TotalText,
  Total,
  OrderButton,
  OrderText,
} from './styles';

function Cart({ cart, dispatch }) {
  return (
    <Container>
      <Products>
        {cart.map(product => (
          <Product key={String(product.id)}>
            <ProductInfo>
              <ProductImage
                source={{
                  uri: product.image,
                }}
              />
              <ProductDetails>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{product.formattedPrice}</ProductPrice>
              </ProductDetails>
              <ProductDelete
                onPress={() =>
                  dispatch({ type: 'REMOVE_FROM_CART', id: product.id })
                }
              >
                <Icon name="delete-forever" size={30} color="#7159c1" />
              </ProductDelete>
            </ProductInfo>
            <ProductControls>
              <AmountControls>
                <AmountControlButton>
                  <Icon
                    name="remove-circle-outline"
                    size={25}
                    color="#7159c1"
                  />
                </AmountControlButton>
                <ProductAmount value={String(product.amount)} />
                <AmountControlButton>
                  <Icon name="add-circle-outline" size={25} color="#7159c1" />
                </AmountControlButton>
              </AmountControls>
              <ProductSubtotal>R$ 539.65</ProductSubtotal>
            </ProductControls>
          </Product>
        ))}
        <CartTotal>
          <TotalText>TOTAL</TotalText>
          <Total>R$ 1678,89</Total>
          <OrderButton>
            <OrderText>FINALIZAR PEDIDO</OrderText>
          </OrderButton>
        </CartTotal>
      </Products>
    </Container>
  );
}

Cart.propTypes = {
  cart: PropTypes.shape().isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
