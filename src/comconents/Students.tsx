import React from 'react';

type NewComponentsType = {
    students: StudentsType[]
}

type StudentsType = {
    id: number,
    name: string,
    age: number
}

export const NewComponent = (props: NewComponentsType) => {
    return (
        <div>
            {props.students.map((objectTopCarsArray, index) => {
                return (
                    <li key={objectTopCarsArray.id}>
                        <span>{objectTopCarsArray.name}</span>
                        <span>{objectTopCarsArray.age}</span>
                    </li>
                )
            })
            }
        </div>
    );
}

export default NewComponent;
