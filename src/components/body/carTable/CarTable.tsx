import React from 'react';

type PropsType = {
    carTable: Array<CarTableType>
}

type CarTableType = {
    manufacturer: string
    model: string
}

export const CarTable = (props: PropsType) => {
    const {carTable} = props
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Manufacturer</th>
                    <th>Model</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    {carTable.map((el, idx) => {
                        return <td key={idx}>{el.manufacturer}{el.model}</td>
                    })}
                </tr>
                </tbody>
            </table>
        </div>
    )
}

