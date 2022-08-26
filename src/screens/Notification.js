
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import default_profile from '../assets/images/default.jpg'
import Menu from '../components/Menu';
import Input from '../components/Input';

export default function Notification({ navigation }){
    return (
        <TailwindProvider>
            <View className={`h-1/6 bg-gray-100`}>
                <View className={`bg-[#293462] p-8 flex justify-end h-full rounded-b-3xl`}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <View className={`w-full flex flex-row items-center space-x-2`}>
                            <Icon name={'arrow-back'} size={24} color={'white'} />
                            <Text className={`text-[#DBDFFD] font-bold text-base`}>Notification</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View className={`p-4 bg-gray-100 flex flex-col flex-1 space-y-4`}>
                <Text className={`text-[#8289AF] text-sm`}>Today</Text>
                <View className={`w-full bg-[#DBDFFD] px-4 py-2 flex flex-row rounded-lg items-center space-x-2`}>
                    <Icon name={'arrow-up'} size={24} color={'#56b14a'} />
                    <View>
                        <Text className={`text-[#8289AF] text-sm`}>Transfered from Joshua Lee</Text>
                        <Text className={`text-[#293462] font-bold text-base`}>Rp220.000</Text>
                    </View>
                </View>
                <View className={`w-full bg-[#DBDFFD] px-4 py-2 flex flex-row rounded-lg items-center space-x-2`}>
                    <Icon name={'arrow-down'} size={24} color={'#c94e4e'} />
                    <View>
                        <Text className={`text-[#8289AF] text-sm`}>Netflix subscription</Text>
                        <Text className={`text-[#293462] font-bold text-base`}>Rp. 149.000</Text>
                    </View>
                </View>
            </View>
        </TailwindProvider>
    )
}