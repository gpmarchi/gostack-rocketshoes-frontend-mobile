import React from 'react';
import { Text, Button } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Home({ navigation }) {
  return (
    <Container>
      <Text>Home</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Cart')}
      />
    </Container>
  );
}

Home.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};
