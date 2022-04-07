import { StatusBar } from 'expo-status-bar';
import { View, Text, ActivityIndicator} from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import type {RootStackScreenProps} from "../navigation/NavigationTypes"
import Toast from 'react-native-toast-message';
import { JSONResponse } from '../types/NetworkType';

/**
 * Search result screen that shows the population in the specified city
 * @param route component that comes with the stacknavigator to get parameters sent from previous screen
 * @returns screen that shows a city and its population
 */
 export default function CityPopulation({ route }: RootStackScreenProps<"CityPopulation">) {
    
    const [loading, setLoading] = useState<boolean>(true)
    const [population, setPopulation] = useState< number | null>();

    const getPopulation = async () => {
        try {// To catch errors from fetch function
        const response = await fetch(
            `http://api.geonames.org/searchJSON?formatted=true&q=${route.params["city"].toLowerCase()}&cities=cities15000&maxRows=100&style=MEDIUM&username=weknowit`
        );
            try{ // If there is a server error Json isn't returned and we need a try catch     
                const json: JSONResponse = await response.json();
                setLoading(false)

                for(var element of json["geonames"]){ // for of so the loop can be broken              
                    if (element["name"].toLowerCase() === route.params["city"].toLowerCase()) {
                            
                        setPopulation(element["population"])
                        break
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
        getPopulation()
        return(
            <View style={tw.style("flex-1 items-center justify-center bg-gray-800")}>
                <ActivityIndicator size="large" color="#7c3aed"/>
            </View>
            
        );
        
    } else {
        
        if(population){
            return (    
                <View style={tw.style("flex-1 items-center justify-center bg-gray-800")}>
                    <View style={tw.style("mb-35 ")}>
                        <Text style={tw.style("text-4xl italic text-violet-400")}> {route.params["city"].toUpperCase()} </Text>
                    </View>
                    <View style={tw.style("bg-transparent border-2 border-violet-600 rounded min-w-11/12 items-center mb-30")}>
                        <Text style={tw.style("text-lg italic text-violet-400 mb-3")}>Population</Text>
                        <Text style={tw.style("text-4xl italic text-violet-400 mb-3")}> {population} </Text>
                    </View>
                    
   
                    <StatusBar style="auto" />
                </View>
                );
        } else{
            return(
                <View style={tw.style("flex-1 items-center justify-center bg-gray-800")}>
                    <Text style={tw.style("text-4xl italic text-violet-400")}>No city found</Text>
                </View>
            );
            
        }
        
        
    }
    
    }