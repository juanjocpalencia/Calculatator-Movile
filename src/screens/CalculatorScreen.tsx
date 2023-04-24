import React from 'react'
import { Text, View } from 'react-native'
import { style } from '../Theme/appTheme'
import { ButtonCalculator } from '../components/ButtonCalculator'
import { useCalculator } from '../Hooks/useCalculator'


export const CalculatorScreen = () => {
    let {
        equals,
        addNumber,
        saveNumber,
        clean,
        positionNegative,
        del,
        Operations,
        currentNumber,
        lastNumber
    }=useCalculator();
    
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
                <ButtonCalculator TextButton="C" Color='#9B9B9B' TextColor='black' onTouch={clean} />
                <ButtonCalculator TextButton="+/-" Color='#9B9B9B' TextColor='black' onTouch={positionNegative} />
                <ButtonCalculator TextButton="del" Color='#9B9B9B' TextColor='black' onTouch={del} />
                <ButtonCalculator TextButton="/" Color='#FF9427' onTouch={() => saveNumber(Operations.division)} />
            </View>
            <View style={style.row}>
                <ButtonCalculator TextButton="7" Color='#2D2D2D' TextColor='white' onTouch={() => addNumber('7')} />
                <ButtonCalculator TextButton="8" Color='#2D2D2D' TextColor='white' onTouch={() => addNumber('8')} />
                <ButtonCalculator TextButton="9" Color='#2D2D2D' TextColor='white' onTouch={() => addNumber('9')} />
                <ButtonCalculator TextButton="+" Color='#FF9427' onTouch={() => saveNumber(Operations.addition)} />
            </View>
            <View style={style.row}>
                <ButtonCalculator TextButton="4" Color='#2D2D2D' TextColor='white' onTouch={() => addNumber('4')} />
                <ButtonCalculator TextButton="5" Color='#2D2D2D' TextColor='white' onTouch={() => addNumber('5')} />
                <ButtonCalculator TextButton="6" Color='#2D2D2D' TextColor='white' onTouch={() => addNumber('6')} />
                <ButtonCalculator TextButton="-" Color='#FF9427' onTouch={() => saveNumber(Operations.substraction)} />
            </View>
            <View style={style.row}>
                <ButtonCalculator TextButton="1" Color='#2D2D2D' TextColor='white' onTouch={() => addNumber('1')} />
                <ButtonCalculator TextButton="2" Color='#2D2D2D' TextColor='white' onTouch={() => addNumber('2')} />
                <ButtonCalculator TextButton="3" Color='#2D2D2D' TextColor='white' onTouch={() => addNumber('3')} />
                <ButtonCalculator TextButton="X" Color='#FF9427' onTouch={() => saveNumber(Operations.multiplication)} />
            </View>
            <View style={style.row}>
                <ButtonCalculator TextButton="0" Color='#2D2D2D' TextColor='white' Width onTouch={() => addNumber('0')} />
                <ButtonCalculator TextButton="." Color='#2D2D2D' TextColor='white' onTouch={() => addNumber('.')} />
                <ButtonCalculator TextButton="=" Color='#FF9427' onTouch={equals}/>
            </View>


        </View>
    )
}

