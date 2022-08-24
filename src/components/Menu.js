
import { View } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default function Menu(){
  return (
    <TailwindProvider>
        <View className={`w-full h-[60px] px-4 flex flex-row items-center justify-around bg-[#293462]`}>
            <Icon name={'home'} size={24} color={'#DBDFFD'} />
            <Icon name={'arrow-up'} size={24} color={'#DBDFFD'} />
            <Icon name={'add'} size={24} color={'#DBDFFD'} />
            <Icon name={'person'} size={24} color={'#DBDFFD'} />
            <Icon name={'log-out'} size={24} color={'#DBDFFD'} />
        </View>
    </TailwindProvider>
  )
}