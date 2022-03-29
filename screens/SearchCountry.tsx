import { StatusBar } from 'expo-status-bar';
import { TouchableWithoutFeedback, Keyboard, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import { RootStackScreenProps } from '../navigation/NavigationTypes';



/**
 * Search screem that is shown when searching by a country
 * @param navigation component that comes with the stacknavigator 
 * @returns search screen for countries
 */
export default function SearchCountry({ navigation }: RootStackScreenProps<"SearchCountry">) {

    const [text, setText] = useState<string>("");

    const changeHandler = (value: string) => {
        setText(value);
    };
  
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={tw.style("flex-1 items-center justify-center")}>
            <View style={tw.style("mb-35 ")}>
                <Text style={tw.style("text-4xl italic text-blue-800")}> Search by country </Text>
            </View>

            <TextInput 
            style={tw.style("border-2 border-blue-500 min-w-11/12 items-center text-lg p-4")}
            textAlign={'center'}
            placeholder='Enter a country'
            onChangeText={changeHandler}
            value={text} 
            />

            <TouchableOpacity 
            style={tw.style("mb-20 mt-4 border-2 rounded-full ")}
            >
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
