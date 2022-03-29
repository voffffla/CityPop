import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SearchCity from '../screens/SearchCity';
import SearchCountry from '../screens/SearchCountry';
import { RootStackParamList } from './NavigationTypes';

export default function NavStack(){

    const RootStack = createStackNavigator<RootStackParamList>();

    return (
        <RootStack.Navigator initialRouteName='HomeScreen'>
            <RootStack.Screen name="HomeScreen" component={HomeScreen} options={{ title: '' , headerStyle: {
            backgroundColor: '#2563eb',
          }}}/>

            <RootStack.Screen name="SearchCity" component={SearchCity} options={{ title: '' , headerStyle: {
            backgroundColor: '#2563eb',
          }}}/>

            <RootStack.Screen name="SearchCountry" component={SearchCountry} options={{ title: '' , headerStyle: {
            backgroundColor: '#2563eb',
          }}}/>
        </RootStack.Navigator>
    )
}


