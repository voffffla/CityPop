
import type { StackScreenProps } from '@react-navigation/stack';

/**
 * Type checking for navigation parameters according to 
 * https://reactnavigation.org/docs/typescript/#specifying-default-types-for-usenavigation-link-ref-etc
 */


//all the screens / tabs and thier parameters
export type RootStackParamList = {
    HomeScreen: undefined
    SearchCity: undefined
    SearchCountry: undefined
    Cities: {country: string}
    CityPopulation: {city: string}
    Login: undefined
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
StackScreenProps<RootStackParamList, T>;


