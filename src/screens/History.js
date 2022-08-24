
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import default_profile from '../assets/images/default.jpg'
import Menu from '../components/Menu';

export default function History({ navigation }){
    const data = [
        {name: 'Bima', process: 'Transfer', amount: 340000},
        {name: 'Dimas', process: 'Topup', amount: 50000},
        {name: 'Bambang', process: 'Accept', amount: 605000},
        {name: 'Roni', process: 'Transfer', amount: 98000},
        {name: 'Saiman', process: 'Accept', amount: 30000},
        {name: 'Kobo', process: 'Pending', amount: 150000},
    ]

    return (
        <TailwindProvider>
            <View className={`h-1/6 bg-gray-100`}>
                <View className={`bg-[#293462] p-8 flex justify-end h-full rounded-b-3xl`}>
                    <View className={`w-full flex flex-row items-center space-x-2`}>
                        <Icon name={'arrow-back'} size={24} color={'white'} />
                        <Text className={`text-[#DBDFFD] font-bold text-base`}>History</Text>
                    </View>
                </View>
            </View>
            <ScrollView className={`bg-gray-100 w-full flex flex-col flex-1`}>
                <View className={`flex-1 w-full p-4 flex flex-colbg-black space-y-4`}>
                    <Text className={`text-lg font-semibold text-gray-900`}>This Week</Text>

                    {
                        data.map((e, index) => {
                            return (
                                <View key={index} className={`w-full bg-[#DBDFFD] p-2 flex flex-row justify-between items-center rounded-lg`}>
                                    <View className={`flex flex-row space-x-3`}>
                                        <View className={`w-[48px] h-[48px] rounded-lg overflow-hidden`}>
                                            <ImageBackground source={default_profile} className={`w-[48px] h-[48px]`} />
                                        </View>
                                        <View>
                                            <Text className={`text-[#293462] font-bold text-base`}>{e.name}</Text>
                                            <Text className={`text-[#8289AF] font-bold text-sm`}>{e.process}</Text>
                                        </View>
                                    </View>
                                    <Text className={`text-green-500 font-bold text-sm`}>+Rp{e.amount}</Text>
                                </View>
                            )
                        }
                    )}
                </View>
            </ScrollView>
            <View className={`p-4 bg-gray-100 flex flex-row justify-between`}>
                <View className={`flex flex-row space-x-5`}>
                    <TouchableOpacity className={`w-[48px]`}>
                        <View className={`w-full bg-gray-300 h-[48px] rounded flex items-center justify-center`}>
                            <Icon name={'arrow-up'} size={24} color={'#293462'} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className={`w-[48px]`}>
                        <View className={`w-full bg-gray-300 h-[48px] rounded flex items-center justify-center`}>
                            <Icon name={'arrow-down'} size={24} color={'#293462'} />
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity className={`max-w-[150px] w-full`}>
                    <View className={`w-full bg-gray-300 h-[48px] rounded flex items-center justify-center`}>
                        <Text className={`text-lg font-semibold text-[#293462]`}>Filter by Date</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Menu />
        </TailwindProvider>
    )
}