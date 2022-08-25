
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import default_profile from '../assets/images/default.jpg'
import Menu from '../components/Menu';

export default function Topup({ navigation }){
    return (
        <TailwindProvider>
            <View className={`h-1/6 bg-gray-100`}>
                <View className={`bg-[#293462] p-8 flex justify-end h-full rounded-b-3xl`}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <View className={`w-full flex flex-row items-center space-x-2`}>
                            <Icon name={'arrow-back'} size={24} color={'white'} />
                            <Text className={`text-[#DBDFFD] font-bold text-base`}>Topup</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View className={`bg-gray-100 w-full flex flex-col p-4`}>
                <View className={`w-full bg-[#DBDFFD] p-2 space-x-2 flex flex-row rounded-lg`}>
                    <TouchableOpacity onPress={() => navigation.navigate('TopupTransaction')}>
                        <View className={`w-[48px] h-[48px] rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center`}>
                            <Icon name={'add-outline'} size={30} color={'#293462'} />
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Text className={`text-[#8289AF] text-sm`}>Virtual Account Number</Text>
                        <Text className={`text-gray-900 font-bold text-base`}>2389 081393877946</Text>
                    </View>
                </View>
            </View>
            <ScrollView className={`bg-gray-100 w-full flex flex-col flex-1`}>
                <View className={`flex-1 w-full px-4 pb-4 flex flex-col space-y-4`}>
                    <View className={`flex flex-row items-center`}>
                        <Text className={`text-lg font-semibold text-gray-900`}>How to Top-Up</Text>
                    </View>
                    <View className={`w-full flex-1 bg-[#DBDFFD] px-4 py-2 flex flex-row rounded-lg space-x-2`}>
                        <Text className={`text-[#293462] font-bold text-base`}>1.</Text>
                        <Text className={`text-gray-600 font-bold text-base`}>Go to the nearest ATM or you can use E-Banking.</Text>
                    </View>
                    <View className={`w-full bg-[#DBDFFD] px-4 py-2 flex flex-row rounded-lg space-x-2`}>
                        <Text className={`text-[#293462] font-bold text-base`}>2.</Text>
                        <Text className={`text-gray-600 font-bold text-base`}>Type your security number on the ATM or E-Banking.</Text>
                    </View>
                    <View className={`w-full bg-[#DBDFFD] px-4 py-2 flex flex-row rounded-lg space-x-2`}>
                        <Text className={`text-[#293462] font-bold text-base`}>3.</Text>
                        <Text className={`text-gray-600 font-bold text-base`}>Select “Transfer” in the menu</Text>
                    </View>
                    <View className={`w-full bg-[#DBDFFD] px-4 py-2 flex flex-row rounded-lg space-x-2`}>
                        <Text className={`text-[#293462] font-bold text-base`}>4.</Text>
                        <Text className={`text-gray-600 font-bold text-base`}>Type the virtual account number that we provide you at the top.</Text>
                    </View>
                    <View className={`w-full bg-[#DBDFFD] px-4 py-2 flex flex-row rounded-lg space-x-2`}>
                        <Text className={`text-[#293462] font-bold text-base`}>5.</Text>
                        <Text className={`text-gray-600 font-bold text-base`}>Type the amount of the money you want to top up.</Text>
                    </View>
                    <View className={`w-full bg-[#DBDFFD] px-4 py-2 flex flex-row rounded-lg space-x-2`}>
                        <Text className={`text-[#293462] font-bold text-base`}>6.</Text>
                        <Text className={`text-gray-600 font-bold text-base`}>Read the summary details</Text>
                    </View>
                    <View className={`w-full bg-[#DBDFFD] px-4 py-2 flex flex-row rounded-lg space-x-2`}>
                        <Text className={`text-[#293462] font-bold text-base`}>7.</Text>
                        <Text className={`text-gray-600 font-bold text-base`}>Press transfer / top up</Text>
                    </View>
                    <View className={`w-full bg-[#DBDFFD] px-4 py-2 flex flex-row rounded-lg space-x-2`}>
                        <Text className={`text-[#293462] font-bold text-base`}>8.</Text>
                        <Text className={`text-gray-600 font-bold text-base`}>You can see your money in Zwallet within 3 hours.</Text>
                    </View>
                </View>
            </ScrollView>
            <Menu />
        </TailwindProvider>
    )
}