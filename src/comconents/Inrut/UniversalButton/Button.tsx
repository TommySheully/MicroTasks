import React from 'react';


type NameType = {
    name: string,
    callBack:()=>void
}

export const Button = (props: NameType) => {
    const OnClickHandler = () => {props.callBack()};

    return (
    <div>
        <button onClick={OnClickHandler}>{props.name}</button>
    </div>
    )
}