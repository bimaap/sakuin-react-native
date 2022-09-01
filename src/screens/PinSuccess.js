
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default function PinSuccess({ navigation }){
    const [loading, setLoading] = React.useState(false);

    const pinSubmit = () => {
        setLoading(true)
        setTimeout(function () {
            setLoading(false)
            navigation.navigate('Home')
        }, 1000);
    }

    return (
        <TailwindProvider>
            <View className={`bg-[#293462] w-full h-full`}>
                <View className={`h-1/4 px-4 flex justify-center items-center`}>
                    <Text className={`text-[#DBDFFD] font-bold text-2xl`}>sakuin</Text>
                </View>
                <View className={`flex-1 w-full p-4 rounded-t-3xl flex flex-col items-center justify-center bg-gray-100 space-y-5`}>
                    <View className={`w-[48px] h-[48px] flex items-center justify-center bg-green-500 rounded-full`}><Icon name={'checkmark-outline'} size={24} color={'white'} /></View>
                    <Text className={`text-[#293462] font-bold text-2xl`}>PIN Successfully Created</Text>
                    <Text className={`text-gray-400 text-center text-base`}>Your PIN was successfully created and you can now access all the features in FazzPay. Login to your new account and start exploring!</Text>
                    {
                        loading?
                        <View className={`w-full h-[48px] rounded flex items-center justify-center`}>
                            <ActivityIndicator size="large" color="gray" />
                        </View>
                        :
                        <TouchableOpacity className={`w-full`} onPress={() => pinSubmit()}>
                            <View className={`w-full bg-gray-300 h-[48px] rounded flex items-center justify-center`}>
                                <Text className={`text-lg font-semibold text-gray-500`}>Login Now</Text>
                            </View>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        </TailwindProvider>
    )
}