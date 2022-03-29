import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity } from 'react-native';
import { RootStackScreenProps } from '../navigation/NavigationTypes';
import tw from 'twrnc';


export default function HomeScreen({ }: RootStackScreenProps<"HomeScreen">) {
    
  
  return (
    <View style={tw.style("flex-1 items-center justify-center")}>
        <Text> CityPop </Text>

        <TouchableOpacity >
          <Text> Search by city </Text>
        </TouchableOpacity>

        <TouchableOpacity >
          <Text> Search by country </Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
    </View>
    );
}
