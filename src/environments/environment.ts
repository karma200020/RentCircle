// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BASE_URL : ' http://127.0.0.1:8000/',
  firebase: {
    apiKey: "AIzaSyAuYTC9gjRIJ-u6TDCFEMBYCOpis-Q6gg0",
    authDomain: "rentcircle-79afe.firebaseapp.com",
    databaseURL: "https://rentcircle-79afe.firebaseio.com",
    projectId: "rentcircle-79afe",
    storageBucket: "rentcircle-79afe.appspot.com",
    messagingSenderId: "197045495086",
    appId: "1:197045495086:web:558cf715a40331f5bec6bf",
    measurementId: "G-81X7PT00RX"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
