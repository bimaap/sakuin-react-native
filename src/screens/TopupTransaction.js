
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import default_profile from '../assets/images/default.jpg'
import Input from '../components/Input';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { postTransfer } from '../redux/asyncActions/transactions';
import { useDispatch, useSelector } from "react-redux";

export default function TopupTransaction({ route, navigation }){
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(false);
    const [checkError, setCheckError] = React.useState(null)
    const token = useSelector(state => state.auth.token);

    const topupSchema = Yup.object().shape({
        amount: Yup.string().required('Required')
    })
      
    const topupSubmit = (props) => {
        if(props.values.amount){
            if(!Object.keys(props.errors).length){
                dispatch(postTransfer([token, props.values.amount]));
                setLoading(true)
                setTimeout(function () {
                    setLoading(false)
                    navigation.navigate('TopupSuccess')
                }, 1000);
            }
        }else{
          setCheckError('Data transfer cant empty')
          setTimeout(function () {
            setCheckError(null)
          }, 2000);
        }
    }

    return (
        <TailwindProvider>
            <View className={`h-1/6 bg-gray-100`}>
                <View className={`bg-[#293462] p-8 flex justify-end h-full rounded-b-3xl`}>
                    <TouchableOpacity onPress={() => navigation.navigate('Topup')}>
                        <View className={`w-full flex flex-row items-center space-x-2`}>
                            <Icon name={'arrow-back'} size={24} color={'white'} />
                            <Text className={`text-[#DBDFFD] font-bold text-base`}>Topup Transaction</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View className={`p-4`}>
                <View className={`w-full bg-[#DBDFFD] p-2 flex flex-row justify-between items-center rounded-lg`}>
                    <View className={`flex flex-row space-x-3`}>
                        <View className={`w-[48px] h-[48px] rounded-lg overflow-hidden`}>
                            <ImageBackground source={default_profile} className={`w-[48px] h-[48px]`} />
                        </View>
                        <View>
                            <Text className={`text-[#293462] font-bold text-base`}>{route.params.data.first_name} {route.params.data.last_name}</Text>
                            <Text className={`text-[#8289AF] font-bold text-sm`}>{route.params.data.phone_number}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <Formik
                initialValues={{ amount: '' }}
                validationSchema={topupSchema}>
                {({ handleChange, values, errors }) => (
                <View className={`p-4 bg-gray-100 flex flex-col flex-1 space-y-4`}>
                    <Text className={`text-[#8289AF] text-sm`}>Enter the amount of money, and click submit</Text>
                    <View className={`w-full`}>
                        <Input 
                            icon={['cash-outline']}
                            placeholder={'Amount'}
                            type={'decimal-pad'}
                            onChange={handleChange('amount')}
                        />
                        {errors.amount && <Text className={`text-sm text-red-500`}>{errors.amount}</Text>}
                    </View>
                    {
                        loading?
                        <View className={`w-full h-[48px] rounded flex items-center justify-center`}>
                            <ActivityIndicator size="large" color="gray" />
                        </View>
                        :
                        <TouchableOpacity className={`w-full`} onPress={() => topupSubmit({values, errors})}>
                            <View className={`w-full bg-gray-300 h-[48px] rounded flex items-center justify-center`}>
                                <Text className={`text-lg font-semibold text-gray-500`}>Submit</Text>
                            </View>
                        </TouchableOpacity>
                    }
                </View>
            )}
            </Formik>
        </TailwindProvider>
    )
}