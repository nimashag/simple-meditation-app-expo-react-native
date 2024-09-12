import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from "expo-status-bar";

import beachImage from "@/assets/meditation-images/beach.webp";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";

const App = () => {

  const router = useRouter();

  return (
    <View className="flex-1">
      <ImageBackground 
        source={beachImage}
        resizeMode="cover"
        className="flex-1">
          <LinearGradient className="flex-1" colors={["rgba( 0, 0, 0, 0.4)", "rgba( 0, 0, 0, 0.8)"]}>
            <SafeAreaView className="flex-1 mx-5 my-12 justify-between">
              <View>
                <Text className="text-center text-white font-bold text-3xl mt-6">Simple Meditation</Text>
                <Text className="text-center text-white font-regular text-xs mt-2">Simplifying Meditation for Everyone</Text>
              </View>

              <View>
                <CustomButton onPress={() => router.push("/test")} title='Get Started' />
              </View>

              <StatusBar style="light" />
            </SafeAreaView>
          </LinearGradient> 
      </ImageBackground>
    </View>
  )
}

export default App
