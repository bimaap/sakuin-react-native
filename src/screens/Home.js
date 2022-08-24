
import { View, Text } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";

const Home = () => {
  return (
    <TailwindProvider>
        <View className="bg-gray-200 w-full h-full">
            <View className="h-[48px] px-4 flex justify-center bg-gray-800">
                <Text>Halo</Text>
            </View>
        </View>
    </TailwindProvider>
  )
}

export default Home