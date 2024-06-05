import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
const HomeScreen = () => {
  return (
    <View className="flex-1 bg-white ">
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 pt-14"
      >
        {/* avatar and notification */}
        <View className="mx-4 flex-row justify-between">
          <Image
            source={{
              uri: "https://img.freepik.com/premium-photo/memoji-african-american-man-white-background-emoji_826801-6842.jpg?w=826",
            }}
            resizeMode="cover"
            style={{ width: hp(5), height: hp(5.5) }}
          />
          <BellIcon size={hp(4)} color="gray" />
        </View>

        {/* greetings and slogan */}
        <View className="mx-4 space-y-2 mb-2">
          <Text className="text-neutral-600" style={{ fontSize: hp(1.7) }}>
            Hello, Yonas!
          </Text>
          <View>
            <Text
              className="text-neutral-600 font-semibold"
              style={{ fontSize: hp(3.8) }}
            >
              <Text className="text-amber-400">Cook </Text>
              what you like,
            </Text>
          </View>
          <Text
            className="text-neutral-600 font-semibold"
            style={{ fontSize: hp(3.8) }}
          >
            Explore our <Text className="text-amber-400">Book</Text>
          </Text>
        </View>

        {/* search bar */}
        <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
          <TextInput
            placeholder="search what you are craving for"
            placeholderTextColor={"gray"}
            style={{ fontSize: hp(1.7) }}
            className="flex-1 text-base mb-1 pl-3 tracking-wider"
          />
          <View className="bg-white rounded-full p-3">
            <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="gray" />
          </View>
        </View>

        {/* categories  */}
        <View></View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
