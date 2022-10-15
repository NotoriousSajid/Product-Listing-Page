import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import navigationScreen from '../constants/navigationScreen';
import Filters from '../screens/Filters';
import Cart from '../screens/Cart';
const Stack = createNativeStackNavigator();

export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={navigationScreen.HOME} component={Home} />
        <Stack.Screen name={navigationScreen.FILTERS} component={Filters} />
        <Stack.Screen name={navigationScreen.ADDTOCART} component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
