
import { View, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import default_profile from '../assets/images/default.jpg'
import Menu from '../components/Menu';
import Input from '../components/Input';

export default function FindReceiver({ navigation }){
    const data = [
        {name: 'Bima', process: 'Transfer', amount: 340000},
        {name: 'Dimas', process: 'Topup', amount: 50000},
        {name: 'Bambang', process: 'Accept', amount: 605000},
        {name: 'Roni', process: 'Transfer', amount: 98000},
        {name: 'Kobo', process: 'Pending', amount: 150000},
    ]

    return (
        <TailwindProvider>
            <View className={`h-1/6 bg-gray-100`}>
                <View className={`bg-[#293462] p-8 flex justify-end h-full rounded-b-3xl`}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <View className={`w-full flex flex-row items-center space-x-2`}>
                            <Icon name={'arrow-back'} size={24} color={'white'} />
                            <Text className={`text-[#DBDFFD] font-bold text-base`}>Find Receiver</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View className={`p-4 bg-gray-100 shadow-black shadow-sm`}>
                <Input 
                icon={['search-outline']}
                placeholder={'Search receiver here'}
                type={'default'}
                />
            </View>
            <ScrollView className={`bg-gray-100 w-full flex flex-col flex-1 px-4`}>
                <View className={`flex-1 w-full flex flex-colbg-black space-y-4`}>
                    <View className={`flex flex-raw`}>
                        <Text className={`text-lg font-semibold text-gray-900`}>Contacts</Text>
                        <Text className={`text-sm font-normal text-gray-400`}>17 Contact Founds</Text>
                    </View>
                    {
                        data.map((e, index) => {
                            return (
                                <View key={index.toString()} >
                                    <TouchableOpacity onPress={() => navigation.navigate('Transfer')} >
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
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                    )}
                </View>
            </ScrollView>
            <View className={`p-4 bg-gray-100 flex flex-row`}>
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
            </View>
            <Menu />
        </TailwindProvider>
    )
}