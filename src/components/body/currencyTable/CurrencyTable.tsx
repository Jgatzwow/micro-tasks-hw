import React from 'react';

type PropsType = {
    currencyTable: Array<CurrencyTableType>
    currencyFilter: (name:nameType) => void
    resetFilter: () => void
}
type CurrencyTableType = {
    banknotes: string
    value: number
    number: string
}
type nameType = 'Dollars' | 'Hryvnias'

export const CurrencyTable = (props: PropsType) => {
    const {currencyTable, currencyFilter, resetFilter} = props


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
            <button onClick={() => {resetFilter()}}>Display All</button>
            <button onClick={() => {currencyFilter('Dollars')}}>Dollars</button>
            <button onClick={() => {currencyFilter('Hryvnias')}}>Hryvnias</button>
        </div>
    )
}

