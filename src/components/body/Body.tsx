import React from 'react';
import {CarTable} from "./carTable/CarTable";
import {Button} from "../common/button/Button";
import {CurrencyTable} from "./currencyTable/CurrencyTable";

type PropsType = {
    title: string
    carTable: Array<CarTableType>
    btnName: {
        btnName: string
        btnName2: string
        btnName3: string
    }
    btn1Callback: () => void
    btn2Callback: () => void
    btn3Callback: () => void
    currencyTable: Array<CurrencyTableType>
    filteredByCurrency: (name:string)=>void
    resetFilter: () =>void
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
    const {title, carTable, btn1Callback,
        btn2Callback, btn3Callback, currencyTable,
        filteredByCurrency, resetFilter} = props
    const {btnName, btnName2, btnName3} = props.btnName


    return (
        <div>
            <main>{title}</main>
            <CarTable carTable={carTable}/>
            <Button callback={btn1Callback} btnName={btnName}/>
            <Button callback={btn2Callback} btnName={btnName2}/>
            <Button callback={btn3Callback} btnName={btnName3}/>
            <CurrencyTable
                currencyTable={currencyTable}
                currencyFilter={filteredByCurrency}
                resetFilter={resetFilter}/>

        </div>
    )
}

