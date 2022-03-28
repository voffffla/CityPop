import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './NavigationTypes';

export default function NavStack(){

    const RootStack = createStackNavigator<RootStackParamList>();

    return (
        <RootStack.Navigator >
        
        </RootStack.Navigator>
    )
}


