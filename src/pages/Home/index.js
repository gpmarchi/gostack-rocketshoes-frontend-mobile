import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';

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

export default function Home() {
  const [products, setProducts] = useState([]);

  const productCartAmount = useSelector(state =>
    state.cart.reduce((productCartAmountSum, product) => {
      productCartAmountSum[product.id] = product.amount;
      return productCartAmountSum;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        formattedPrice: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <ProductList
        data={products}
        extraData={productCartAmount}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Product>
            <ProductImage
              source={{
                uri: item.image,
              }}
            />
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{item.formattedPrice}</ProductPrice>
            <AddButton onPress={() => handleAddProduct(item.id)}>
              <CartAmount>
                <Icon name="add-shopping-cart" size={20} color="#FFF" />
                <CartAmountText>
                  {productCartAmount[item.id] || 0}
                </CartAmountText>
              </CartAmount>
              <AddButtonText>ADICIONAR</AddButtonText>
            </AddButton>
          </Product>
        )}
      />
    </Container>
  );
}
