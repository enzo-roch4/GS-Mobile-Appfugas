import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAsEIQ8tROfKTHZWJCHB-2F8YB3DEVYObk",
  authDomain: "appfugas.firebaseapp.com",
  projectId: "appfugas",
  storageBucket: "appfugas.appspot.com",
  messagingSenderId: "684433849161",
  appId: "1:684433849161:android:s1af823bd376111d4b898",
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
export default app;
