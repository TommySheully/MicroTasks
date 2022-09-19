import React from 'react';
import {MouseEvent} from 'react';

const MySubscriber1 = () => {
    console.log(100200)
};

const MySubscriber2 = (name: string) => {
    console.log(name)
};

function Button() {
    return <div>
        <button onClick={MySubscriber1}>My Subscriber 1</button>
        <button onClick={() => MySubscriber2("100200")}>My Subscriber 1</button>
    </div>
}


export default Button;
