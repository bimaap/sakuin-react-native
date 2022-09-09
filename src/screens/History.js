
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView, ActivityIndicator } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import default_profile from '../assets/images/default.jpg'
import midtrans_profile from '../assets/images/midtrans.png'
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from '../redux/asyncActions/transactions';
import { getUserDataById } from '../redux/asyncActions/users';

export default function History({ navigation }){
    const dispatch = useDispatch();
    const [dataUser, setData] = React.useState([])
    const [dataTransactions, setDataTransactions] = React.useState([])
    const token = useSelector((state) => state.auth.token)
    const [pageInfo, setPageInfo] = React.useState({})
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        dispatch(getUserDataById([token, (e)=>setData(e)]))

        dispatch(getTransactions([token, (e)=>{
            setDataTransactions(e.results);
            setPageInfo(e.pageInfo)
        }, 1, 10]))
    }, [token]);

    const scrollData = (e) => {
        let layoutHeight = e.nativeEvent.layoutMeasurement.height;
        let contentHeight = e.nativeEvent.contentSize.height;
        let offsetY = e.nativeEvent.contentOffset.y;

        if(Math.ceil(layoutHeight + offsetY) >= contentHeight){
            setLoading(true)
            dispatch(getTransactions([token, (e) => {
                setTimeout(function () {
                    setLoading(false)
                    setDataTransactions([...dataTransactions, ...e.results])
                    setPageInfo(e.pageInfo)
                }, 1000);
            }, pageInfo.currentPage + 1]))
        }
    }

    return (
        <TailwindProvider>
            <View className={`h-1/6 bg-gray-100`}>
                <View className={`bg-[#293462] p-8 flex justify-end h-full rounded-b-3xl`}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <View className={`w-full flex flex-row items-center space-x-2`}>
                            <Icon name={'arrow-back'} size={24} color={'white'} />
                            <Text className={`text-[#DBDFFD] font-bold text-base`}>History</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View className={`flex flex-raw px-4 pt-4`}>
                <Text className={`text-lg font-semibold text-gray-900`}>This Week</Text>
            </View>
            <ScrollView className={`bg-gray-100 w-full flex flex-col flex-1`} onScroll={(e) => pageInfo.nextPage && scrollData(e)}>
                <View className={`flex-1 w-full p-4 flex flex-colbg-black space-y-4`}>
                    {
                        dataTransactions.map((e, index) => {
                            let full_name = `${dataUser.first_name} ${dataUser.last_name}`
                            return (
                                <View key={index.toString()} >
                                    <TouchableOpacity onPress={() => navigation.navigate('TransactionDetail', {id: e.id})} >
                                        <View key={index} className={`w-full bg-[#DBDFFD] p-2 flex flex-row justify-between items-center rounded-lg`}>
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
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                
                            )
                        }
                    )}
                    <View>
                    {
                        pageInfo.nextPage &&
                        <View>
                            {
                                loading ?
                                <View className={`w-full h-[48px] rounded flex items-center justify-center`}>
                                    <ActivityIndicator size="large" color="gray" />
                                </View>
                                :
                                <View className={`w-full h-[48px] flex items-center justify-center`}>
                                    <Text className={`text-sm font-normal text-gray-400`}>View more Receiver</Text>
                                </View>
                            }
                        </View>
                    }
                    </View>
                </View>
            </ScrollView>
            <View className={`p-4 bg-gray-100 flex flex-row justify-between`}>
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
                <TouchableOpacity className={`max-w-[150px] w-full`}>
                    <View className={`w-full bg-gray-300 h-[48px] rounded flex items-center justify-center`}>
                        <Text className={`text-lg font-semibold text-[#293462]`}>Filter by Date</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </TailwindProvider>
    )
}