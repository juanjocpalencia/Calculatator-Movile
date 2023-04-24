import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { style } from '../Theme/appTheme'

interface Props {
    Texto: string,
    Color?: string
    TextColor?: 'white' | 'black';
    ancho?: boolean,
    onTouch?:()=>void | void 
}

export const ButtonCalculator = ({ Texto, Color = '#333333', TextColor = 'white', ancho = false,onTouch }: Props) => {
    return (
        <TouchableOpacity
            onPress={onTouch}
        >
            <View style={{
                ...style.button,
                backgroundColor: Color,
                width: (ancho ? 180 : 80)
            }}>
                <Text style={{
                    ...style.textButton,
                    color: TextColor
                }}>{Texto}</Text>
            </View>
        </TouchableOpacity>
    )
}
