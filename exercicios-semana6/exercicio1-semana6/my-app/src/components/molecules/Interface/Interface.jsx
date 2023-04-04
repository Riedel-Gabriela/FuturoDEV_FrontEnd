import './Interface.css'
import React, { useState } from "react";
import Button from "../../atoms/Button/Button";

export default function Interface() {
    const [count, setCount] = useState(0);

    const soma = () => setCount(count + 1)
    const subtrai = () => setCount(count - 1)
    const zera = () => setCount(0)
    return (
        <>
            <div className='interface'>
                <h1>CONTADOR</h1>
                <h2>{count}</h2>
                <div className='buttons'>
                    <Button color={'purple'} title={'-'} action={subtrai} />
                    <Button color={'grey'} title={'0'} action={zera} />
                    <Button color={'purple'} title={'+'} action={soma} />
                </div>
            </div>
        </>
    )
}