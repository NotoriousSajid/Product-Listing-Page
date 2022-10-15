import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

const Cart = ({navigation}) => {
  const cart = useSelector(state => state.appReducer.cart);
  console.log('cart js :', cart.Cart);

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.product} activeOpacity={0.7}>
        <Image source={{uri: item.thumnail}} style={styles.thumbnail} />
        {/* title and description */}
        <View style={styles.productDetails}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.description}</Text>
        </View>

        {/* price tag */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flexDirection: 'row', marginRight: 10}}>
            <Text style={{color: 'black', fontSize: 15}}>$</Text>
            <Text style={{fontSize: 20, color: 'black'}}>{item.price}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.title}>Your Cart</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <Text style={styles.close}>Close</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={cart.Cart}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{marginBottom: 10}} />}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  },
  close: {
    fontSize: 16,
    color: '#1289A7',
  },

  thumbnail: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  productDetails: {
    marginVertical: 10,
  },
  product: {
    flex: 1,
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    backgroundColor: 'white',

    elevation: 2,
  },

  title: {
    fontSize: 16,
    color: 'black',
    marginBottom: 2,
  },
});
