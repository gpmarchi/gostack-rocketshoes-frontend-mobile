import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';

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
  EmptyCart,
  EmptyText,
} from './styles';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.amount * product.price),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce(
        (totalSum, product) => totalSum + product.amount * product.price,
        0
      )
    )
  );

  const dispatch = useDispatch();

  function incrementAmount(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrementAmount(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      {cart.length ? (
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
                    dispatch(CartActions.removeFromCart(product.id))
                  }
                >
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
      ) : (
        <EmptyCart>
          <Icon name="remove-shopping-cart" size={64} color="#eee" />
          <EmptyText>Seu carrinho está vazio.</EmptyText>
        </EmptyCart>
      )}
    </Container>
  );
}
