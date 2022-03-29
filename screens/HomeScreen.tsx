import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity } from 'react-native';
import { RootStackScreenProps } from '../navigation/NavigationTypes';
import tw from 'twrnc';
import TextContainer from '../components/TextContainer';

/**
 * Homescreen that is shown at the start of the app
 * @param navigation component that comes with the stacknavigator 
 * @returns Homescreen view
 */
export default function HomeScreen({ navigation }: RootStackScreenProps<"HomeScreen">) {
    
  
  return (
    <View style={tw.style("flex-1 items-center justify-center")}>
        <Text> CityPop </Text>

        <TouchableOpacity onPress={() => navigation.navigate("SearchCity")}>
            <TextContainer value="Search by city" />
        </TouchableOpacity>

        <TouchableOpacity >
            <TextContainer value='Search by country'/>
        </TouchableOpacity>

        <StatusBar style="auto" />
    </View>
    );
}
