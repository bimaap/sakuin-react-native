
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView, ActivityIndicator } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import default_profile from '../assets/images/default.jpg'
import midtrans_profile from '../assets/images/midtrans.png'
import { useDispatch, useSelector } from "react-redux";
import { getTransactionById } from '../redux/asyncActions/transactions';
import { getUserDataById } from '../redux/asyncActions/users';
import { useFocusEffect } from '@react-navigation/native';

export default function TransactionDetail({ route, navigation }){
    const dispatch = useDispatch();
    const [data, setData] = React.useState({})
    const [dataTransactions, setDataTransactions] = React.useState([])
    const token = useSelector((state) => state.auth.token)
    const [pageInfo, setPageInfo] = React.useState({})
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        dispatch(getTransactionById([token, route.params.id,  (e)=>{setData(e.results)}]))

        // dispatch(getTransactions([token, (e)=>{
        //     setDataTransactions(e.results);
        //     setPageInfo(e.pageInfo)
        // }, 1, 10]))
    }, [dispatch]);

    // useFocusEffect(
    //     React.useCallback(() => {
    //         dispatch(getUserDataById([token, (e)=>{setData(e); console.log('1111',e);}]))
    //     }, []),
    // );

    return (
        <TailwindProvider>
            <View className={`h-1/6 bg-gray-100`}>
                <View className={`bg-[#293462] p-8 flex justify-end h-full rounded-b-3xl`}>
                    <TouchableOpacity onPress={() => navigation.navigate('History')}>
                        <View className={`w-full flex flex-row items-center space-x-2`}>
                            <Icon name={'arrow-back'} size={24} color={'white'} />
                            <Text className={`text-[#DBDFFD] font-bold text-base`}>Transfer Details</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView className={`bg-gray-100 w-full flex flex-col flex-1`}>
                <View className={`flex-1 w-full p-4 flex flex-colbg-black space-y-4`}>
                    <View className={`flex flex-row items-center`}>
                        <Text className={`text-lg font-semibold text-gray-900`}>Detail</Text>
                    </View>

                    <View className={`w-full bg-[#DBDFFD] px-4 py-2 flex flex-col rounded-lg`}>
                        <Text className={`text-[#8289AF] font-bold text-sm`}>Amount</Text>
                        <Text className={`text-[#293462] font-bold text-base`}>Rp{data.amount? data.amount:0}</Text>
                    </View>
                    <View className={`w-full bg-[#DBDFFD] px-4 py-2 flex flex-col rounded-lg`}>
                        <Text className={`text-[#8289AF] font-bold text-sm`}>Date & Time</Text>
                        <Text className={`text-[#293462] font-bold text-base`}>{data.date}</Text>
                    </View>
                    <View className={`w-full bg-[#DBDFFD] px-4 py-2 flex flex-col rounded-lg`}>
                        <Text className={`text-[#8289AF] font-bold text-sm`}>Notes</Text>
                        <Text className={`text-[#293462] font-bold text-base`}>{data.notes}</Text>
                    </View>

                    <View className={`flex flex-row justify-between items-center`}>
                        <Text className={`text-lg font-semibold text-gray-900`}>Transaction</Text>
                    </View>

                    <View className={`w-full bg-[#DBDFFD] p-2 flex flex-row justify-between items-center rounded-lg`}>
                        <View className={`flex flex-row space-x-3`}>
                            <View className={`w-[48px] h-[48px] rounded-lg overflow-hidden`}>
                                <ImageBackground source={data.receiver_image? { uri: `https://res.cloudinary.com/sakuin/image/upload/v1661873432/sakuin/${data.receiver_image}` } : default_profile} className={`w-[48px] h-[48px]`} />
                            </View>
                            <View>
                                <Text className={`text-[#293462] font-bold text-base`}>{data.receiver_id == 'mitra_topup'? 'Midtrans':'User'}</Text>
                                <Text className={`text-[#8289AF] font-bold text-sm`}>{data.receiver_id == 'mitra_topup'? '7582637':'0'}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </TailwindProvider>
    )
}