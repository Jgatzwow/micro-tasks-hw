import React from 'react';


type PropsType = {
    title: string
}

export const Footer = (props: PropsType) => {
    const {title} = props
    return <footer>{title}</footer>;


}

