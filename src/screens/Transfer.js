
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import default_profile from '../assets/images/default.jpg'
import Menu from '../components/Menu';
import Input from '../components/Input';

export default function Transfer({ navigation }){
    return (
        <TailwindProvider>
            <View className={`h-1/6 bg-gray-100`}>
                <View className={`bg-[#293462] p-8 flex justify-end h-full rounded-b-3xl`}>
                    <TouchableOpacity onPress={() => navigation.navigate('FindReceiver')}>
                        <View className={`w-full flex flex-row items-center space-x-2`}>
                            <Icon name={'arrow-back'} size={24} color={'white'} />
                            <Text className={`text-[#DBDFFD] font-bold text-base`}>Transfer</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View className={`p-4`}>
                <View className={`w-full bg-[#DBDFFD] p-2 flex flex-row justify-between items-center rounded-lg`}>
                    <View className={`flex flex-row space-x-3`}>
                        <View className={`w-[48px] h-[48px] rounded-lg overflow-hidden`}>
                            <ImageBackground source={default_profile} className={`w-[48px] h-[48px]`} />
                        </View>
                        <View>
                            <Text className={`text-[#293462] font-bold text-base`}>Bima</Text>
                            <Text className={`text-[#8289AF] font-bold text-sm`}>+62 813-8492-9994</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View className={`p-4 bg-gray-100 flex flex-col flex-1 space-y-4`}>
                <Text className={`text-[#293462] font-bold text-base`}>Rp120.000 Available</Text>
                <View className={`w-full`}>
                    <Input 
                        icon={['cash-outline']}
                        placeholder={'Amount'}
                        type={'decimal-pad'}
                    />
                </View>
                <View className={`w-full`}>
                    <Input 
                        icon={['reader-outline']}
                        placeholder={'Notes'}
                        type={'default'}
                    />
                </View>
                <TouchableOpacity className={`w-full`} onPress={() => navigation.navigate('TransferConfirm')}>
                    <View className={`w-full bg-gray-300 h-[48px] rounded flex items-center justify-center`}>
                        <Text className={`text-lg font-semibold text-gray-500`}>Continue</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Menu />
        </TailwindProvider>
    )
}