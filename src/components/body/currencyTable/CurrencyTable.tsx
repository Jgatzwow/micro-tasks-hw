import React from 'react';
import {nameType} from '../../../App';

type PropsType = {
    currencyTable: Array<CurrencyTableType>
    currencyFilter: (name: nameType) => void
}
type CurrencyTableType = {
    banknotes: string
    value: number
    number: string
}



export const CurrencyTable = (props: PropsType) => {
    const {currencyTable, currencyFilter} = props

    const changeFilter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        currencyFilter(e.currentTarget.value  as nameType)
    }

    return (
        <div>
            <ul>
                {currencyTable.map((el, idx) => {
                    return (
                        <li key={idx}>
                            <span>{el.banknotes} </span>
                            <span> {el.value} </span>
                            <span> {el.number} </span>
                        </li>
                    )
                })}
            </ul>
            <button value={'reset'} onClick={changeFilter}>Display All</button>
            <button value={'Dollars'} onClick={changeFilter}>Dollars</button>
            <button value={'Hryvnias'} onClick={changeFilter}>Hryvnias</button>
        </div>
    )
}

