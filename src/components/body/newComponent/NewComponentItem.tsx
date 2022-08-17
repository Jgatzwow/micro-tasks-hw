import React from "react";

type FilterType = 'All Currencies' | 'Dollars' | 'Hryvnias'

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
    return (
        <div>
            <ul>
                {newCurrentMoney.map((el, idx) => {
                    return (
                        <li key={idx}>{el.banknotes}{el.number}{el.value}</li>
                    )
                })}
            </ul>

            <button onClick={() => onClickFilterHandler('All Currencies')}>All Currencies</button>
            <button onClick={() => onClickFilterHandler('Dollars')}>Dollars</button>
            <button onClick={() => onClickFilterHandler('Hryvnias')}>Hryvnias</button>
        </div>
    )
}