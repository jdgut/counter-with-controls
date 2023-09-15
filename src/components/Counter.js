import React from 'react';
import Digits from './Digits';
import Controls from './Controls';

const Counter = (props) => {
    const digits = props.digits;
    const interval = props.intervalId;
    const root = props.root;
    return (
        <>
            <div className='d-flex flex-column'>
                <Digits currentValue={digits}/>
                <Controls intervalId={interval} currentValue={digits}  root={root} />
            </div>
        </>
    )
}

export default Counter;