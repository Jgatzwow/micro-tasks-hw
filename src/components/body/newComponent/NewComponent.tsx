import React, {useState} from "react";
import {NewComponentItem,} from "./NewComponentItem";


type FilterType = 'All Currencies' | 'Dollars' | 'Hryvnias'

export const NewComponent = () => {

    const [money, setMoney] = useState([
        {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
        {banknotes: 'Hryvnias', value: 100, number: ' w1234567890'},
        {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
        {banknotes: 'Hryvnias', value: 100, number: ' r1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
        {banknotes: 'Hryvnias', value: 50, number: ' v1234567890'},
    ])

    let [filter, setFilter] = useState<FilterType>('All Currencies')
    const onClickFilterHandler = (name: FilterType) => {
        setFilter(name)

    }

    return (
        <NewComponentItem
            currentMoney={money}
            onClickFilterHandler={onClickFilterHandler} filter={filter}/>
    )
}

