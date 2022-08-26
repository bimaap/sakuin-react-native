
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import default_profile from '../assets/images/default.jpg'
import Menu from '../components/Menu';
import Input from '../components/Input';

export default function PhoneManage({ navigation }){
    const [phone, setPhone] = React.useState('+62 813-9387-7946')

    return (
        <TailwindProvider>
            <View className={`h-1/6 bg-gray-100`}>
                <View className={`bg-[#293462] p-8 flex justify-end h-full rounded-b-3xl`}>
                    <TouchableOpacity onPress={() => navigation.navigate('PersonalInformation')}>
                        <View className={`w-full flex flex-row items-center space-x-2`}>
                            <Icon name={'arrow-back'} size={24} color={'white'} />
                            <Text className={`text-[#DBDFFD] font-bold text-base`}>Manage Phone Number</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View className={`p-4 bg-gray-100 flex flex-col flex-1 space-y-4`}>
                <Text className={`text-[#8289AF] text-sm text-center`}>You can only delete the phone number and then you must add another phone number.</Text>
                <View className={`w-full bg-[#DBDFFD] px-4 py-2 flex flex-row items-center justify-between rounded-lg`}>
                    <View>
                        <Text className={`text-[#8289AF] text-sm`}>Primary</Text>
                        <Text className={`text-[#293462] font-bold text-base`}>{phone}</Text>
                    </View>
                    <TouchableOpacity onPress={() => setPhone('-')}>
                        <Icon name={'trash-outline'} size={24} color={'#293462'} />
                    </TouchableOpacity>
                </View>
            </View>
        </TailwindProvider>
    )
}