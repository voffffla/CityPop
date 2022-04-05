import { NavigationContainer } from '@react-navigation/native';
import NavStack from "./navigation/NavigationStack";
import Toast from 'react-native-toast-message';
import { toastConfig } from './components/ToastConfig';

export default function App() {
  return (
    <NavigationContainer>
      <NavStack/>
      <Toast config={toastConfig}/>
    </NavigationContainer>
    
  );
}
