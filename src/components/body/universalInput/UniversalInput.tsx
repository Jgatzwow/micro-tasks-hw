import React, {ChangeEvent} from 'react';

type PropsType = {
    setTitle: (title:string) => void
    title: string
}

export function UniversalInput(props: PropsType) {
    const {setTitle,title} = props
    const onUpdateTextMessage = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        <div>
            <input onChange={onUpdateTextMessage} value={title} type="text"/>
        </div>
)
}