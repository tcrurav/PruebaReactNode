import React, { useState } from "react";
import Incrementer from './Incrementer';

function Message() {

    const [total, setTotal] = useState(0);

    const incrementTotal = () => {
        setTotal(total + 1);
    }

    return ( 
        <div>
            <h1>Otro mensajito con total de {total} cambios</h1>
            <Incrementer somethingChanged={incrementTotal}/>
            <Incrementer somethingChanged={incrementTotal}/>
            <Incrementer somethingChanged={incrementTotal}/>
            <Incrementer somethingChanged={incrementTotal}/>
            <Incrementer somethingChanged={incrementTotal}/>
            <Incrementer somethingChanged={incrementTotal}/>
        </div>
    );
}

export default Message;