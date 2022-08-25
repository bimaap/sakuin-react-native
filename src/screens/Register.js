
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Input from '../components/Input';

export default function Register({navigation}){
  return (
    <TailwindProvider>
        <View className={`bg-[#293462] w-full h-full`}>
            <View className={`h-1/4 px-4 flex justify-center items-center`}>
                <Text className={`text-[#DBDFFD] font-bold text-2xl`}>sakuin</Text>
            </View>
            <View className={`flex-1 w-full p-4 rounded-t-3xl flex flex-col items-center justify-center bg-gray-100 space-y-5`}>
              <Text className={`text-[#293462] font-bold text-2xl`}>Register</Text>
              <Text className={`text-gray-400 text-center text-base`}>Create your account to access Sakuin</Text>

              <View>
                <Input 
                  icon={['mail-outline']}
                  placeholder={'Email'}
                  type={'email-address'}
                />
              </View>

              <View>
                <Input 
                  icon={['lock-closed-outline', 'eye-outline', 'eye-off-outline']}
                  placeholder={'password'}
                  secretInput={true}
                  type={'default'}
                />
              </View>

              <TouchableOpacity className={`w-full`} onPress={() => navigation.navigate('RegisterProfile')}>
                <View className={`w-full bg-gray-300 h-[48px] rounded flex items-center justify-center`}>
                  <Text className={`text-lg font-semibold text-gray-500`}>Register</Text>
                </View>
              </TouchableOpacity>

              <View className={`flex flex-row space-x-1`}>
                <Text className={`text-gray-400`}>Already have an account? Let’s</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text className={`text-[#293462] font-semibold`}>Login</Text></TouchableOpacity>
              </View>
            </View>
        </View>
    </TailwindProvider>
  )
}