
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import default_profile from '../assets/images/default.jpg'
import Menu from '../components/Menu';
import Input from '../components/Input';

export default function TransferPin({ navigation }){
    const status = true;

    return (
        <TailwindProvider>
            <View className={`h-1/6 bg-gray-100`}>
                <View className={`bg-[#293462] p-8 flex justify-end h-full rounded-b-3xl`}>
                    <TouchableOpacity onPress={() => navigation.navigate('TransferConfirm')}>
                        <View className={`w-full flex flex-row items-center space-x-2`}>
                            <Icon name={'arrow-back'} size={24} color={'white'} />
                            <Text className={`text-[#DBDFFD] font-bold text-base`}>Enter Your PIN</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View className={`p-4 bg-gray-100 flex flex-col items-center justify-center flex-1 space-y-4`}>
                <Text className={`text-[#293462] font-bold text-2xl`}>Enter PIN to Transfer</Text>
                <Text className={`text-gray-400 text-center text-base`}>Enter your 6 digits PIN for confirmation to continue transferring money. </Text>

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

                <TouchableOpacity className={`w-full`} onPress={() => navigation.navigate(status? 'TransferSuccess':'TransferFailed')}>
                    <View className={`w-full bg-gray-300 h-[48px] rounded flex items-center justify-center`}>
                        <Text className={`text-lg font-semibold text-gray-500`}>Transfer Now</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Menu />
        </TailwindProvider>
    )
}