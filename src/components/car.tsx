import React from "react";
import classes from './car.module.css';

type ComponentType = {
    car: CarType[]
}
type CarType = {
    manufacturer: string
    model: string
}

export const Car = (props: ComponentType) => {
    return (
        <table className={classes.style}>

            {props.car.map((el, index) => {
                return (
                    <tbody>
                    <tr>
                        <td>{index + 1}</td>
                        <td>{el.manufacturer}</td>
                        <td>{el.model}</td>
                    </tr>
                    </tbody>
                )
            })}
        </table>
    );
}
