
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Input from '../components/Input';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { patchUserPin } from '../redux/asyncActions/users';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CreatePin({ navigation }){
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(false);
    const [checkError, setCheckError] = React.useState(null)
    const token = useSelector((state) => state.auth.token)

    // React.useEffect(() => {
    //     AsyncStorage.getItem('token').then((value)=>{
    //       setToken(value)
    //     })
    // }, [token]);

    const pinSchema = Yup.object().shape({
        pin1: Yup.string().required('Required'),
        pin2: Yup.string().required('Required'),
        pin3: Yup.string().required('Required'),
        pin4: Yup.string().required('Required'),
        pin5: Yup.string().required('Required'),
        pin6: Yup.string().required('Required'),
    })
      
    const pinSubmit = (props) => {
        if(props.pin){
            setLoading(true)
            if(!Object.keys(props.errors).length){
                setCheckError()
                dispatch(patchUserPin([token, props.pin]));
                setTimeout(function () {
                    setLoading(false)
                    navigation.navigate('PinSuccess')
                }, 1000);
            }else{
                setCheckError('Pin must be complete')
                setTimeout(function () {
                    setLoading(false)
                }, 1000);
            }
        }else{
            setCheckError('Pin cant empty')
            setTimeout(function () {
                setCheckError(null)
            }, 2000);
        }
    }
    
    return (
        <TailwindProvider>
            <View className={`bg-[#293462] w-full h-full`}>
                <View className={`h-1/4 px-4 flex justify-center items-center`}>
                    <Text className={`text-[#DBDFFD] font-bold text-2xl`}>sakuin</Text>
                </View>
                <Formik
                initialValues={{ pin1: '', pin2: '', pin3: '', pin4: '', pin5: '', pin6: '', }}
                validationSchema={pinSchema}
                >
                {({ handleChange, values, errors }) => (
                    <View className={`flex-1 w-full p-4 rounded-t-3xl flex flex-col items-center justify-center bg-gray-100 space-y-5`}>
                        <Text className={`text-[#293462] font-bold text-2xl`}>Create Security PIN</Text>
                        <Text className={`text-gray-400 text-center text-base`}>Create a PIN that’s contain 6 digits number for security purpose in Sakuin</Text>

                        <View className={`flex flex-row w-full justify-between`}>
                            <View>
                                <Input 
                                icon={['document-text-outline']}
                                type={'numeric'}
                                onChange={handleChange('pin1')}
                                />
                            </View>
                            <View>
                                <Input 
                                icon={['document-text-outline']}
                                type={'numeric'}
                                onChange={handleChange('pin2')}
                                />
                            </View>
                            <View>
                                <Input 
                                icon={['document-text-outline']}
                                type={'numeric'}
                                onChange={handleChange('pin3')}
                                />
                            </View>
                            <View>
                                <Input 
                                icon={['document-text-outline']}
                                type={'numeric'}
                                onChange={handleChange('pin4')}
                                />
                            </View>
                            <View>
                                <Input 
                                icon={['document-text-outline']}
                                type={'numeric'}
                                onChange={handleChange('pin5')}
                                />
                            </View>
                            <View>
                                <Input 
                                icon={['document-text-outline']}
                                type={'numeric'}
                                onChange={handleChange('pin6')}
                                />
                            </View>
                        </View>

                        <View>
                            {<Text className={`text-sm text-red-500`}>{checkError}</Text>}
                        </View>

                        {
                            loading?
                            <View className={`w-full h-[48px] rounded flex items-center justify-center`}>
                                <ActivityIndicator size="large" color="gray" />
                            </View>
                            :
                            <TouchableOpacity className={`w-full`} onPress={() => pinSubmit({pin: `${values.pin1}${values.pin2}${values.pin3}${values.pin4}${values.pin5}${values.pin6}`, errors})}>
                                <View className={`w-full bg-gray-300 h-[48px] rounded flex items-center justify-center`}>
                                    <Text className={`text-lg font-semibold text-gray-500`}>Continue</Text>
                                </View>
                            </TouchableOpacity>
                        }
                    </View>
                )}
                </Formik>
            </View>
        </TailwindProvider>
    )
}