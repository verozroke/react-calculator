import { Dispatch, FC, SetStateAction } from 'react'
import { CalculatorButton } from './../../../../ui/button/CalculatorButton';
import styles from './CalculatorNumpad.module.scss'

interface ICalculatorNumpad {
  setScreenValue: Dispatch<SetStateAction<string>>
  screenValue: string
}

function isOperationLast(text: string) {
  const operations = ['+', '-', '*', '/', '%']
  const lastChar = text[text.length - 1]
  return operations.includes(lastChar);
}


export const CalculatorNumpad: FC<ICalculatorNumpad> = ({ setScreenValue, screenValue }) => {

  return (
    <>
      <ul className={styles.rows}>
        <li className={styles.row}>
          <CalculatorButton onClick={() => !isOperationLast(screenValue) ? setScreenValue((prev) => prev + '%') : ''} text="%" isOperation={true} />
          <CalculatorButton onClick={() => setScreenValue('')} text="C" isOperation={true} />
          <CalculatorButton onClick={() => setScreenValue(prev => prev.toString().slice(0, -1))} text="<" isOperation={true} />
          <CalculatorButton onClick={() => !isOperationLast(screenValue) ? setScreenValue(prev => prev + '/') : ''} text="/" isOperation={true} />
        </li>
        <li className={styles.row}>
          <CalculatorButton onClick={() => setScreenValue(prev => prev + '7')} text="7" />
          <CalculatorButton onClick={() => setScreenValue(prev => prev + '8')} text="8" />
          <CalculatorButton onClick={() => setScreenValue(prev => prev + '9')} text="9" />
          <CalculatorButton onClick={() => !isOperationLast(screenValue) ? setScreenValue(prev => prev + '*') : ''} text="x" isOperation={true} />
        </li>
        <li className={styles.row}>
          <CalculatorButton onClick={() => setScreenValue(prev => prev + '4')} text="4" />
          <CalculatorButton onClick={() => setScreenValue(prev => prev + '5')} text="5" />
          <CalculatorButton onClick={() => setScreenValue(prev => prev + '6')} text="6" />
          <CalculatorButton onClick={() => !isOperationLast(screenValue) ? setScreenValue(prev => prev + '-') : ''} text="-" isOperation={true} />
        </li>
        <li className={styles.row}>
          <CalculatorButton onClick={() => setScreenValue(prev => prev + '1')} text="1" />
          <CalculatorButton onClick={() => setScreenValue(prev => prev + '2')} text="2" />
          <CalculatorButton onClick={() => setScreenValue(prev => prev + '3')} text="3" />
          <CalculatorButton onClick={() => !isOperationLast(screenValue) ? setScreenValue(prev => prev + '+') : ''} text="+" isOperation={true} />
        </li>
        <li className={styles.row}>
          <CalculatorButton onClick={() => setScreenValue(prev => prev + '0')} text="0" isZero={true} />
          <CalculatorButton onClick={() => setScreenValue(prev => prev + '.')} text="." />
          <CalculatorButton onClick={() => !isOperationLast(screenValue) ? setScreenValue(eval(screenValue)) : ''} text="=" isOperation={true} />
        </li>
      </ul>
    </>
  )
}
