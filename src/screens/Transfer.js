
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView, ActivityIndicator } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import default_profile from '../assets/images/default.jpg'
import Menu from '../components/Menu';
import Input from '../components/Input';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { getUserDataById } from '../redux/asyncActions/users';

export default function Transfer({route, navigation }){
    // console.log(route.params);
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(false);
    const [checkError, setCheckError] = React.useState(null)
    const [dataUser, setData] = React.useState({})
    const token = useSelector((state) => state.auth.token)

    React.useEffect(() => {
        if(route.params.id){
            dispatch(getUserDataById([token, (e)=>setData(e), route.params.id]))
        }
    }, [token, route.params]);

    const transferSchema = Yup.object().shape({
        amount: Yup.string().required('Required'),
        notes: Yup.string().required('Required')
    })
      
    const transferSubmit = (props) => {
        if(props.values.amount || props.values.notes){
            if(!Object.keys(props.errors).length){
                // dispatch(login(props.values));
                setLoading(true)
                setTimeout(function () {
                    setLoading(false)
                    // navigation.navigate('TransferConfirm', {amount: props.values.amount, notes: props.values.notes, id: route.params.id, first_name: route.params.first_name, last_name: route.params.last_name, phone_number: route.params.phone_number, image: route.params.image})
                    navigation.navigate('TransferConfirm', {props: props.values, id: route.params.id})
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
                    <TouchableOpacity onPress={() => navigation.navigate('FindReceiver')}>
                        <View className={`w-full flex flex-row items-center space-x-2`}>
                            <Icon name={'arrow-back'} size={24} color={'white'} />
                            <Text className={`text-[#DBDFFD] font-bold text-base`}>Transfer</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View className={`p-4`}>
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
            </View>

            <Formik
              initialValues={{ amount: '', notes: '' }}
              validationSchema={transferSchema}>
                {({ handleChange, values, errors }) => (
                    <View className={`p-4 bg-gray-100 flex flex-col flex-1 space-y-4`}>
                        <Text className={`text-[#293462] font-bold text-base`}>Rp{0} Available</Text>
                        <View className={`w-full`}>
                            <Input 
                                icon={['cash-outline']}
                                placeholder={'Amount'}
                                type={'decimal-pad'}
                                onChange={handleChange('amount')}
                            />
                            {errors.amount && <Text className={`text-sm text-red-500`}>{0}</Text>}
                        </View>
                        <View className={`w-full`}>
                            <Input 
                                icon={['reader-outline']}
                                placeholder={'Notes'}
                                type={'default'}
                                onChange={handleChange('notes')}
                            />
                            {errors.notes && <Text className={`text-sm text-red-500`}>{errors.notes}</Text>}
                        </View>
                        {
                            loading?
                            <View className={`w-full h-[48px] rounded flex items-center justify-center`}>
                                <ActivityIndicator size="large" color="gray" />
                            </View>
                            :
                            <TouchableOpacity className={`w-full`} onPress={() => transferSubmit({values, errors})}>
                                <View className={`w-full bg-gray-300 h-[48px] rounded flex items-center justify-center`}>
                                    <Text className={`text-lg font-semibold text-gray-500`}>Continue</Text>
                                </View>
                            </TouchableOpacity>
                        }
                    </View>
                )}
            </Formik>
        </TailwindProvider>
    )
}