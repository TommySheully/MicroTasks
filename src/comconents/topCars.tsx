import React from 'react';
import './topCars.module.css'

type InfoCars = {
    topCars: topCarsType[];
}

type topCarsType = {
    manufacturer: string;
    model: string;
}

export const InfoCars = (props: InfoCars) => {
    return (
        <div>
            {props.topCars.map((objectTopCarsArray, index) => {
                return (
                    <table>
                        <tr>
                            <th>{objectTopCarsArray.manufacturer}</th>
                        </tr>
                        <tr>
                            <td>{objectTopCarsArray.model}</td>
                        </tr>
                    </table>
                )
            })
            }
        </div>
    );
}

export default InfoCars;
