import React, {useState} from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Body} from './components/body/Body';
import {Footer} from "./components/footer/Footer";
import {NewComponent} from "./components/body/newComponent/NewComponent";

const App = () => {
    const headerTitle = 'Header'
    const bodyTitle = 'Body'
    const footerTitle = 'Footer'
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]
    const btnName = 'My youtube channel 1'
    const btnName2 = 'My youtube channel 2'
    const btnName3 = 'Stupid button'

    const buttonFunction1 = () => {
        console.log("I'm Michael")
    }
    const buttonFunction2 = (name: string, age: number, address: string) => {
        console.log(name, age, address)
    }
    const buttonFunction3 = () => {
        console.log("I'm stupid button")
    }
    let [num, setNum] = useState(1)
    const numCounter = () => {
       setNum(++num);
        console.log(num)
    }
    const numReset = () => {
        setNum(0)
    }
    const initialState =[
        { banknotes: 'Dollars', value: 100, number: ' a1234567890' },
        { banknotes: 'Dollars', value: 50, number: ' z1234567890' },
        { banknotes: 'Hryvnias', value: 100, number: ' w1234567890' },
        { banknotes: 'Dollars', value: 100, number: ' e1234567890' },
        { banknotes: 'Dollars', value: 50, number: ' c1234567890' },
        { banknotes: 'Hryvnias', value: 100, number: ' r1234567890' },
        { banknotes: 'Dollars', value: 50, number: ' x1234567890' },
        { banknotes: 'Hryvnias', value: 50, number: ' v1234567890' },
    ]
    const [money, setMoney] = useState(initialState)


    const currencyFilter = (name:string) => {
        let filteredByCurrency = initialState.filter(el => el.banknotes === name)
        setMoney(filteredByCurrency)
    }
    const resetFilter = () => {
        setMoney(initialState)
    }

    return (
        <>
            <Header title={headerTitle}/>
            <Body title={bodyTitle}
                  carTable={topCars}
                  btnName={{btnName,btnName2,btnName3}}
                  btn1Callback={buttonFunction1}
                  btn2Callback={() => {buttonFunction2("I'm Genya", 21,"Kiev")}}
                  btn3Callback={buttonFunction3}
                  currencyTable={money}
                  filteredByCurrency={currencyFilter}
                  resetFilter={resetFilter} />
            <h2>{num}</h2>
            <button onClick={numCounter}>counter</button>
            <button onClick={numReset}>reset</button>

            <Footer title={footerTitle}/>
            <NewComponent/>

        </>
    );
}

export default App;
