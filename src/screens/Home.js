
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import default_profile from '../assets/images/default.jpg'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from "react-redux";
import { getUserDataById } from '../redux/asyncActions/users';
import { getTransactions } from '../redux/asyncActions/transactions';
import midtrans_profile from '../assets/images/midtrans.png'

import { getUserPin } from '../redux/asyncActions/users';

export default function Home({ route, navigation }){
    // const [token, setToken] = React.useState();
    const dispatch = useDispatch();
    const [dataUser, setData] = React.useState(route.params? route.params:{})
    const [dataTransactions, setDataTransactions] = React.useState([])
    const token = useSelector((state) => state.auth.token)
    const imageUrl = { uri: `https://res.cloudinary.com/sakuin/image/upload/v1661873432/sakuin/${dataUser?.image}` };

    React.useEffect(() => {
        dispatch(getUserPin([token, (pin)=>{
            pin != 0 && pin !== null ? null:navigation.navigate('CreateProfile')
        }]));

        dispatch(getTransactions([token, (e)=>{
            setDataTransactions(e.results);
        }]))

        if(token){
            dispatch(getUserDataById([token, (e)=>setData(e)]))
        }
        route.params && setData(route.params)
    }, [token, route.params]);

    // console.log(dataTransactions.length == 0? 0:1);

    return (
        <TailwindProvider>
            <View className={`h-1/6 bg-gray-100`}>
                <View className={`bg-[#293462] px-8 flex justify-center items-center h-full rounded-b-3xl`}>
                    <View className={`w-full flex flex-row justify-between items-center`}>
                        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                            <View className={`flex flex-row space-x-3`}>
                                <View className={`w-[48px] h-[48px] rounded-lg overflow-hidden`}>
                                    <ImageBackground source={dataUser?.image? imageUrl:default_profile} className={`w-[48px] h-[48px]`} />
                                </View>
                                <View>
                                    <Text className={`text-[#DBDFFD] font-bold text-base`}>{dataUser?.first_name} {dataUser?.last_name}</Text>
                                    <Text className={`text-[#8289AF] font-bold text-sm`}>Rp.{dataUser?.balance}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                            <Icon name={'notifications-outline'} size={24} color={'white'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView className={`bg-gray-100 w-full flex flex-col flex-1`}>
                <View className={`flex-1 w-full p-4 flex flex-col space-y-4`}>
                    <View className={`flex flex-row space-x-4`}>
                        <TouchableOpacity className={`flex flex-1`} onPress={() => navigation.navigate('FindReceiver')}>
                            <View className={`w-full bg-[#DBDFFD] h-[48px] rounded flex items-center justify-center flex-row space-x-2`}>
                                <Icon name={'add-outline'} size={24} color={'#293462'} />
                                <Text className={`text-lg font-semibold text-[#293462]`}>Transfer</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className={`flex flex-1`} onPress={() => navigation.navigate('Topup', {dataUser})}>
                            <View className={`w-full bg-[#DBDFFD] h-[48px] rounded flex items-center justify-center flex-row space-x-2`}>
                                <Icon name={'arrow-up-outline'} size={24} color={'#293462'} />
                                <Text className={`text-lg font-semibold text-[#293462]`}>Top Up</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View className={`flex flex-row justify-between items-center`}>
                        <Text className={`text-lg font-semibold text-gray-900`}>Transfer</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('History')}>
                            <Text className={`text-sm font-semibold text-[#8289AF]`}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    
                    {
                        dataTransactions?.length == 0? 
                        <View className={`w-full h-[48px] flex items-center justify-center`}>
                            <Text className={`text-sm font-normal text-gray-400`}>No history transactions</Text>
                        </View>:<></>
                    }

                    {
                        dataTransactions.map((e, index) => {
                            let full_name = `${dataUser.first_name} ${dataUser.last_name}`
                            return (
                                <View key={index} className={`w-full bg-[#DBDFFD] p-2 flex flex-row justify-between items-center rounded-lg`}>
                                    <View className={`flex flex-row space-x-3`}>
                                        <View className={`w-[48px] h-[48px] rounded-lg overflow-hidden`}>
                                            <ImageBackground source={e.receiver_id == 'mitra_topup'? midtrans_profile: e.receiver_image? { uri: `https://res.cloudinary.com/sakuin/image/upload/v1661873432/sakuin/${full_name == e.receiver_name? e.sender_image:e.receiver_image}` } : default_profile} className={`w-[48px] h-[48px]`} />
                                        </View>
                                        <View>
                                            <Text className={`text-[#293462] font-bold text-base`}>{e.receiver_id == 'mitra_topup'? 'Midtrans':full_name == e.receiver_name? e.sender_name:e.receiver_name}</Text>
                                            <Text className={`text-[#8289AF] font-bold text-sm`}>{full_name == e.receiver_name? 'Earn':e.type} ({e.status})</Text>
                                        </View>
                                    </View>
                                    <Text className={`${full_name == e.receiver_name? 'text-green-500':e.type == 'Topup'? 'text-blue-500':'text-red-500'} font-bold text-sm`}>{full_name == e.receiver_name? '+':e.type == 'Topup'? '+':'-'}Rp{e.amount}</Text>
                                </View>
                            )
                        }
                    )}
                </View>
            </ScrollView>
        </TailwindProvider>
    )
}