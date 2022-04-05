import { createStackNavigator } from '@react-navigation/stack';
import LogoutButton from '../components/LogoutButton';
import Cities from '../screens/Cities';
import CityPopulation from '../screens/CityPopulation';
import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/Login';
import SearchCity from '../screens/SearchCity';
import SearchCountry from '../screens/SearchCountry';
import { RootStackParamList } from './NavigationTypes';


/**
 * Function that creates a stack navigator for navigating in the app.
 * The start page is HomeScreen
 * @returns StackNavigator
 */
export default function NavStack(){

    const RootStack = createStackNavigator<RootStackParamList>();

    return (
        <RootStack.Navigator initialRouteName='Login'>
            <RootStack.Screen name="Login" component={Login} options={{ title: '' , headerStyle: {
            backgroundColor: '#7c3aed'}}}/>

            <RootStack.Screen name="HomeScreen" component={HomeScreen} options={{ title: '' , headerStyle: {
            backgroundColor: '#7c3aed',
          } , headerRight: () => <LogoutButton/>}}/>

            <RootStack.Screen name="SearchCity" component={SearchCity} options={{ title: 'CityPop' , headerStyle: {
            backgroundColor: '#7c3aed',
          }, headerRight: () => <LogoutButton/>}}/>

            <RootStack.Screen name="SearchCountry" component={SearchCountry} options={{ title: 'CityPop' , headerStyle: {
            backgroundColor: '#7c3aed',
          }, headerRight: () => <LogoutButton/>}}/>

            <RootStack.Screen name="Cities" component={Cities} options={{ title: 'CityPop' , headerStyle: {
            backgroundColor: '#7c3aed',
          }, headerRight: () => <LogoutButton/>}}/>

            <RootStack.Screen name="CityPopulation" component={CityPopulation} options={{ title: 'CityPop' , headerStyle: {
            backgroundColor: '#7c3aed',
          }, headerRight: () => <LogoutButton/>}}/> 
        </RootStack.Navigator>
    )
}


