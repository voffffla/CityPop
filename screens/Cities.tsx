import { StatusBar } from 'expo-status-bar';
import {FlatList, View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, { useEffect, useState } from 'react';
import TextContainer from '../components/TextContainer';
import tw from 'twrnc';
import type {RootStackScreenProps} from "../navigation/NavigationTypes"


//interface to define cities inside of data list
interface City{
    name: string;
    key: string;
}

/**
 * Search screem that shows the cities with the highest population in a country
 * @param navigation component that comes with the stacknavigator 
 * @param route component that comes with the stacknavigator to get parameters sent from previous screen
 * @returns screen showing cities in the specified country in order of highest population
 */
export default function Cities({ navigation, route }: RootStackScreenProps<"Cities">) {
    const [loading, setLoading] = useState<boolean>(true)

    const [data, setData] = useState< Array<City>>([]);

    const getCities = async () => {
        try {
        const response = await fetch(
            `http://api.geonames.org/searchJSON?formatted=true&q=${route.params["country"].toLowerCase()}&cities=cities15000&maxRows=100&style=MEDIUM&username=weknowit`
        );
                
        const json: any = await response.json();
        var i:number = 0;
        
        for(var element of json["geonames"]){ // for of so the loop can be broken
            setLoading(false)
            if (i > 10) {
                
                break
            }else
            if (element["countryName"].toLowerCase() === route.params["country"].toLowerCase()) {
                i++
                    
                setData(prevData => 
                    prevData.concat({name: element["name"].toString(), key: Math.random().toString()}))                
                
            }
        }
            
        } catch (error) {
        console.error(error);
        }
    };

    if (loading) {
        getCities()
        return(
            <View style={tw.style("flex-1 items-center justify-center")}>
                <ActivityIndicator size="large" color="#2563eb"/>
            </View>
            
        );
        
        
    } else {
        
        if(data.length != 0){
            return (
                
                
                <View style={tw.style("flex-1 items-center ")}>
                    <View style={tw.style("my-30 ")}>
                        <Text style={tw.style("text-4xl italic text-blue-800")}> {route.params["country"].toUpperCase()} </Text>
                    </View>

                    <View style={tw.style("mb-85 ")}>
                        <FlatList
                            data={data}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={tw.style("m-1 ")} 
                                >
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
                <View style={tw.style("flex-1 items-center justify-center")}>
                    <Text style={tw.style("text-4xl italic text-black")}>No country found</Text>
                </View>
            );
            
        }
        
        
    }
    
    }