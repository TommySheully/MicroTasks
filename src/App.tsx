import React, {useState} from 'react';
import './App.css';
import {ButtonUniversal} from "./comconents/Button/ButtonUniversal";
import {MoneyApp} from "./comconents/Button/Money";



function App() {

/*    const MySubscriber1 = (call1: string, age: number) => {
        console.log(call1, age)
    }*/

    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    return (
        <div>

{/*
            <ButtonUniversal name={"My1"} callBack={() => MySubscriber1("I am Ivan", 21)}/>
            <ButtonUniversal name={"My2"} callBack={() => MySubscriber1("I am Ivan", 1223)}/>
*/}

            <MoneyApp money={money}/>
        </div>
    );
}

export default App;
