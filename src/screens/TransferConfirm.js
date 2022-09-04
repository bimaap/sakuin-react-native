
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView, ActivityIndicator } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import default_profile from '../assets/images/default.jpg'
import Menu from '../components/Menu';
import { useDispatch, useSelector } from "react-redux";
import { getUserDataById } from '../redux/asyncActions/users';

export default function TransferConfirm({route, navigation }){
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(false);
    const [checkError, setCheckError] = React.useState(null)
    const [dataUser, setData] = React.useState({})
    const token = useSelector((state) => state.auth.token)
    const date = timeConverter(Date.now())

    React.useEffect(() => {
        if(route.params.id){
            dispatch(getUserDataById([token, (e)=>setData(e), route.params.id]))
        }
    }, [token, route.params]);

    function timeConverter(UNIX_timestamp){
        const dateTime = new Date(UNIX_timestamp).toISOString().slice(0, 19).replace('T', ' ').split(' ')
        const date = dateTime[0].split('-')
        const time = dateTime[1].split(':')
        const month = [null, 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
        return {year: date[0], month: month[Number(date[1].split('')[1])], day: date[2], hour: Number(time[0])+7 >= 24? (Number(time[0])+7)-24:Number(time[0])+7, minute: time[1]}
    }

    return (
        <TailwindProvider>
            <View className={`h-1/6 bg-gray-100`}>
                <View className={`bg-[#293462] p-8 flex justify-end h-full rounded-b-3xl`}>
                    <TouchableOpacity onPress={() => navigation.navigate('Transfer', {id: route.params.id})}>
                        <View className={`w-full flex flex-row items-center space-x-2`}>
                            <Icon name={'arrow-back'} size={24} color={'white'} />
                            <Text className={`text-[#DBDFFD] font-bold text-base`}>Transfer Confirmation</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView className={`bg-gray-100 w-full flex flex-col flex-1`}>
                <View className={`flex-1 w-full p-4 flex flex-colbg-black space-y-4`}>
                    <View className={`flex flex-row justify-between items-center`}>
                        <Text className={`text-lg font-semibold text-gray-900`}>Transfer to</Text>
                    </View>

                    <View className={`w-full bg-[#DBDFFD] p-2 flex flex-row justify-between items-center rounded-lg`}>
                        <View className={`flex flex-row space-x-3`}>
                            <View className={`w-[48px] h-[48px] rounded-lg overflow-hidden`}>
                                <ImageBackground source={dataUser.image? { uri: `https://res.cloudinary.com/sakuin/image/upload/v1661873432/sakuin/${dataUser.image}` } : default_profile} className={`w-[48px] h-[48px]`} />
                            </View>
                            <View>
                                <Text className={`text-[#293462] font-bold text-base`}>{dataUser.first_name} {dataUser.last_name}</Text>
                                <Text className={`text-[#8289AF] font-bold text-sm`}>{dataUser.phone_number}</Text>
                            </View>
                        </View>
                    </View>

                    <View className={`flex flex-row justify-between items-center`}>
                        <Text className={`text-lg font-semibold text-gray-900`}>Detail</Text>
                    </View>

                    <View className={`w-full bg-[#DBDFFD] px-4 py-2 flex flex-col rounded-lg`}>
                        <Text className={`text-[#8289AF] font-bold text-sm`}>Amount</Text>
                        <Text className={`text-[#293462] font-bold text-base`}>Rp{route.params.props.amount}</Text>
                    </View>
                    <View className={`w-full bg-[#DBDFFD] px-4 py-2 flex flex-col rounded-lg`}>
                        <Text className={`text-[#8289AF] font-bold text-sm`}>Balance Left</Text>
                        <Text className={`text-[#293462] font-bold text-base`}>Rp20.000</Text>
                    </View>
                    <View className={`w-full bg-[#DBDFFD] px-4 py-2 flex flex-col rounded-lg`}>
                        <Text className={`text-[#8289AF] font-bold text-sm`}>Date & Time</Text>
                        <Text className={`text-[#293462] font-bold text-base`}>{date.month} {date.day}, {date.year} - {date.hour}.{date.minute}</Text>
                    </View>
                    <View className={`w-full bg-[#DBDFFD] px-4 py-2 flex flex-col rounded-lg`}>
                        <Text className={`text-[#8289AF] font-bold text-sm`}>Notes</Text>
                        <Text className={`text-[#293462] font-bold text-base`}>{route.params.props.notes}</Text>
                    </View>

                    <TouchableOpacity className={`w-full`} onPress={() => navigation.navigate('TransferPin')}>
                        <View className={`w-full bg-gray-300 h-[48px] rounded flex items-center justify-center`}>
                            <Text className={`text-lg font-semibold text-gray-500`}>Continue</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </TailwindProvider>
    )
}