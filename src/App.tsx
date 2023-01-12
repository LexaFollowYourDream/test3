import React, {useState} from "react";
import './App.css';
import {Car} from "./components/car";
import {Button} from "./components/Button";
import {ButtonTest} from "./components/ButtonTest";
import classes from "./components/ButtonTest.module.css";


function App() {

    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }


    const Button3Foo = () => {
        console.log('vmonn')
    }
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    let [a, setA] = useState(0);

    const OnClickHahd = () => {
        setA(++a);
        console.log(a)
    }

    return (
        <div className='stl'>
            <Car car={topCars}/>
            <Button/>
            <ButtonTest name={'What`s your name?'} callBack={() => Button1Foo("Im Vasya", 30, 'in live Minsk')}/>
            <ButtonTest name={'What`s your name?'} callBack={() => Button2Foo('Im Ivan')}/>
            <ButtonTest name={'What`s your name?'} callBack={() => Button3Foo()}/>

            <div>
                <button style={{marginLeft:'350px'}} onClick={OnClickHahd}>0</button>
            </div>
        </div>
    );
}

export default App;
