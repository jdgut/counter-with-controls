import React from 'react';
import Digits from './Digits';
import Controls from './Controls';

const Counter = (props) => {
    const digits = props.digits;
    const interval = props.intervalId;
    return (
        <>
            <div className='d-flex flex-column'>
                <Digits currentValue={digits}/>
                <Controls intervalId={interval} currentValue={digits}  />
            </div>
        </>
    )
}

export default Counter;