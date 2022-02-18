import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Center = (props: any) => {
  return <View style={styles.screen}>{props.children}</View>;
};

export default Center;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
