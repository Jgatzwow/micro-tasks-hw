import React from 'react';
import {FilterType} from './NewComponent';



type PropsType = {
    currentMoney: Array<CurrentMoneyType>
    onClickFilterHandler: (name: FilterType) => void
    filter: any
}
type CurrentMoneyType = {
    banknotes: string
    value: number
    number: string
}


export const NewComponentItem = (props: PropsType) => {
    const {currentMoney, onClickFilterHandler, filter} = props
    let newCurrentMoney = currentMoney
    if (filter === 'Dollars') {
        newCurrentMoney = currentMoney.filter(filteredMoney => filteredMoney.banknotes === 'Dollars')
    } else if (filter === 'Hryvnias') {
        newCurrentMoney = currentMoney.filter(filteredMoney => filteredMoney.banknotes === 'Hryvnias')
    }
    const changeFilter1 = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onClickFilterHandler(e.currentTarget.value as FilterType)
    }

    return (
        <div>
            <ul>
                {newCurrentMoney.map((el, idx) => {
                    return (
                        <li key={idx}>{el.banknotes}{el.number}{el.value}</li>
                    )
                })}
            </ul>

            <button value={'All Currencies'} onClick={changeFilter1}>All Currencies</button>
            <button value={'Dollars'} onClick={changeFilter1}>Dollars</button>
            <button value={'Hryvnias'} onClick={changeFilter1}>Hryvnias</button>
        </div>
    )
}