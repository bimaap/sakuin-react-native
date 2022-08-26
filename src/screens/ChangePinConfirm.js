
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import default_profile from '../assets/images/default.jpg'
import Menu from '../components/Menu';
import Input from '../components/Input';

export default function ChangePinConfirm({ navigation }){
    const [phone, setPhone] = React.useState('+62 813-9387-7946')

    return (
        <TailwindProvider>
            <View className={`h-1/6 bg-gray-100`}>
                <View className={`bg-[#293462] p-8 flex justify-end h-full rounded-b-3xl`}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <View className={`w-full flex flex-row items-center space-x-2`}>
                            <Icon name={'arrow-back'} size={24} color={'white'} />
                            <Text className={`text-[#DBDFFD] font-bold text-base`}>Create New PIN</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View className={`p-4 bg-gray-100 flex flex-col justify-center flex-1 space-y-4`}>
                <Text className={`text-[#8289AF] text-sm text-center`}>Enter your new 6 digits Sakuin PIN</Text>
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
                <TouchableOpacity className={`w-full`} onPress={() => navigation.navigate('Profile')}>
                    <View className={`w-full bg-gray-300 h-[48px] rounded flex items-center justify-center px-4`}>
                        <Text className={`text-lg font-semibold text-gray-500`}>Submit</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </TailwindProvider>
    )
}