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
    <View style={tw.style("flex-1 items-center justify-center bg-gray-800	")}>
      <View style={tw.style("mb-35 ")}>
        <Text style={tw.style("text-4xl italic text-violet-400")}> CityPop </Text>
      </View>
        
      <View style={tw.style("my-4 ")}>
        <TouchableOpacity onPress={() => navigation.navigate("SearchCity")}>
          <TextContainer value="Search by city" />
        </TouchableOpacity>
      </View>

      <View style={tw.style("mb-40 ")}>
        <TouchableOpacity onPress={() => navigation.navigate("SearchCountry")}>
          <TextContainer value='Search by country'/>
        </TouchableOpacity>
      </View>
        <StatusBar style="auto" />
    </View>
    );
}
