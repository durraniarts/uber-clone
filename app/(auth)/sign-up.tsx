import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignUpPress = async () => {};

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative bg-white">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create Your Account
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label={"Name"}
            placeholder={"Enter your name"}
            icon={icons.person}
            value={form.name}
            onChangeText={(value: string) => {
              setForm((prevValue) => ({ ...prevValue, name: value }));
            }}
          />
          <InputField
            label={"Email"}
            placeholder={"Enter your email"}
            icon={icons.email}
            value={form.email}
            onChangeText={(value: string) => {
              setForm((prevValue) => ({ ...prevValue, email: value }));
            }}
          />
          <InputField
            label={"Password"}
            placeholder={"Enter your password"}
            icon={icons.lock}
            value={form.password}
            onChangeText={(value: string) => {
              setForm((prevValue) => ({ ...prevValue, password: value }));
            }}
          />
          <CustomButton
            title="Sign Up"
            onPress={onSignUpPress}
            className="mt-6"
          />

          {/* TODO: OAuth */}
          <OAuth />

          <Link
            href={"/(auth)/sign-in"}
            className="text-center text-lg text-general-200 mt-3"
          >
            <Text>Already have an account? </Text>
            <Text className="text-primary-500"> Log In</Text>
          </Link>
        </View>
        {/* TODO: Verification Modal */}
      </View>
    </ScrollView>
  );
};

export default SignUp;
