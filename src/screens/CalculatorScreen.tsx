import React, { useRef, useState } from 'react'
import {  Text, View } from 'react-native'
import { style } from '../Theme/appTheme'
import { ButtonCalculator } from '../components/ButtonCalculator'

enum Operations {addition,substraction,division,multiplication}

export const CalculatorScreen = () => {
    const [currentNumber, setCurrentNumber] = useState('0');
    const [lastNumber, setlastNumber] = useState('');
    const operation= useRef<Operations>();

    const saveNumber=(operationSelected:Operations)=>{
        operation.current=operationSelected;
        if(currentNumber.includes('.') && currentNumber.length==2){
            setlastNumber(currentNumber.slice(0,-1));
            setCurrentNumber('0');
            return;
        }
        setlastNumber(currentNumber);
        setCurrentNumber('0');
        
    }

    const addNumber=(number:string)=>{
        if(currentNumber.length >=15)return;
        if(number==='.'){
            if(!currentNumber.includes('.')){ setCurrentNumber(currentNumber+number)}
            return;
        }
        if(currentNumber==='0' || currentNumber==='-0'){ 
            setCurrentNumber(currentNumber.replace('0',number))
            return;
        }
        setCurrentNumber(currentNumber+number)
    }

    const limpiar =()=>{
        if(currentNumber==='0'){
            setlastNumber('');
        }
        setCurrentNumber('0');

    }

    const positivoNegativo=()=>{
        currentNumber.includes('-')?
            setCurrentNumber(currentNumber.replace('-','')):
            setCurrentNumber(`-${currentNumber}`)
    }

    const del=()=>{
        if((currentNumber.length==2 && currentNumber.includes('-')) || currentNumber.length==1 && !currentNumber.includes('-')){
            setCurrentNumber('0');
            return;
        }
        setCurrentNumber(currentNumber.slice(0,-1))
    }
    return (
        <View style={style.calculatorContainer}>
            <Text style={style.resultTiny}>{lastNumber}</Text>
            <Text 
                numberOfLines={1}
                adjustsFontSizeToFit
                style={style.result}>{currentNumber}</Text>
            {/* #2D2D2D */}
            {/* #FF9427 */}
            {/* #9B9B9B */}
            <View style={style.row}>
                <ButtonCalculator Texto="C" Color='#9B9B9B' TextColor='black' onTouch={limpiar}/>
                <ButtonCalculator Texto="+/-" Color='#9B9B9B' TextColor='black' onTouch={positivoNegativo} />
                <ButtonCalculator Texto="del" Color='#9B9B9B' TextColor='black' onTouch={del}/>
                <ButtonCalculator Texto="/" Color='#FF9427' onTouch={()=>saveNumber(Operations.division)}/>
            </View>
            <View style={style.row}>
                <ButtonCalculator Texto="7" Color='#2D2D2D' TextColor='white'  onTouch={()=>addNumber('7')} />
                <ButtonCalculator Texto="8" Color='#2D2D2D' TextColor='white'  onTouch={()=>addNumber('8')}/>
                <ButtonCalculator Texto="9" Color='#2D2D2D' TextColor='white'  onTouch={()=>addNumber('9')}/>
                <ButtonCalculator Texto="+" Color='#FF9427' onTouch={()=>saveNumber(Operations.addition)}/>
            </View>
            <View style={style.row}>
                <ButtonCalculator Texto="4" Color='#2D2D2D' TextColor='white' onTouch={()=>addNumber('4')}/>
                <ButtonCalculator Texto="5" Color='#2D2D2D' TextColor='white' onTouch={()=>addNumber('5')}/>
                <ButtonCalculator Texto="6" Color='#2D2D2D' TextColor='white' onTouch={()=>addNumber('6')}/>
                <ButtonCalculator Texto="-" Color='#FF9427'onTouch={()=>saveNumber(Operations.substraction)}/>
            </View>
            <View style={style.row}>
                <ButtonCalculator Texto="1" Color='#2D2D2D' TextColor='white' onTouch={()=>addNumber('1')}/>
                <ButtonCalculator Texto="2" Color='#2D2D2D' TextColor='white' onTouch={()=>addNumber('2')}/>
                <ButtonCalculator Texto="3" Color='#2D2D2D' TextColor='white' onTouch={()=>addNumber('3')}/>
                <ButtonCalculator Texto="X" Color='#FF9427' onTouch={()=>saveNumber(Operations.multiplication)}/>
            </View>
            <View style={style.row}>
                <ButtonCalculator Texto="0" Color='#2D2D2D' TextColor='white' ancho onTouch={()=>addNumber('0')}/>
                <ButtonCalculator Texto="." Color='#2D2D2D' TextColor='white' onTouch={()=>addNumber('.')} />
                <ButtonCalculator Texto="=" Color='#FF9427'/>
            </View>


        </View>
    )
}

