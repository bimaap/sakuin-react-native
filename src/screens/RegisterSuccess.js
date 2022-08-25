
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default function RegisterSuccess({ navigation }){
  return (
    <TailwindProvider>
        <View className={`bg-[#293462] w-full h-full`}>
            <View className={`h-1/4 px-4 flex justify-center items-center`}>
                <Text className={`text-[#DBDFFD] font-bold text-2xl`}>sakuin</Text>
            </View>
            <View className={`flex-1 w-full p-4 rounded-t-3xl flex flex-col items-center justify-center bg-gray-100 space-y-5`}>
                <View className={`w-[48px] h-[48px] flex items-center justify-center bg-green-500 rounded-full`}><Icon name={'checkmark-outline'} size={24} color={'white'} /></View>
                <Text className={`text-[#293462] font-bold text-2xl`}>Register Successfully</Text>
                <Text className={`text-gray-400 text-center text-base`}>Your Accont was successfully created and you can now access all the features in Sakuin. Login to your new account and start exploring!</Text>
                <TouchableOpacity className={`w-full`} onPress={() => navigation.navigate('Login')}>
                    <View className={`w-full bg-gray-300 h-[48px] rounded flex items-center justify-center`}>
                        <Text className={`text-lg font-semibold text-gray-500`}>Login Now</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </TailwindProvider>
  )
}