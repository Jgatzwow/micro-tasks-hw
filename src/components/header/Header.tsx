import React from 'react';


type PropsType = {
    title: string
}

export const Header = (props: PropsType) => {
    const {title} = props
    return <header>{title}</header>;


}

