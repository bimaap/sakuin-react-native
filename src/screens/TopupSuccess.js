
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from "react-redux";
import { getUserDataById } from '../redux/asyncActions/users';

export default function TopupSuccess({ navigation }){
    const token = useSelector((state) => state.auth.token)
    const [loading, setLoading] = React.useState(false);
    const dispatch = useDispatch();
    const topupSubmit = () => {
        setLoading(true)
        dispatch(getUserDataById([token, (e)=>{
            setTimeout(function () {
                setLoading(false)
                navigation.navigate('Home', e)
            }, 1500);
        }]))
    }

    return (
        <TailwindProvider>
            <View className={`bg-[#293462] w-full h-full`}>
                <View className={`h-1/4 px-4 flex justify-center items-center`}>
                    <Text className={`text-[#DBDFFD] font-bold text-2xl`}>sakuin</Text>
                </View>
                <View className={`flex-1 w-full p-4 rounded-t-3xl flex flex-col items-center justify-center bg-gray-100 space-y-5`}>
                    <View className={`w-[48px] h-[48px] flex items-center justify-center bg-green-500 rounded-full`}><Icon name={'checkmark-outline'} size={24} color={'white'} /></View>
                    <Text className={`text-[#293462] font-bold text-2xl`}>Topup Successfully</Text>
                    <Text className={`text-gray-400 text-center text-base`}>Topup Successfully. Please check your Balance in your Wallet!</Text>
                    {
                        loading?
                        <View className={`w-full h-[48px] rounded flex items-center justify-center`}>
                            <ActivityIndicator size="large" color="gray" />
                        </View>
                        :
                        <TouchableOpacity className={`w-full`} onPress={() => topupSubmit()}>
                            <View className={`w-full bg-gray-300 h-[48px] rounded flex items-center justify-center`}>
                                <Text className={`text-lg font-semibold text-gray-500`}>Back Home</Text>
                            </View>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        </TailwindProvider>
    )
}