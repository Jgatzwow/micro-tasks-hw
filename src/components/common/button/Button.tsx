import React from 'react';

type PropsType = {
    btnName: string
    callback: ()=> void
}

export const Button = (props:PropsType) => {
    const {btnName, callback} = props

    return (
        <>
            <button onClick={callback}>{btnName}</button>
        </>
    );
}


