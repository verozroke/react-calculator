import React, { FC } from 'react'
import styles from './CalculatorButton.module.scss'

// #ff9600
// #373737


interface ICalculatorButton {
    text: string,
    isOperation?: boolean,
    isZero?: boolean,
    onClick: () => void
}

export const CalculatorButton: FC<ICalculatorButton> = ({ text, isOperation = false, onClick, isZero = false }) => {

    const mouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        (e.target as HTMLDivElement).style.transform = 'scale(0.95)'
    }


    const mouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        (e.target as HTMLDivElement).style.transform = 'scale(1)'
    }

    return (
        <div onMouseDown={e => mouseDown(e)} onMouseUp={e => mouseUp(e)} onClick={onClick} className={styles.button} style={{ backgroundColor: isOperation ? '#ff9600' : '#373737', width: isZero ? '170px' : '80px' }}>
            {text}
        </div>
    )
}
