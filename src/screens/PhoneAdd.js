
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import default_profile from '../assets/images/default.jpg'
import Menu from '../components/Menu';
import Input from '../components/Input';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { patchUserPhone } from '../redux/asyncActions/users';

export default function PhoneAdd({ navigation }){
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token)
    const [loading, setLoading] = React.useState(false);
    
    const phoneSchema = Yup.object().shape({
        phone_number: Yup.string().required('Required')
    })
    
    const phoneSubmit = (props) => {
        setLoading(true)
        dispatch(patchUserPhone([token, props.values.phone_number]));
        setTimeout(function () {
            setLoading(false)
            navigation.navigate('PersonalInformation')
        }, 1000);
    }

    return (
        <TailwindProvider>
            <View className={`h-1/6 bg-gray-100`}>
                <View className={`bg-[#293462] p-8 flex justify-end h-full rounded-b-3xl`}>
                    <TouchableOpacity onPress={() => navigation.navigate('PersonalInformation')}>
                        <View className={`w-full flex flex-row items-center space-x-2`}>
                            <Icon name={'arrow-back'} size={24} color={'white'} />
                            <Text className={`text-[#DBDFFD] font-bold text-base`}>Add Phone Number</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <Formik
              initialValues={{ phone_number: '' }}
              validationSchema={phoneSchema}
            >
              {({ handleChange, values, errors }) => (
            <View className={`p-4 bg-gray-100 flex flex-col justify-center flex-1 space-y-4`}>
                <Text className={`text-[#8289AF] text-sm text-center`}>Add at least one phone number for the transfer ID so you can start transfering your money to another user.</Text>
                <View>
                    <Input 
                        icon={['call-outline']}
                        placeholder={'Enter your phone number'}
                        type={'decimal-pad'}
                        onChange={handleChange('phone_number')}
                    />
                </View>
                {
                    loading?
                    <View className={`w-full h-[48px] rounded flex items-center justify-center`}>
                        <ActivityIndicator size="large" color="gray" />
                    </View>
                    :
                    <TouchableOpacity className={`w-full`} onPress={() => phoneSubmit({values, errors})}>
                        <View className={`w-full bg-gray-300 h-[48px] rounded flex items-center justify-center px-4`}>
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