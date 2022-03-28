import { NavigationContainer } from '@react-navigation/native';
import NavStack from "./navigation/NavigationStack"

export default function App() {
  return (
    <NavigationContainer>
      <NavStack/>
    </NavigationContainer>
  );
}
