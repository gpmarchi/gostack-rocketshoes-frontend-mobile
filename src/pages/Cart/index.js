import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

export default function Cart() {
  return (
    <Container>
      <Products>
        <Product>
          <ProductInfo>
            <ProductImage
              source={{
                uri:
                  'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
              }}
            />
            <ProductDetails>
              <ProductTitle>Tênis de Caminhada Leve Confortável</ProductTitle>
              <ProductPrice>R$ 129,90</ProductPrice>
            </ProductDetails>
            <ProductDelete>
              <Icon name="delete-forever" size={30} color="#7159c1" />
            </ProductDelete>
          </ProductInfo>
          <ProductControls>
            <AmountControls>
              <AmountControlButton>
                <Icon name="remove-circle-outline" size={25} color="#7159c1" />
              </AmountControlButton>
              <ProductAmount value={String(1)} />
              <AmountControlButton>
                <Icon name="add-circle-outline" size={25} color="#7159c1" />
              </AmountControlButton>
            </AmountControls>
            <ProductSubtotal>R$ 539.65</ProductSubtotal>
          </ProductControls>
        </Product>

        <Product>
          <ProductInfo>
            <ProductImage
              source={{
                uri:
                  'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
              }}
            />
            <ProductDetails>
              <ProductTitle>Tênis de Caminhada Leve Confortável</ProductTitle>
              <ProductPrice>R$ 129,90</ProductPrice>
            </ProductDetails>
            <ProductDelete>
              <Icon name="delete-forever" size={30} color="#7159c1" />
            </ProductDelete>
          </ProductInfo>
          <ProductControls>
            <AmountControls>
              <AmountControlButton>
                <Icon name="remove-circle-outline" size={25} color="#7159c1" />
              </AmountControlButton>
              <ProductAmount value={String(1)} />
              <AmountControlButton>
                <Icon name="add-circle-outline" size={25} color="#7159c1" />
              </AmountControlButton>
            </AmountControls>
            <ProductSubtotal>R$ 539.65</ProductSubtotal>
          </ProductControls>
        </Product>
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
