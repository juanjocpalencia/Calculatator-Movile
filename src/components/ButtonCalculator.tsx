import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { style } from '../Theme/appTheme'

interface Props {
    TextButton: string,
    Color?: string
    TextColor?: 'white' | 'black';
    Width?: boolean,
    onTouch?:()=>void | void 
}

export const ButtonCalculator = ({ TextButton, Color = '#333333', TextColor = 'white', Width = false,onTouch }: Props) => {
    return (
        <TouchableOpacity
            onPress={onTouch}
        >
            <View style={{
                ...style.button,
                backgroundColor: Color,
                width: (Width ? 180 : 80)
            }}>
                <Text style={{
                    ...style.textButton,
                    color: TextColor
                }}>{TextButton}</Text>
            </View>
        </TouchableOpacity>
    )
}
