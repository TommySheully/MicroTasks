import React from 'react';
import './App.css';
import {ButtonUniversal} from "./comconents/Button/ButtonUniversal";


function App() {

    const MySubscriber1 = (call1: string, age:number) => {
        console.log(call1, age)
    }



    return (
        <div>
{/*            <InfoCars topCars={topCars}/>
            <NewComponent students={students}/>*/}
            <ButtonUniversal name={"My1"} callBack={() => MySubscriber1("I am Ivan", 21)}/>
            <ButtonUniversal name={"My2"} callBack={() => MySubscriber1("I am Ivan", 1223)}/>
                </div>
                );
            }

                export default App;
