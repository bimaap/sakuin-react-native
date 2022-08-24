
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Input from '../components/Input';

export default function CreatePin(){
  return (
    <TailwindProvider>
        <View className={`bg-[#293462] w-full h-full`}>
            <View className={`h-1/4 px-4 flex justify-center items-center`}>
                <Text className={`text-[#DBDFFD] font-bold text-2xl`}>sakuin</Text>
            </View>
            <View className={`flex-1 w-full p-4 rounded-t-3xl flex flex-col items-center justify-center bg-gray-100 space-y-5`}>
                <Text className={`text-[#293462] font-bold text-2xl`}>Create Security PIN</Text>
                <Text className={`text-gray-400 text-center text-base`}>Create a PIN that’s contain 6 digits number for security purpose in Sakuin</Text>

                <View className={`flex flex-row w-full justify-between`}>
                    <View>
                        <Input 
                        icon={['document-text-outline']}
                        type={'numeric'}
                        />
                    </View>
                    <View>
                        <Input 
                        icon={['document-text-outline']}
                        type={'numeric'}
                        />
                    </View>
                    <View>
                        <Input 
                        icon={['document-text-outline']}
                        type={'numeric'}
                        />
                    </View>
                    <View>
                        <Input 
                        icon={['document-text-outline']}
                        type={'numeric'}
                        />
                    </View>
                    <View>
                        <Input 
                        icon={['document-text-outline']}
                        type={'numeric'}
                        />
                    </View>
                    <View>
                        <Input 
                        icon={['document-text-outline']}
                        type={'numeric'}
                        />
                    </View>
                </View>

                <TouchableOpacity className={`w-full`}>
                    <View className={`w-full bg-gray-300 h-[48px] rounded flex items-center justify-center`}>
                    <   Text className={`text-lg font-semibold text-gray-500`}>Continue</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </TailwindProvider>
  )
}