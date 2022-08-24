import React, {ChangeEvent} from 'react';

type BTNPropsType = {
    name: string
    callback: () => void
}



export function UniversalBTN(props: BTNPropsType) {
    const {name,callback} = props
    const onClickBTNHandler = () => {
        callback();
    }

    return (
        <div>
            <button  onClick={onClickBTNHandler}>{name}</button>
        </div>
    )
}