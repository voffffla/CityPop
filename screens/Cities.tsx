import { StatusBar } from 'expo-status-bar';
import {FlatList, View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, { useState } from 'react';
import TextContainer from '../components/TextContainer';
import tw from 'twrnc';
import type {RootStackScreenProps} from "../navigation/NavigationTypes"
import Toast from 'react-native-toast-message';
import { JSONResponse } from '../types/NetworkType';



//interface to define cities inside of data list
interface City{
    name: string;
    key: string;
}


/**
 * Search result screen that shows the cities with the highest population in a country
 * @param navigation component that comes with the stacknavigator to navigate to another screen 
 * @param route component that comes with the stacknavigator to get parameters sent from previous screen
 * @returns screen showing cities in the specified country in order of highest population
 */
export default function Cities({ navigation, route }: RootStackScreenProps<"Cities">) {
    
    const [loading, setLoading] = useState<boolean>(true)
    const [cities, setCities] = useState<Array<City>>([]);

    const getCities = async () => {
        try { // To catch errors from fetch function
        const response = await fetch(
            `http://api.geonames.org/searchJSON?formatted=true&q=${route.params["country"].toLowerCase()}&cities=cities15000&maxRows=100&style=MEDIUM&username=weknowit`
        );
            try{ // If there is a server error Json isn't returned and we need a try catch
                const json: JSONResponse = await response.json();            
                setLoading(false)
                
                var i: number = 0; // Variable to keep track of how many cities to display
                if (json) {
                    for(var element of json["geonames"]){ // for of so the loop can be broken
                        if (i > 10) {
                            break
                        }
                        if (element["countryName"].toLowerCase() === route.params["country"].toLowerCase()) {
                            i++
                                
                            setCities(prevData => 
                                prevData.concat({name: element["name"].toString(), key: Math.random().toString()}))                
                            
                        }
                    }
                }
            }catch{
                Toast.show({
                    type: "error",
                    text1: "Error",
                    text2: response.status.toString()
                })                
            }

        } catch (error) {    
            console.error(error);
        }
    };

    if (loading) {
        getCities()
        return(
            <View style={tw.style("flex-1 items-center justify-center bg-gray-800")}>
                <ActivityIndicator size="large" color="#7c3aed"/>
            </View>
            
        );

    } else {
        
        if(cities.length != 0){
            return (   
                <View style={tw.style("flex-1 items-center bg-gray-800")}>
                    <View style={tw.style("my-30 ")}>
                        <Text style={tw.style("text-4xl italic text-violet-400")}> {route.params["country"].toUpperCase()} </Text>
                    </View>

                    <View style={tw.style("mb-85 ")}>
                        <FlatList
                            data={cities}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={tw.style("m-1 ")} 
                                onPress = {() => navigation.navigate("CityPopulation", {city: item.name})}>
                                    <TextContainer value={item.name}/>
                                </TouchableOpacity>
                            
                            )}
                        />
                    </View>
                    
        
                    <StatusBar style="auto" />
                </View>
                );
        } else{
            return(
                <View style={tw.style("flex-1 items-center justify-center bg-gray-800")}>
                    <Text style={tw.style("text-4xl italic text-violet-400")}>No country found</Text>
                </View>
            );
            
        }       
    }  
    }