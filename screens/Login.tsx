import { StatusBar } from 'expo-status-bar';
import {TouchableWithoutFeedback, Keyboard, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import { RootStackScreenProps } from '../navigation/NavigationTypes';
import TextContainer from '../components/TextContainer';

/**
 * Login screen before use of app
 * @param navigation component that comes with the stacknavigator 
 * @returns search screen for login
 */
export default function Login({ navigation }: RootStackScreenProps<"Login">) {
    

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
  
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
                onPress = {() => navigation.replace("HomeScreen")}>
                    <Text style={tw.style("text-2xl italic text-gray-800")}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={tw.style("mt-2 ")}
                onPress = {() => navigation.replace("HomeScreen")}>
                    <TextContainer value="Register" />
                </TouchableOpacity>
            </View>

            <StatusBar style="auto" />
        </View>
        </TouchableWithoutFeedback>
        );
    }