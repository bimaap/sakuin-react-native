
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Input from '../components/Input';
import Icon from 'react-native-vector-icons/Ionicons';
import { launchImageLibrary } from 'react-native-image-picker';
import { useDispatch, useSelector } from "react-redux";
import { patchUserImage, patchUserFullname } from '../redux/asyncActions/users';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function CreateProfile({navigation}){
  const [image, setImage] = React.useState(null);
  const [token, setToken] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [checkError, setCheckError] = React.useState(null)
  const dispatch = useDispatch();
  const message = useSelector((state) => state.users.message)

  React.useEffect(() => {
    AsyncStorage.getItem('token').then((value)=>{
      setToken(value)
    })
    message && setCheckError(message)
  }, [token, message]);

  const openGalery = async () => {
    setCheckError(null)
    const option = {
      title: 'Select Image',
      type: 'library',
      option: {
        mediaType: 'photo',
        selectionLimit: 1,
        includeBase64: false
      }
    } 
    const result = await launchImageLibrary(option, (res) => {
      if(res.didCancel){
        console.log('Upload cancel');
      }else if(res.errorCode){
        console.log('Upload error');
      }else{
        setImage(res.assets[0])
        dispatch(patchUserImage([token, res.assets]));
      }
    })
  }

  const profileSchema = Yup.object().shape({
    first_name: Yup.string().required('Required'),
    last_name: Yup.string().required('Required')
  })

  const profileSubmit = (props) => {
    if(props.values.first_name || props.values.last_name){
      if(!Object.keys(props.errors).length){
        dispatch(patchUserFullname([token, props.values]));
        setLoading(true)
        setTimeout(function () {
          setLoading(false)
          navigation.navigate('CreatePin')
        }, 1000);
      }
    }else{
      setCheckError('Data register cant empty')
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
              initialValues={{ first_name: '', last_name: '' }}
              validationSchema={profileSchema}
            >
            {({ handleChange, values, errors }) => (
              <View className={`flex-1 w-full p-4 rounded-t-3xl flex flex-col items-center justify-center bg-gray-100 space-y-4`}>
                <View>
                  <Input 
                    icon={['document-text-outline']}
                    placeholder={'First Name'}
                    onChange={handleChange('first_name')}
                  />
                  {errors.first_name && <Text className={`text-sm text-red-500`}>{errors.first_name}</Text>}
                </View>

                <View>
                  <Input 
                    icon={['document-text-outline']}
                    placeholder={'Last Name'}
                    onChange={handleChange('last_name')}
                  />
                  {errors.last_name && <Text className={`text-sm text-red-500`}>{errors.last_name}</Text>}
                </View>

                <View className={`border-dashed border-2 border-gray-400 w-[120px] h-[120px]`}>
                  <TouchableOpacity className={`z-10`} onPress={() => image? setImage(null):openGalery()}>
                    <View className={`absolute w-[35px] h-[35px] rounded-full flex items-center m-2 justify-center bg-[#29346288]`}><Icon name={`${image? 'trash-outline':'add-outline'}`} size={30} color={'#e4e4e4'} /></View>
                  </TouchableOpacity>
                  {
                    image ?
                    <View className={`absolute w-full h-full flex items-center justify-center`}>
                      <ImageBackground blurRadius={!message? 5:0} source={{uri:image.uri}} className={`w-full h-full`} />
                      {
                        !message &&
                        <ActivityIndicator size="large" color="gray" className={`absolute`} />
                      }
                    </View>
                    :
                    <TouchableOpacity onPress={() => openGalery()}>
                      <View className={`flex items-center justify-center w-full h-full`}>
                        <Icon name={'image-outline'} size={100} color={'#e4e4e4'} />
                      </View>
                    </TouchableOpacity>
                  }
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
                  <TouchableOpacity className={`w-full`} onPress={() => profileSubmit({values, errors})}>
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