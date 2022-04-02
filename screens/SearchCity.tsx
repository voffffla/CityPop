import { StatusBar } from 'expo-status-bar';
import {TouchableWithoutFeedback, Keyboard, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import { RootStackScreenProps } from '../navigation/NavigationTypes';

/**
 * Search screen that is show when searching by a city
 * @param navigation component that comes with the stacknavigator to navigate to another screen
 * @returns search screen for cities
 */
export default function SearchCity({ navigation }: RootStackScreenProps<"SearchCity">) {
    

    const [text, setText] = useState<string>(""); //To easly extract the content of the TextInput

    const changeHandler = (value: string) => {
        setText(value);
    };
  
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={tw.style("flex-1 items-center justify-center bg-gray-800")}>
            <View style={tw.style("mb-35 ")}>
                <Text style={tw.style("text-4xl italic text-violet-400")}> Search by city </Text>
            </View>

            <TextInput 
            style={tw.style("border-2 border-violet-600 min-w-11/12 items-center text-lg p-4 text-violet-400")}
            textAlign={'center'}
            placeholder='Enter a city'
            onChangeText={changeHandler}
            value={text} 
            />

            <TouchableOpacity
             style={tw.style("mb-20 mt-4 border-2 rounded-full border-violet-600 ")}
             onPress = {() => navigation.navigate("CityPopulation", {city: text.trim()})}>
                <Image
                source={require("../assets/magnify.png")}
                  style={tw.style("w-15 h-15")} 
                />
            </TouchableOpacity>

            <StatusBar style="auto" />
        </View>
        </TouchableWithoutFeedback>
        );
    }