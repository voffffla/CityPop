
// Type for city object in result from fetch in Cites.tsx / CityPopulation.tsx
type CityResults ={
    "adminCode1": string,
      "adminCodes1": Object,
      "adminName1": string,
      "countryCode": string,
      "countryId": string,
      "countryName": string,
      "fcl": string,
      "fclName": string,
      "fcode": string,
      "fcodeName": string,
      "geonameId": number,
      "lat": string,
      "lng": string,
      "name": string,
      "population": number,
      "toponymName": string,
}

// Type for response from fetch in Cites.tsx / CityPopulation.tsx
export type JSONResponse = {
  geonames: Array<CityResults>
}