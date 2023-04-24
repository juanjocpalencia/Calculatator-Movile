import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { style } from '../Theme/appTheme'
import { Colors } from 'react-native/Libraries/NewAppScreen'

interface Props {
    Texto: string,
    Color?: string
    TextColor?: 'white' | 'black';
    ancho?: boolean,
    onTouch?:()=>void | void 
}

export const BotonCalc = ({ Texto, Color = '#333333', TextColor = 'white', ancho = false,onTouch }: Props) => {
    return (
        <TouchableOpacity
            onPress={onTouch}
        >
            <View style={{
                ...style.boton,
                backgroundColor: Color,
                width: (ancho ? 180 : 80)
            }}>
                <Text style={{
                    ...style.botonTexto,
                    color: TextColor
                }}>{Texto}</Text>
            </View>
        </TouchableOpacity>
    )
}
