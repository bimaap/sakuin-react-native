
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from "react-redux";
import { getUserDataById } from '../redux/asyncActions/users';
import { useFocusEffect } from '@react-navigation/native';

export default function PersonalInformation({ route, navigation }){
    const dispatch = useDispatch();
    const [dataUser, setData] = React.useState(route.params? route.params:{})
    const token = useSelector((state) => state.auth.token)

    useFocusEffect(
        React.useCallback(() => {
            dispatch(getUserDataById([token, (e)=>setData(e)]))
        }, []),
    );

    React.useEffect(() => {
        if(token){
            dispatch(getUserDataById([token, (e)=>setData(e)]))
        }
    }, [token]);

    return (
        <TailwindProvider>
            <View className={`h-1/6 bg-gray-100`}>
                <View className={`bg-[#293462] p-8 flex justify-end h-full rounded-b-3xl`}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <View className={`w-full flex flex-row items-center space-x-2`}>
                            <Icon name={'arrow-back'} size={24} color={'white'} />
                            <Text className={`text-[#DBDFFD] font-bold text-base`}>Personal Information</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View className={`p-4 bg-gray-100 flex flex-col flex-1 space-y-4`}>
                <Text className={`text-[#8289AF] text-sm text-center`}>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</Text>
                <View className={`w-full bg-[#DBDFFD] px-4 py-2 flex flex-col rounded-lg`}>
                    <Text className={`text-[#8289AF] text-sm`}>First Name</Text>
                    <Text className={`text-[#293462] font-bold text-base`}>{dataUser.first_name}</Text>
                </View>
                <View className={`w-full bg-[#DBDFFD] px-4 py-2 flex flex-col rounded-lg`}>
                    <Text className={`text-[#8289AF] text-sm`}>Last Name</Text>
                    <Text className={`text-[#293462] font-bold text-base`}>{dataUser.last_name}</Text>
                </View>
                <View className={`w-full bg-[#DBDFFD] px-4 py-2 flex flex-col rounded-lg`}>
                    <Text className={`text-[#8289AF] text-sm`}>Verified E-mail</Text>
                    <Text className={`text-[#293462] font-bold text-base`}>{dataUser.email}</Text>
                </View>
                <View className={`w-full bg-[#DBDFFD] px-4 py-2 flex flex-row items-center justify-between rounded-lg`}>
                    <View>
                        <Text className={`text-[#8289AF] text-sm`}>Phone Number</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('PhoneAdd')}>
                            <Text className={`text-[#293462] font-bold text-base`}>{dataUser.phone_number == 0 ? '-':dataUser.phone_number}</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('PhoneManage')}>
                        <Text className={`text-[#293462] text-sm`}>Manage</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TailwindProvider>
    )
}