import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { RootStackParamList } from './NavigationTypes';

export default function NavStack(){

    const RootStack = createStackNavigator<RootStackParamList>();

    return (
        <RootStack.Navigator initialRouteName='HomeScreen'>
            <RootStack.Screen name="HomeScreen" component={HomeScreen} options={{ title: '' , headerStyle: {
            backgroundColor: '#2563eb',
          }}}/>
        </RootStack.Navigator>
    )
}


