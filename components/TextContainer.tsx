import { View, Text} from "react-native";
import tw from 'twrnc';

//type to typecheck parameter value to function below
type Props = {
    value: string
}

/**
 * Function that returns a component to display text inside of a box
 * @param value, the value to be displayed inside the box
 * @returns react component
 */
export default function TextContainer ({value}:Props) {
    return (
      <View style={tw.style("bg-transparent p-4 border-2 border-blue-500 rounded min-w-11/12 items-center ")}>
          <Text style={tw.style("text-2xl italic text-blue-500")}> {value} </Text>
      </View>
    );
  }