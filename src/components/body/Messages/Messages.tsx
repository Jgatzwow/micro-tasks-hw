import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';
import {Message} from './Message/Message';
import {UniversalInput} from '../universalInput/UniversalInput';
import {UniversalBTN} from '../universalInput/UniversalBTN';

type InputValueType = string

export function Messages() {
    const initialState = [
        {
            message: 'message1'
        },
        {
            message: 'message2'
        },
        {
            message: 'message3'
        }
    ]

    const [message, setMessage] = useState(initialState)

    const [title, setTitle] = useState('')

    const onUpdateTextMessage = (value: InputValueType) => {
        setTitle(value)
    }


    const addNewMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage,...message])
        setTitle('')
    }
    const onClickAddMessageHandler = () => {
        addNewMessage(title)
    }
    return (
        <div>
            <div>
                <UniversalInput title={title} setTitle={setTitle}/>
                <UniversalBTN name={'add message'} callback={onClickAddMessageHandler}/>
                {/*<input onChange={onUpdateTextMessageHandler} value={title} type="text"/>
                <button onClick={onClickAddMessageHandler}>add message</button>*/}
            </div>

            {message.map((m, idx) => {
                return <Message key={idx} messages={m.message}/>
            })}
        </div>
    )
}