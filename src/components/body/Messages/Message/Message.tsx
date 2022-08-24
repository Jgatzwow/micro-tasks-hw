import React, {useState} from 'react';

type PropsType = {
    messages: string
}

export function Message(props:PropsType) {
    const {messages} = props

    return (
        <div>
            {messages}
        </div>
    )
}