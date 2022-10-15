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
import navigatonScreen from '../constants/navigationScreen';
import {useIsFocused} from '@react-navigation/native';
import {setCart} from '../redux/actions/cart';

const Home = ({navigation}) => {
  const [carCount, setCount] = useState(0);
  const isFocused = useIsFocused();
  const product = useSelector(state => state.appReducer.product.AllProduct);
  console.log('mydata : ', product.products);
  const cate = useSelector(state => state.appReducer.category.Category);
  console.log('category : ', cate);
  const sort = useSelector(state => state.appReducer.sort.Sort);
  console.log('category : ', sort);
  const cart = useSelector(state => state.appReducer.cart.Cart);
  console.log('cart : ', cart);

  const [mydata, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    setData(product.products);
    filterProduct();
  }, [isFocused, mydata]);

  const filterProduct = async () => {
    let sortData;
    console.log('original,', mydata);
    const searchData = mydata.filter(data => data.category == cate);

    if (sort == 'ltoh') {
      sortData = [...searchData].sort((a, b) => a.price - b.price);
    } else {
      sortData = [...searchData].sort((a, b) => b.price - a.price);
    }
    setFilterData(sortData);
    console.log('filter data : ', searchData);
  };

  const onCart = (thumbnail, title, description, price, id) => {
    console.log('thumnail : ', thumbnail);
    console.log('title : ', title);
    setCart(thumbnail, title, description, price, id);
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.product} activeOpacity={0.7}>
        <Image source={{uri: item.thumbnail}} style={styles.thumbnail} />
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
          <Text>({item.discountPercentage} % off)</Text>
          {item.stock < 50 ? (
            <Text style={styles.stock}>hurry! only a few items left</Text>
          ) : (
            <Text></Text>
          )}
        </View>
        <TouchableOpacity
          style={styles.cart}
          onPress={() =>
            onCart(
              item.thumbnail,
              item.title,
              item.description,
              item.price,
              item.id,
            )
          }>
          <Text style={styles.cartText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.heading}>My Shop</Text>

        {/* cart */}
        <TouchableOpacity
          style={styles.cartItem}
          onPress={() => navigation.navigate(navigatonScreen.ADDTOCART)}>
          <Text style={styles.cartItemText}>Cart</Text>
        </TouchableOpacity>
      </View>
      {/* Filter */}

      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.filters}
        onPress={() => navigation.navigate(navigatonScreen.FILTERS)}>
        <Text style={styles.filtersText}>Filters</Text>
      </TouchableOpacity>

      <Text style={{fontSize: 20, marginBottom: 10}}>{cate}</Text>
      {/* Product by filter(brand,catogry) and sort(price, discount) */}
      <FlatList
        data={filterData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{marginBottom: 10}} />}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  cartItem: {
    width: 100,
    height: 40,
    backgroundColor: '#20bf6b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },

  cartItemText: {
    fontSize: 20,
    color: '#FFF',
  },
  heading: {
    fontSize: 25,
    marginTop: 20,
    color: 'black',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  filters: {
    alignSelf: 'flex-end',
    marginBottom: 10,
    width: 150,
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  filtersText: {
    fontSize: 20,
    color: 'white',
  },
  thumbnail: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  product: {
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

  productDetails: {
    marginVertical: 10,
  },

  title: {
    fontSize: 16,
    color: 'black',
    marginBottom: 2,
  },
  stock: {
    marginLeft: 10,
    color: 'red',
  },
  cart: {
    marginVertical: 10,
    alignSelf: 'center',
    width: 150,
    height: 50,
    backgroundColor: '#F79F1F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  cartText: {
    fontSize: 20,
    color: 'white',
  },
});
