

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


export type JSONResponse = {
  geonames: Array<CityResults>
}