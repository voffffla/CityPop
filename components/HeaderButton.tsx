import {useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {TouchableOpacity, Text, View } from "react-native";
import tw from 'twrnc';
import { auth } from "../firebase";
import { RootStackParamList } from "../navigation/NavigationTypes";

export default function HeaderButton(){
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }

    return(
        <View>
        <TouchableOpacity
            style={tw.style("bg-gray-800 p-2 border-2 border-violet-600 rounded-2 items-center mr-4")}
            onPress = {handleSignOut}>
            <Text style={tw.style("text-lg italic text-violet-400")}>Logout</Text>
        </TouchableOpacity>
        </View>
    );
    
}
