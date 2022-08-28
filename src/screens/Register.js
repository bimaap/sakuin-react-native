
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Input from '../components/Input';
import { Formik } from 'formik';
import * as Yup from 'yup';
import qs from 'qs';
import http from "../helpers/http";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/asyncActions/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register({navigation}){
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const [checkError, setCheckError] = React.useState(null)
  const [token, setToken] = React.useState();
  const error = useSelector((state) => state.auth.error)
  const message = useSelector((state) => state.auth.message)

  const registerSchema = Yup.object().shape({
    email: Yup.string().required('Required'),
    password: Yup.string().required('Required').min(8, 'Minimal password 8 characters')
  })

  const registerSubmit = (props) => {
    if(props.values.email || props.values.password){
      if(!Object.keys(props.errors).length){
        dispatch(register(props.values));
        setLoading(true)
      }
    }else{
      setCheckError('Data register cant empty')
      setTimeout(function () {
        setCheckError(null)
      }, 2000);
    }
    // navigation.navigate('RegisterProfile')
  }

  React.useEffect(() => {
    AsyncStorage.getItem('token').then((value)=>{
      setToken(value)
    })
    if(error){
      setCheckError(error)
      setTimeout(function () {
        setLoading(false)
      }, 1000);
    }else{
      setCheckError(message)
      setTimeout(function () {
        setLoading(false)
      }, 1000);
    }
  }, [error, message, token]);

  return (
    <TailwindProvider>
        <View className={`bg-[#293462] w-full h-full`}>
            <View className={`h-1/4 px-4 flex justify-center items-center`}>
                <Text className={`text-[#DBDFFD] font-bold text-2xl`}>sakuin</Text>
            </View>
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={registerSchema}
            >
              {({ handleChange, values, errors }) => (
                <View className={`flex-1 w-full p-4 rounded-t-3xl flex flex-col items-center justify-center bg-gray-100 space-y-5`}>
                  <Text className={`text-[#293462] font-bold text-2xl`}>Register</Text>
                  <Text className={`text-gray-400 text-center text-base`}>Create your account to access Sakuin</Text>

                  <View>
                    <Input 
                      icon={['mail-outline']}
                      placeholder={'Email'}
                      type={'email-address'}
                      onChange={handleChange('email')}
                    />
                    {errors.email && <Text className={`text-sm text-red-500`}>{errors.email}</Text>}
                  </View>

                  <View>
                    <Input 
                      icon={['lock-closed-outline', 'eye-outline', 'eye-off-outline']}
                      placeholder={'password'}
                      secretInput={true}
                      type={'default'}
                      onChange={handleChange('password')}
                    />
                    {errors.password && <Text className={`text-sm text-red-500`}>{errors.password}</Text>}
                  </View>

                  <View>
                    {checkError && <Text className={`text-sm text-red-500`}>{checkError}</Text>}
                  </View>

                  {
                    loading?
                      <View className={`w-full h-[48px] rounded flex items-center justify-center`}>
                        <ActivityIndicator size="large" color="gray" />
                      </View>
                    :
                    <TouchableOpacity className={`w-full`} onPress={() => registerSubmit({values, errors})}>
                      <View className={`w-full bg-gray-300 h-[48px] rounded flex items-center justify-center`}>
                        <Text className={`text-lg font-semibold text-gray-500`}>Register</Text>
                      </View>
                    </TouchableOpacity>
                  }

                  <View className={`flex flex-row space-x-1`}>
                    <Text className={`text-gray-400`}>Already have an account? Let’s</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text className={`text-[#293462] font-semibold`}>Login</Text></TouchableOpacity>
                  </View>
                </View>
              )}
            </Formik>
        </View>
    </TailwindProvider>
  )
}