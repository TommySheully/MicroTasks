import React, {useState} from 'react';
import './App.css';
import {ButtonUniversal} from "./comconents/Button/ButtonUniversal";
import {MoneyApp} from "./comconents/Button/Money";
import {FullInput} from "./comconents/Inrut/FullInput";
import {Button} from "./comconents/Inrut/UniversalButton/Button";
import Input from "./comconents/Inrut/UniversalButton/Input";

function App() {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    let [Message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ])

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...Message])
    }

    let [title, setTitle] = useState("")

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle("")
    }

    return (
        <div>
            {/*           <div>
            <ButtonUniversal name={"My1"} callBack={() => MySubscriber1("I am Ivan", 21)}/>
            <ButtonUniversal name={"My2"} callBack={() => MySubscriber1("I am Ivan", 1223)}/>

            </div>

            <div><MoneyApp money={money}/></div>
            <div>
                <FullInput addMessage={addMessage}/>
                {Message.map((el, index) => {
                    return (
                        <div key={index}>{el.message}</div>
                    )
                })}
            </div>*/}
            <div>
<Input title={title} setTitle={setTitle}/>
                <Button name={"+"} callBack={callBackButtonHandler}/>

                {Message.map((el, index) => {
                    return (
                        <div key={index}>{el.message}</div>
                    )
                })}
            </div>
        </div>
    );
}

export default App;
