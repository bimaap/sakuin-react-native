
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Input from '../components/Input';

export default function RegisterProfile(){
  return (
    <TailwindProvider>
        <View className={`bg-[#293462] w-full h-full`}>
            <View className={`h-1/4 px-4 flex justify-center items-center`}>
                <Text className={`text-[#DBDFFD] font-bold text-2xl`}>sakuin</Text>
            </View>
            <View className={`flex-1 w-full p-4 rounded-t-3xl flex flex-col items-center justify-center bg-gray-100 space-y-5`}>
              <Text className={`text-[#293462] font-bold text-2xl`}>Profile</Text>
              <Text className={`text-gray-400 text-center text-base`}>Profile account Sakuin</Text>

              <View>
                <Input 
                  icon={['document-text-outline']}
                  placeholder={'First Name'}
                />
              </View>

              <View>
                <Input 
                  icon={['document-text-outline']}
                  placeholder={'Last Name'}
                />
              </View>

              <View>
                <Input 
                  icon={['image-outline']}
                  placeholder={'Profile Picture'}
                />
              </View>

              <TouchableOpacity className={`w-full`}>
                <View className={`w-full bg-gray-300 h-[48px] rounded flex items-center justify-center`}>
                  <Text className={`text-lg font-semibold text-gray-500`}>Continue</Text>
                </View>
              </TouchableOpacity>
            </View>
        </View>
    </TailwindProvider>
  )
}