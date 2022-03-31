import { StatusBar } from 'expo-status-bar';
import { View, Text, ActivityIndicator} from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import type {RootStackScreenProps} from "../navigation/NavigationTypes"



/**
 * Search screem that shows the cities with the highest population in a country
 * @param route component that comes with the stacknavigator to get parameters sent from previous screen
 * @returns screen that shoiw a city and its population
 */

 export default function CityPopulation({ route }: RootStackScreenProps<"CityPopulation">) {
    const [loading, setLoading] = useState<boolean>(true)

    const [population, setPopulation] = useState< number | null>();

    const getPopulation = async () => {
        try {
        const response = await fetch(
            `http://api.geonames.org/searchJSON?formatted=true&q=${route.params["city"].toLowerCase()}&cities=cities15000&maxRows=100&style=MEDIUM&username=weknowit`
        );
                
        const json = await response.json();
        
        for(var element of json["geonames"]){
            setLoading(false)    
            
            if (element["name"].toLowerCase() === route.params["city"].toLowerCase()) {
                    
                setPopulation(element["population"])
                break
                
            }
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