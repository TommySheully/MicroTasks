import React, {useState} from 'react';
import money from "../../App";

type MoneyArrType = {
    banknots: string,
    value: number,
    number: string,
}

type money = {
    money: Array<MoneyArrType>
};


type FilterType = "All" | "RUBLS" | "Dollars";

export const MoneyApp = (props: money) => {

    let [filters, SetFilters] = useState<FilterType>("All");
    let currentMoney = props.money;


        if (filters==='RUBLS') {
            currentMoney = props.money.filter((filterMoney) => filterMoney.banknots === "RUBLS");
        }
        if (filters==='Dollars') {
            currentMoney = props.money.filter((filterMoney)=>filterMoney.banknots === "Dollars");
    }

    let filtersHandler = (nameButton: FilterType) => {
        SetFilters(nameButton);
    }

    return (
        <div>
            <>{currentMoney.map((ObjMoneyArr: MoneyArrType, index: number) => {
                return (
                    <li key={index}>
                        <span>{ObjMoneyArr.banknots}</span>
                        <span>{ObjMoneyArr.value}</span>
                        <span>{ObjMoneyArr.number}</span>
                    </li>
                );
            })
            }
            </>
            <>
                <button onClick={() => filtersHandler("All")}>all</button>
                <button onClick={() => filtersHandler("Dollars")}>Dol</button>
                <button onClick={() => filtersHandler("RUBLS")}>Rubl</button>
            </>
        </div>
    );
}