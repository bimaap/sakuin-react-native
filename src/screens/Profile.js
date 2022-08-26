
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import default_profile from '../assets/images/default.jpg'
import Menu from '../components/Menu';

export default function Profile({ navigation }){
    return (
        <TailwindProvider>
            <View className={`h-1/6 bg-gray-100`}>
                <View className={`bg-[#293462] p-8 flex justify-end h-full rounded-b-3xl`}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <View className={`w-full flex flex-row items-center space-x-2`}>
                            <Icon name={'arrow-back'} size={24} color={'white'} />
                            <Text className={`text-[#DBDFFD] font-bold text-base`}>Profile</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View className={`bg-gray-100 w-full flex flex-col flex-1`}>
                <View className={`w-full p-4 flex flex-col items-center justify-center space-y-4 flex-1`}>
                    <View className={`w-[70px] h-[70px] rounded-lg overflow-hidden`}>
                        <ImageBackground source={default_profile} className={`w-[70px] h-[70px]`} />
                    </View>
                    <View className={`flex flex-row items-center space-x-1`}>
                        <Icon name={'create-outline'} size={18} color={'grey'} />
                        <Text className={`text-gray-500 text-sm`}>Edit</Text>
                    </View>
                    <Text className={`text-gray-900 text-lg font-bold`}>Robert Chandler</Text>
                    <Text className={`text-gray-500 text-sm`}>+62 813-9387-7946</Text>

                    <TouchableOpacity className={`w-full`} onPress={() => navigation.navigate('PersonalInformation')}>
                        <View className={`w-full bg-gray-300 h-[48px] rounded flex items-center justify-between flex-row px-4`}>
                            <Text className={`text-lg font-semibold text-gray-500`}>Personal Information</Text>
                            <Icon name={'chevron-forward-outline'} size={18} color={'grey'} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className={`w-full`} onPress={() => navigation.navigate('ChangePassword')}>
                        <View className={`w-full bg-gray-300 h-[48px] rounded flex items-center justify-between flex-row px-4`}>
                            <Text className={`text-lg font-semibold text-gray-500`}>Change Password</Text>
                            <Icon name={'chevron-forward-outline'} size={18} color={'grey'} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className={`w-full`} onPress={() => navigation.navigate('ChangePin')}>
                        <View className={`w-full bg-gray-300 h-[48px] rounded flex items-center justify-between flex-row px-4`}>
                            <Text className={`text-lg font-semibold text-gray-500`}>Change PIN</Text>
                            <Icon name={'chevron-forward-outline'} size={18} color={'grey'} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className={`w-full`} onPress={() => navigation.navigate('PersonalInformation')}>
                        <View className={`w-full bg-gray-300 h-[48px] rounded flex justify-center  px-4`}>
                            <Text className={`text-lg font-semibold text-gray-500`}>Logout</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </TailwindProvider>
    )
}