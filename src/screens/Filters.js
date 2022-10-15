import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {setCategory} from '../redux/actions/category';
import {setSortData} from '../redux/actions/sort';

const Filters = ({navigation}) => {
  const categoryData = [
    {id: 1, name: 'smartphones'},
    {id: 2, name: 'laptops'},
    {id: 3, name: 'fragrances'},
    {id: 4, name: 'skincare'},
    {id: 5, name: 'groceries'},
  ];

  const Smartbrand = [
    {id: 1, brand: 'Apple'},
    {id: 2, brand: 'Samsung'},
  ];

  const fragBrand = [
    {id: 1, brand: 'Royal_Mirage'},
    {id: 2, brand: 'Fog Scent Xpressio'},
  ];

  const skinCareBrand = [
    {id: 1, brand: "L'Oreal Paris"},
    {id: 2, brand: 'Hemani Tea'},
  ];

  const groceriesBrand = [
    {id: 1, brand: 'Saaf & Khaas'},
    {id: 2, brand: 'Bake Parlor Big'},
  ];

  const [brand, setBrand] = useState(Smartbrand);

  const categoryRender = ({item}) => {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={styles.catData}
          activeOpacity={0.7}
          onPress={() => onSetCategory(item.name)}>
          <Text style={{fontSize: 16, color: '#FFF'}}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const onSetCategory = data => {
    setCategory(data);
    navigation.goBack();
  };

  const onSetSort = data => {
    setSortData(data);
    navigation.goBack();
  };

  return (
    <View style={styles.root}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.title}>Filters</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <Text style={styles.close}>Close</Text>
        </TouchableOpacity>
      </View>
      {/* category */}
      <View style={styles.option}>
        <Text style={{fontSize: 20, color: '#8c7ae6'}}>Category</Text>
        <FlatList
          data={categoryData}
          renderItem={categoryRender}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View style={{marginBottom: 2}} />}
        />
      </View>
      {/* sort */}
      <View style={styles.option}>
        <Text style={{fontSize: 20, color: '#8c7ae6'}}>Sort by</Text>
        <TouchableOpacity
          style={styles.catData}
          activeOpacity={0.7}
          onPress={() => onSetSort('ltoh')}>
          <Text style={{fontSize: 16, color: '#FFF'}}>Price : Low to High</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.catData}
          activeOpacity={0.7}
          onPress={() => onSetSort('htol')}>
          <Text style={{fontSize: 16, color: '#FFF'}}>
            Price : High to Low{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  close: {
    fontSize: 16,
    color: '#2980b9',
    fontWeight: 'bold',
  },
  option: {
    marginTop: 20,
  },
  catData: {
    marginTop: 10,
    width: 150,
    height: 50,
    borderColor: 'black',
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
