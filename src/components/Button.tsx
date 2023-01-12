import React, {MouseEvent} from "react";
import classes from "./Button.module.css"


//const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
//   console.log('Hellow Im Dima')
//}
//const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
//    console.log('Hellow Gena')
//}
//const myThirdSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
//    console.log('Hellow Alex')
//}

const onClickHandler = (name: string) => {
    console.log(name)
}

const foo1 = () => {
    console.log(100200)
}
const foo2 = (num: number) => {
    console.log(num)
}

export const Button = () => {
    return (
        <span>
            <span className={classes.style1}>
            <button onClick={() => onClickHandler('Gena')}>Click My</button>
            <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('Alex')}>Click My</button>
            <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('Igor')}>Click My</button>
            <button onClick={foo1}>Click My</button>
            <button onClick={() => foo2(100200)}>Click My</button>
            </span>


            <span className={classes.style2}>
                <button className={classes.color}>My YouTube Chanel</button>
                <button className={classes.color}>My YouTube Chanel</button>
            </span>


        </span>
    );
}