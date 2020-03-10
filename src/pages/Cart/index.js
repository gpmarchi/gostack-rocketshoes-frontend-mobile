import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function incrementAmount(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrementAmount(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

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
              <ProductDelete onPress={() => removeFromCart(product.id)}>
                <Icon name="delete-forever" size={30} color="#7159c1" />
              </ProductDelete>
            </ProductInfo>
            <ProductControls>
              <AmountControls>
                <AmountControlButton onPress={() => decrementAmount(product)}>
                  <Icon
                    name="remove-circle-outline"
                    size={25}
                    color="#7159c1"
                  />
                </AmountControlButton>
                <ProductAmount value={String(product.amount)} />
                <AmountControlButton onPress={() => incrementAmount(product)}>
                  <Icon name="add-circle-outline" size={25} color="#7159c1" />
                </AmountControlButton>
              </AmountControls>
              <ProductSubtotal>{product.subtotal}</ProductSubtotal>
            </ProductControls>
          </Product>
        ))}
        <CartTotal>
          <TotalText>TOTAL</TotalText>
          <Total>{total}</Total>
          <OrderButton>
            <OrderText>FINALIZAR PEDIDO</OrderText>
          </OrderButton>
        </CartTotal>
      </Products>
    </Container>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  total: PropTypes.string.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateAmountRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.amount * product.price),
  })),
  total: formatPrice(
    state.cart.reduce(
      (total, product) => total + product.amount * product.price,
      0
    )
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
