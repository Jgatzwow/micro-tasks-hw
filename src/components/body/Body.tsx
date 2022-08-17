import React from 'react';
import {CarTable} from "./carTable/CarTable";
import {Button} from "../common/button/Button";
import {CurrencyTable} from "./currencyTable/CurrencyTable";

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
    resetFilter: () => void
}
type nameType = 'Dollars' | 'Hryvnias'
type CarTableType = {
    manufacturer: string
    model: string
}
type CurrencyTableType = {
    banknotes: string
    value: number
    number: string
}
type btnNameType = 'My youtube channel 1' | 'My youtube channel 2' | 'Stupid button'
export const Body = (props: PropsType) => {
    const {
        title, carTable, btn1Callback, currencyTable,
        filteredByCurrency, resetFilter
    } = props

    const {btnName, btnName2, btnName3} = props.btnName
    let name = ' Genya'
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
                currencyFilter={filteredByCurrency}
                resetFilter={resetFilter}/>

        </div>
    )
}

