import React, {useState} from 'react';
import Block from "../Block/Block";
import '../App.css';


const Buttons = ({numberWeek,items,index}) => {

    const [weeks, setWeeks] = useState([]);
    const [close, setClose] = useState('close');

    const buttonClick = (num) =>{
        setClose('close active')
        return setWeeks(weeks.concat(items.week));
    }

    const closeRasp = () =>{
        setClose('close')
        return setWeeks([]);
    }
    return (
        <div className="blockWeek">
            <button onClick={()=>buttonClick({numberWeek})} id={index}>Неделя {numberWeek}</button>
            <div className="week">{weeks.map((week) => <Block weekday={week.weekday} lessons={week.lesson} />)}</div>
            <button onClick={()=>closeRasp()} className={close}>Закрыть</button>
        </div>
    );
};

export default Buttons;