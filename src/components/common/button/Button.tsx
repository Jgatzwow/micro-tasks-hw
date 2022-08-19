import React from 'react';

type PropsType = {
    name?: string
    age?: number
    address?: string
    btnName: btnNameType
    callback: (btnName: btnNameType,
               name?: string,
               age?: number,
               address?: string) => void
}

export type btnNameType = 'My youtube channel 1' | 'My youtube channel 2' | 'Stupid button'

export const Button = (props: PropsType) => {
    const {btnName, callback, name, address, age} = props

    return (
        <>
            <button onClick={() => callback(btnName, name, age, address)}>{btnName}</button>
        </>
    );
}


