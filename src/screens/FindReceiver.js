
import { View, Text, TouchableOpacity, ImageBackground, ScrollView, ActivityIndicator } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import default_profile from '../assets/images/default.jpg'
import { useDispatch, useSelector } from "react-redux";
import { getUsersData } from '../redux/asyncActions/users';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Input from '../components/Input';

export default function FindReceiver({ navigation }){
    const dispatch = useDispatch();
    const [token, setToken] = React.useState();
    const [data, setData] = React.useState([])
    const [pageInfo, setPageInfo] = React.useState({})
    const [loading, setLoading] = React.useState(false);

    React.useEffect(()=>{
        AsyncStorage.getItem('token').then((value)=>{
            setToken(value)
        })

        if(token){
            dispatch(getUsersData([token, (e) => {
                setData(e.results)
                setPageInfo(e.pageInfo)
            }]))
        }
    }, [token])

    const scrollData = (e) => {
        let layoutHeight = e.nativeEvent.layoutMeasurement.height;
        let contentHeight = e.nativeEvent.contentSize.height;
        let offsetY = e.nativeEvent.contentOffset.y;

        if(Math.ceil(layoutHeight + offsetY) >= contentHeight){
            setLoading(true)
            dispatch(getUsersData([token, (e) => {
                setTimeout(function () {
                    setLoading(false)
                    setData([...data, ...e.results])
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
                            <Text className={`text-[#DBDFFD] font-bold text-base`}>Find Receiver</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View className={`px-4 pb-2 pt-4 bg-gray-100 shadow-black shadow-sm`}>
                <Input 
                icon={['search-outline']}
                placeholder={'Search receiver here'}
                type={'default'}
                />
            </View>
            <View className={`flex flex-raw px-4 pb-2`}>
                <Text className={`text-lg font-semibold text-gray-900`}>Contacts</Text>
                <Text className={`text-sm font-normal text-gray-400`}>{pageInfo.totalData} Contact Founds</Text>
            </View>
            <ScrollView className={`bg-gray-100 w-full flex flex-col flex-1 px-4`} onScroll={(e) => pageInfo.nextPage && scrollData(e)}>
                <View className={`flex-1 w-full flex flex-colbg-black space-y-4`}>
                    {
                        data?.map((e, index) => {
                            return (
                                <View key={index.toString()} >
                                    <TouchableOpacity onPress={() => navigation.navigate('Transfer')} >
                                        <View key={index} className={`w-full bg-[#DBDFFD] p-2 flex flex-row justify-between items-center rounded-lg`}>
                                            <View className={`flex flex-row space-x-3`}>
                                                <View className={`w-[48px] h-[48px] rounded-lg overflow-hidden`}>
                                                    <ImageBackground source={default_profile} className={`w-[48px] h-[48px]`} />
                                                </View>
                                                <View>
                                                    <Text className={`text-[#293462] font-bold text-base`}>{e.first_name} {e.last_name}</Text>
                                                    <Text className={`text-[#8289AF] font-bold text-sm`}>{e.phone_number}</Text>
                                                </View>
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
            <View className={`p-4 bg-gray-100 flex flex-row`}>
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
            </View>
        </TailwindProvider>
    )
}