import styles from './Calculator.module.scss'
import { useState } from 'react'
import { CalculatorNumpad } from './calculator-numpad/CalculatorNumpad';

export const Calculator = () => {
    const [screenValue, setScreenValue] = useState('')
    return (
        <div className={styles.calculator}>
            <h3 className={styles.title}>Calculator</h3>
            <div className={styles.screen}>
                {screenValue}
            </div>
            <CalculatorNumpad screenValue={screenValue} setScreenValue={setScreenValue} />
        </div>
    )
}
