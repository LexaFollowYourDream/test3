import React from "react"
import classes from './ButtonTest.module.css'

type ButtonType = {
    name:string
    callBack:()=> void
}

export  const ButtonTest = (props:ButtonType) => {

    const onClickHandler = () => {
        props.callBack()
    }
    return(

        <span className={classes.style}>
            <button onClick={onClickHandler}>{props.name}</button>
        </span>
    );
}