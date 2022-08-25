import { View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { TailwindProvider } from "tailwindcss-react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default function Input({placeholder, icon, secretInput, type, focus}){
    const [secret, setSecret] = React.useState(secretInput? true:false);
    return(
        <TailwindProvider>
            <View className={`${type != 'numeric'?'w-full':'max-w-[48px]'} h-[48px] bg-gray-50 border-[1px] border-gray-200 rounded-md flex flex-row items-center`}>
                {
                    type != 'numeric' &&
                    <View className={`w-[48px] h-[48px] flex items-center justify-center border-r-[1px] border-gray-200`}>
                    <Icon name={icon[0]} size={24} color={'gray'} />
                    </View>
                }
                <TextInput placeholder={placeholder} placeholderTextColor="gray" keyboardType={type} maxLength={type == 'numeric'? 1:null} secureTextEntry={secret} autoFocus = {focus} className={`text-gray-900 ${type == 'numeric'&&'text-center'} flex flex-1 px-3 text-base`} />
                {
                    secretInput &&
                    <TouchableOpacity  onPress={() => setSecret(!secret)}>
                        <View className={`w-[38px] h-[48px] flex justify-center`}>
                            <Icon name={secret? icon[1]:icon[2]} size={24} color={'gray'} />
                        </View>
                    </TouchableOpacity>
                }
              </View>
        </TailwindProvider>
    )
}