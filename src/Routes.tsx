import { NavigationContainer, RouteProp } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
  //StackScreenProps
} from "@react-navigation/stack";
import React from "react";
import { Button, StyleSheet, Text } from "react-native";
import { AuthNavProps, AuthParamList } from "./AuthParamList";
import Center from "./Center";

interface RoutesProps {}

const Stack = createStackNavigator<AuthParamList>();

function Login({ navigation, route }: AuthNavProps<"Login">) {
  return (
    <Center>
      <Text>Login</Text>
      <Button
        title="Go to Reg"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
    </Center>
  );
}

function Register({ navigation }: AuthNavProps<"Register">) {
  return (
    <Center>
      <Text>Register</Text>
      <Button
        title="Go to Login"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    </Center>
  );
}

export const Routes: React.FC<RoutesProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Register"
        screenOptions={
          {
            // header: () => null,
          }
        }
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
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
