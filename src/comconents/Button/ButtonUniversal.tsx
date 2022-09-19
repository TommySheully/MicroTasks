import React from 'react';
/*import {MouseEvent} from 'react';
import App from "../../App";*/


/*const MySubscriber1 = () => {
    console.log(100200)
};

const MySubscriber2 = (name: string) => {
    console.log(name)
};

function ButtonUniversal() {
    return <div>
        <button onClick={MySubscriber1}>My Subscriber 1</button>
        <button onClick={() => MySubscriber2("100200")}>My Subscriber 1</button>
    </div>
}*/

type NameType = {
    name: string,
    callBack:()=>void
}

export const ButtonUniversal = (props: NameType) => {
    const OnClickHandler = () => {props.callBack()};
    return (
    <div>
        <button onClick={OnClickHandler}>{props.name}</button>
    </div>
    )
}