import { Redirect } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeComponent = () => {
  return (
    <Redirect href={"/(auth)/welcome"} />
    // <SafeAreaView>
    //   <Text className="text-black">Home</Text>
    // </SafeAreaView>
  );
};

export default HomeComponent;
