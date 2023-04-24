import React, { useState } from 'react'
import {  Text, View } from 'react-native'
import { style } from '../Theme/appTheme'
import { BotonCalc } from '../components/BotonCalc'

export const CalculadoraScreen = () => {
    const [numero, setnumero] = useState('0');
    const [numeroAnterior, setnumeroAnterior] = useState('0');
    const [opeation, setopeation] = useState('');

    const setOpetation= ()=>{
        saveNumber();
    }

    const saveNumber=()=>{
        if(numero.includes('.') && numero.length==2){
            setnumeroAnterior(numero.slice(0,-1));
            setnumero('0');
            return;
        }
        setnumeroAnterior(numero);
        setnumero('0');
    }

    const addNumber=(number:string)=>{
        if(number.length>=10){return;}
        if(number==='.'){
            if(!numero.includes('.')){ setnumero(numero+number)}
            return;
        }
        if(numero==='0' || numero==='-0'){ 
            setnumero(numero.replace('0',number))
            return;
        }
        setnumero(numero+number)
    }

    const limpiar =()=>{
        setnumero('0');
    }

    const positivoNegativo=()=>{
        numero.includes('-')?
            setnumero(numero.replace('-','')):
            setnumero(`-${numero}`)
    }

    const del=()=>{
        if((numero.length==2 && numero.includes('-')) || numero.length==1 && !numero.includes('-')){
            setnumero('0');
            return;
        }
        setnumero(numero.slice(0,-1))
    }
    return (
        <View style={style.calculadoraContainer}>
            <Text style={style.resultadoTiny}>{numeroAnterior}</Text>
            <Text 
                numberOfLines={1}
                adjustsFontSizeToFit
                style={style.resultado}>{numero}</Text>
            {/* #2D2D2D */}
            {/* #FF9427 */}
            {/* #9B9B9B */}
            <View style={style.fila}>
                <BotonCalc Texto="C" Color='#9B9B9B' TextColor='black' onTouch={limpiar}/>
                <BotonCalc Texto="+/-" Color='#9B9B9B' TextColor='black' onTouch={positivoNegativo} />
                <BotonCalc Texto="del" Color='#9B9B9B' TextColor='black' onTouch={del}/>
                <BotonCalc Texto="/" Color='#FF9427' onTouch={setOpetation}/>
            </View>
            <View style={style.fila}>
                <BotonCalc Texto="7" Color='#2D2D2D' TextColor='white'  onTouch={()=>addNumber('7')} />
                <BotonCalc Texto="8" Color='#2D2D2D' TextColor='white'  onTouch={()=>addNumber('8')}/>
                <BotonCalc Texto="9" Color='#2D2D2D' TextColor='white'  onTouch={()=>addNumber('9')}/>
                <BotonCalc Texto="+" Color='#FF9427'/>
            </View>
            <View style={style.fila}>
                <BotonCalc Texto="4" Color='#2D2D2D' TextColor='white' onTouch={()=>addNumber('4')}/>
                <BotonCalc Texto="5" Color='#2D2D2D' TextColor='white' onTouch={()=>addNumber('5')}/>
                <BotonCalc Texto="6" Color='#2D2D2D' TextColor='white' onTouch={()=>addNumber('6')}/>
                <BotonCalc Texto="-" Color='#FF9427'/>
            </View>
            <View style={style.fila}>
                <BotonCalc Texto="1" Color='#2D2D2D' TextColor='white' onTouch={()=>addNumber('1')}/>
                <BotonCalc Texto="2" Color='#2D2D2D' TextColor='white' onTouch={()=>addNumber('2')}/>
                <BotonCalc Texto="3" Color='#2D2D2D' TextColor='white' onTouch={()=>addNumber('3')}/>
                <BotonCalc Texto="X" Color='#FF9427'/>
            </View>
            <View style={style.fila}>
                <BotonCalc Texto="0" Color='#2D2D2D' TextColor='white' ancho onTouch={()=>addNumber('0')}/>
                <BotonCalc Texto="." Color='#2D2D2D' TextColor='white' onTouch={()=>addNumber('.')} />
                <BotonCalc Texto="=" Color='#FF9427'/>
            </View>


        </View>
    )
}

