import { NavigationContainer, RouteProp } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
  //StackScreenProps
} from "@react-navigation/stack";
import React, { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StyleSheet,
  Text,
} from "react-native";
import { AppTabs } from "./AppTabs";
import { AuthNavProps, AuthParamList } from "./AuthParamList";
import { AuthContext } from "./AuthProvider";
import { AuthStack } from "./AuthStack";
import Center from "./Center";

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = () => {
  const { user, login } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // check if the user is logged in or not
    // AsyncStorage.getItem("user")
    //   .then((userString) => {
    //     console.log(userString);
    //     if (userString) {
    //       // decode it
    //       console.log(userString);
    //       login();
    //     }
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }
  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
