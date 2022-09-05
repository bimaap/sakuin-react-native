
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import default_profile from '../assets/images/default.jpg'
import Menu from '../components/Menu';

export default function TransferFailed({ navigation }){
    return (
        <TailwindProvider>
            <View className={`h-1/6 bg-gray-100`}>
                <View className={`bg-[#293462] p-8 flex justify-end h-full rounded-b-3xl`}>
                    <View className={`w-full flex flex-row items-center justify-center space-x-2`}>
                        <Text className={`text-[#DBDFFD] font-bold text-base`}>Transfer Details</Text>
                    </View>
                </View>
            </View>
            <ScrollView className={`bg-gray-100 w-full flex flex-col flex-1`}>
                <View className={`flex-1 w-full p-4 flex flex-colbg-black space-y-4`}>
                    <View className={`w-full flex items-center justify-center`}>
                        <View className={`w-[48px] h-[48px] flex items-center justify-center bg-red-500 rounded-full`}><Icon name={'close-outline'} size={24} color={'white'} /></View>
                    </View>
                    <View className={`flex flex-col justify-center items-center space-y-4`}>
                        <Text className={`text-lg font-semibold text-gray-900`}>Transfer Failed</Text>
                        <Text className={`text-[#8289AF] text-center text-sm`}>We can’t transfer your money, because you entered the wrong pin.</Text>
                    </View>
                    
                    <View className={`flex flex-row items-center`}>
                        <Text className={`text-lg font-semibold text-gray-900`}>Detail</Text>
                    </View>

                    <View className={`w-full bg-[#DBDFFD] px-4 py-2 flex flex-col rounded-lg`}>
                        <Text className={`text-[#8289AF] font-bold text-sm`}>Amount</Text>
                        <Text className={`text-[#293462] font-bold text-base`}>Rp100.000</Text>
                    </View>
                    <View className={`w-full bg-[#DBDFFD] px-4 py-2 flex flex-col rounded-lg`}>
                        <Text className={`text-[#8289AF] font-bold text-sm`}>Balance Left</Text>
                        <Text className={`text-[#293462] font-bold text-base`}>Rp20.000</Text>
                    </View>
                    <View className={`w-full bg-[#DBDFFD] px-4 py-2 flex flex-col rounded-lg`}>
                        <Text className={`text-[#8289AF] font-bold text-sm`}>Date & Time</Text>
                        <Text className={`text-[#293462] font-bold text-base`}>May 11, 2020 - 12.20</Text>
                    </View>
                    <View className={`w-full bg-[#DBDFFD] px-4 py-2 flex flex-col rounded-lg`}>
                        <Text className={`text-[#8289AF] font-bold text-sm`}>Notes</Text>
                        <Text className={`text-[#293462] font-bold text-base`}>For buying some socks</Text>
                    </View>

                    <View className={`flex flex-row justify-between items-center`}>
                        <Text className={`text-lg font-semibold text-gray-900`}>Transfer to</Text>
                    </View>

                    <View className={`w-full bg-[#DBDFFD] p-2 flex flex-row justify-between items-center rounded-lg`}>
                        <View className={`flex flex-row space-x-3`}>
                            <View className={`w-[48px] h-[48px] rounded-lg overflow-hidden`}>
                                <ImageBackground source={default_profile} className={`w-[48px] h-[48px]`} />
                            </View>
                            <View>
                                <Text className={`text-[#293462] font-bold text-base`}>Bima</Text>
                                <Text className={`text-[#8289AF] font-bold text-sm`}>0928392123</Text>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity className={`w-full`} onPress={() => navigation.navigate('Home')}>
                        <View className={`w-full bg-gray-300 h-[48px] rounded flex items-center justify-center`}>
                            <Text className={`text-lg font-semibold text-gray-500`}>FindReceiver</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </TailwindProvider>
    )
}