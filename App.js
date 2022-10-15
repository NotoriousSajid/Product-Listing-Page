import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Home from './src/screens/Home';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {getProduct} from './src/redux/actions/action';
import Route from './src/navigation/Route';

const App = () => {
  const [isLoad, setLoad] = useState(true);
  useEffect(() => {
    (async () => {
      await getProduct();
      setLoad(false);
    })();
  }, []);

  const loading = () => {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator color="#bc2b78" size="large" />
      </View>
    );
  };

  return <Provider store={store}>{isLoad ? loading() : <Route />}</Provider>;
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
