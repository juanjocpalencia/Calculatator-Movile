import  { useRef, useState } from 'react'

enum Operations { addition, substraction, division, multiplication }

export const useCalculator = () => {
    const [currentNumber, setCurrentNumber] = useState('0');
    const [lastNumber, setlastNumber] = useState('');
    const operation = useRef<Operations>();

    const saveNumber = (operationSelected: Operations) => {
        if (currentNumber.includes('.') && currentNumber.length == 2) {
            setlastNumber(currentNumber.slice(0, -1));
            setCurrentNumber('0');
            return;
        }
        if (lastNumber === '') {
            setlastNumber(currentNumber);
            setCurrentNumber('0');
        }
        else {
            setlastNumber(showResult());
            setCurrentNumber('0');
        }
        operation.current = operationSelected;
    }

    const showResult = () => {
        let aux1 = Number(lastNumber);
        let aux2 = Number(currentNumber);
        let result='0';
        switch (operation.current) {
            case Operations.addition:
                result= `${(aux1 + aux2)}`;
                break;
            case Operations.substraction:
                result= `${(aux1 - aux2)}`;
                break;
            case Operations.division:
                result=`${aux1 / aux2}`;
                break;
            case Operations.multiplication:
                result=`${(aux1 * aux2)}`;
                break;
        }
        return result;

    }

    const addNumber = (number: string) => {
        if (currentNumber.length >= 15) return;
        if (number === '.') {
            if (!currentNumber.includes('.')) { setCurrentNumber(currentNumber + number) }
            return;
        }
        if (currentNumber === '0' || currentNumber === '-0') {
            setCurrentNumber(currentNumber.replace('0', number))
            return;
        }
        setCurrentNumber(currentNumber + number)
    }

    const clean = () => {
        if (currentNumber === '0') {
            setlastNumber('');
        }
        setCurrentNumber('0');

    }

    const equals=()=>{
        setCurrentNumber(showResult());
        setlastNumber('');
    }

    const positionNegative = () => {
        currentNumber.includes('-') ?
            setCurrentNumber(currentNumber.replace('-', '')) :
            setCurrentNumber(`-${currentNumber}`)
    }

    const del = () => {
        if ((currentNumber.length == 2 && currentNumber.includes('-')) || currentNumber.length == 1 && !currentNumber.includes('-')) {
            setCurrentNumber('0');
            return;
        }
        setCurrentNumber(currentNumber.slice(0, -1))
    }


    return{
        del,
        positionNegative,
        equals,
        clean,
        addNumber,
        showResult,
        saveNumber,
        Operations,
        currentNumber,
        lastNumber
    }
}
