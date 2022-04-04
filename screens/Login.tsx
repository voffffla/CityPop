import { StatusBar } from 'expo-status-bar';
import {TouchableWithoutFeedback, Keyboard, View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import tw from 'twrnc';
import { RootStackScreenProps } from '../navigation/NavigationTypes';
import TextContainer from '../components/TextContainer';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User} from 'firebase/auth';
import {auth } from '../firebase';
import Toast from 'react-native-toast-message';

/**
 * Login screen before use of app
 * @param navigation component that comes with the stacknavigator 
 * @returns search screen for login
 */
export default function Login({ navigation }: RootStackScreenProps<"Login">) {
    

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            navigation.replace("HomeScreen")
          }
        })
    
        return unsubscribe
      }, [])

    const handleSignUp = () => {    
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential: { user: User; }) => {            
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error: { code: string;}) => {
            const errorCode = error.code;
            Toast.show({
                type: "error",
                text1: "Error",
                text2: errorCode.replace("auth/", "")
            })
            
            
        });
    }

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential: { user: User; }) => {
            const user = userCredential.user;
            console.log(user);
            
        })
        .catch((error: { code: string; }) => {
            const errorCode = error.code;
            Toast.show({
                type: "error",
                text1: "Error",
                text2: errorCode.replace("auth/", ""),
            })

        });

    }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={tw.style("flex-1 items-center justify-center bg-gray-800")}>
            <View style={tw.style("mb-20 ")}>
                <Text style={tw.style("text-4xl italic text-violet-400")}> CityPop </Text>
            </View>

            <View style={tw.style("px-6")}>
                <TextInput 
                style={tw.style("border-2 border-violet-600 min-w-11/12 items-center text-lg p-4 text-violet-400")}
                textAlign={'center'}
                placeholder='Email'
                onChangeText={(value: string) => setEmail(value)}
                value={email} 
                />

                <TextInput 
                style={tw.style("border-2 border-violet-600 min-w-11/12 items-center text-lg p-4 text-violet-400 mt-2")}
                textAlign={'center'}
                placeholder='Password'
                onChangeText={(value: string) => setPassword(value)}
                value={password} 
                secureTextEntry
                />
            </View>

            <View style={tw.style("px-10 mb-20 mt-8")}>
                <TouchableOpacity
                style={tw.style("bg-violet-600 p-4 border-2 border-violet-600 rounded min-w-11/12 items-center")}
                onPress = {handleSignIn}>
                    <Text style={tw.style("text-2xl italic text-gray-800")}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={tw.style("mt-2 ")}
                onPress = {handleSignUp}>
                    <TextContainer value="Register" />
                </TouchableOpacity>
            </View>

            <StatusBar style="auto" />
        </View>
        </TouchableWithoutFeedback>
        );
    }