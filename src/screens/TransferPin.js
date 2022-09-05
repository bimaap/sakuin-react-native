
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Input from '../components/Input';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { getUserDataById } from '../redux/asyncActions/users';
import { postTransfer } from '../redux/asyncActions/transactions';

export default function TransferPin({ route, navigation }){
    const status = true;
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(false);
    const [checkError, setCheckError] = React.useState(null)
    const token = useSelector((state) => state.auth.token)

    const pinSchema = Yup.object().shape({
        pin1: Yup.string().required('Required'),
        pin2: Yup.string().required('Required'),
        pin3: Yup.string().required('Required'),
        pin4: Yup.string().required('Required'),
        pin5: Yup.string().required('Required'),
        pin6: Yup.string().required('Required'),
    })
      
    // console.log(route.params);
    const pinSubmit = (props) => {
        if(props.pin){
            setLoading(true)
            if(!Object.keys(props.errors).length){
                setCheckError()
                setTimeout(function () {
                    // setLoading(false)
                    dispatch(getUserDataById([token, (e)=>{
                        if(props.pin == e.pin){
                            dispatch(postTransfer([token, route.params.recivier_id, route.params.props]))
                            setTimeout(function () {
                                setLoading(false)
                                navigation.navigate('TransferSuccess', {recivier_id: route.params.recivier_id, props: route.params.props})
                            }, 1000);
                        }else{
                            navigation.navigate('TransferFailed')
                        }
                    }]))
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
            <View className={`h-1/6 bg-gray-100`}>
                <View className={`bg-[#293462] p-8 flex justify-end h-full rounded-b-3xl`}>
                    <TouchableOpacity onPress={() => navigation.navigate('TransferConfirm')}>
                        <View className={`w-full flex flex-row items-center space-x-2`}>
                            <Icon name={'arrow-back'} size={24} color={'white'} />
                            <Text className={`text-[#DBDFFD] font-bold text-base`}>Enter Your PIN</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <Formik
                initialValues={{ pin1: '', pin2: '', pin3: '', pin4: '', pin5: '', pin6: '', }}
                validationSchema={pinSchema}
                >
                {({ handleChange, values, errors }) => (
                    <View className={`flex-1 w-full p-4 rounded-t-3xl flex flex-col items-center justify-center bg-gray-100 space-y-5`}>
                        <Text className={`text-[#293462] font-bold text-2xl`}>Enter PIN to Transfer</Text>
                        <Text className={`text-gray-400 text-center text-base`}>Enter your 6 digits PIN for confirmation to continue transferring money.</Text>

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
                                    <Text className={`text-lg font-semibold text-gray-500`}>Transfer Now</Text>
                                </View>
                            </TouchableOpacity>
                        }
                    </View>
                )}
            </Formik>

            {/* <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={loginSchema}>
              {({ handleChange, values, errors }) => (
                <View className={`p-4 bg-gray-100 flex flex-col items-center justify-center flex-1 space-y-4`}>
                    <Text className={`text-[#293462] font-bold text-2xl`}>Enter PIN to Transfer</Text>
                    <Text className={`text-gray-400 text-center text-base`}>Enter your 6 digits PIN for confirmation to continue transferring money. </Text>

                    <View className={`flex flex-row w-full justify-between`}>
                        <View>
                            <Input 
                            icon={['document-text-outline']}
                            type={'numeric'}
                            />
                        </View>
                        <View>
                            <Input 
                            icon={['document-text-outline']}
                            type={'numeric'}
                            />
                        </View>
                        <View>
                            <Input 
                            icon={['document-text-outline']}
                            type={'numeric'}
                            />
                        </View>
                        <View>
                            <Input 
                            icon={['document-text-outline']}
                            type={'numeric'}
                            />
                        </View>
                        <View>
                            <Input 
                            icon={['document-text-outline']}
                            type={'numeric'}
                            />
                        </View>
                        <View>
                            <Input 
                            icon={['document-text-outline']}
                            type={'numeric'}
                            />
                        </View>
                    </View>

                    <TouchableOpacity className={`w-full`} onPress={() => navigation.navigate(status? 'TransferSuccess':'TransferFailed')}>
                        <View className={`w-full bg-gray-300 h-[48px] rounded flex items-center justify-center`}>
                            <Text className={`text-lg font-semibold text-gray-500`}>Transfer Now</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
            </Formik> */}
        </TailwindProvider>
    )
}