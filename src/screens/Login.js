
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Input from '../components/Input';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/asyncActions/auth";
import { clearAuth } from '../redux/reducers/auth';
import { getUserPin } from '../redux/asyncActions/users';
import AsyncStorage from '@react-native-async-storage/async-storage';
import decode from "jwt-decode";

export default function Login({ navigation }){
  // const id = jwtDecode(token)._W
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const [checkError, setCheckError] = React.useState(null)
  const token = useSelector((state) => state.auth.token)
  const error = useSelector((state) => state.auth.error)
  const message = useSelector((state) => state.auth.message)

  const loginSchema = Yup.object().shape({
    email: Yup.string().required('Required'),
    password: Yup.string().required('Required')
  })
  
  const loginSubmit = (props) => {
    if(props.values.email || props.values.password){
      if(!Object.keys(props.errors).length){
        dispatch(login(props.values));
        setLoading(true)
      }
    }else{
      setCheckError('Data login cant empty')
      setTimeout(function () {
        setCheckError(null)
      }, 2000);
    }
  }

  const jwtDecode = async(token) => {
    try {
      const decodeToken = decode(token);
      return decodeToken.id
    } catch (error) {
      return error
    }
  }

  React.useEffect(() => {
    dispatch(clearAuth())
    if(error){
      setCheckError(error)
      setTimeout(function () {
        setLoading(false)
      }, 1000);
    }

    if (token) {
      // dispatch(getUserPin([token, (pin)=>{
      //   dispatch(clearAuth());
      //   navigation.navigate(pin != 0 && pin !== null? 'Home':'CreateProfile')
      // }]));

      setTimeout(function () {
        setLoading(false)
      }, 1000);
    }
  }, [error, token, message]);

  return (
    <TailwindProvider>
        <View className={`bg-[#293462] w-full h-full`}>
            <View className={`h-1/4 px-4 flex justify-center items-center`}>
                <Text className={`text-[#DBDFFD] font-bold text-2xl`}>sakuin</Text>
            </View>
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={loginSchema}
            >
              {({ handleChange, values, errors }) => (
                <View className={`flex-1 w-full p-4 rounded-t-3xl flex flex-col items-center justify-center bg-gray-100 space-y-2`}>
                  <Text className={`text-[#293462] font-bold text-2xl`}>Login</Text>
                  <Text className={`text-gray-400 text-center text-base`}>Login to your existing account to access all the features in Sakuin</Text>

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
                  
                  <View className={`flex w-full items-end`}>
                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}><Text className={`text-gray-400`}>Forgot password?</Text></TouchableOpacity>
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
                    <TouchableOpacity className={`w-full`} onPress={() => loginSubmit({values, errors})}>
                      <View className={`w-full bg-gray-300 h-[48px] rounded flex items-center justify-center`}>
                        <Text className={`text-lg font-semibold text-gray-500`}>Login</Text>
                      </View>
                    </TouchableOpacity>
                  }

                  <View className={`flex flex-row space-x-1`}>
                    <Text className={`text-gray-400`}>Don’t have an account? Let’s</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}><Text className={`text-[#293462] font-semibold`}>Register</Text></TouchableOpacity>
                  </View>
                </View>
              )}
            </Formik>
        </View>
    </TailwindProvider>
  )
}