import React from 'react';
import {View, Text} from 'react-native';

import './config/ReactotronConfig';

const App = () => {
  console.tron.log('hello tron');
  return (
    <View>
      <Text>Welcome to React Native!!!</Text>
    </View>
  );
};

export default App;
