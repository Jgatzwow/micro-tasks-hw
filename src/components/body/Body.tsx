import React from 'react';
import {CarTable} from './carTable/CarTable';
import {btnNameType, Button} from '../common/button/Button';
import {CurrencyTable} from './currencyTable/CurrencyTable';
import {nameType} from '../../App';

type PropsType = {
    title: string
    carTable: Array<CarTableType>
    btnName: {
        btnName: btnNameType
        btnName2: btnNameType
        btnName3: btnNameType
    }
    btn1Callback: (btnName: btnNameType,
                   name?: string,
                   age?: number,
                   address?: string) => void
    currencyTable: Array<CurrencyTableType>
    filteredByCurrency: (name: nameType) => void
}

type CarTableType = {
    manufacturer: string
    model: string
}
type CurrencyTableType = {
    banknotes: string
    value: number
    number: string
}

export const Body = (props: PropsType) => {
    const {
        title, carTable, btn1Callback, currencyTable,
        filteredByCurrency
    } = props

    const {btnName, btnName2, btnName3} = props.btnName
    let name = 'Genya'
    let age = 23
    let address = 'Kiev'
    return (
        <div>
            <main>{title}</main>
            <CarTable carTable={carTable}/>
            <Button callback={btn1Callback} btnName={btnName}/>
            <Button callback={btn1Callback} btnName={btnName2}
                    name={name} age={age} address={address}/>
            <Button callback={btn1Callback} btnName={btnName3}/>
            <CurrencyTable
                currencyTable={currencyTable}
                currencyFilter={filteredByCurrency}/>
        </div>
    )
}

