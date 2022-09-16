import React, {useState} from 'react';
import Block from "../Block/Block";
import '../App.css';


const Buttons = ({numberWeek,items,index}) => {

    const [weeks, setWeeks] = useState([])

    const buttonClick = (num) =>{
        return setWeeks(weeks.concat(items.week));
    }

    const closeRasp = () =>{
        return setWeeks([]);
    }
    return (
        <div className="blockWeek">
            <button onClick={()=>buttonClick({numberWeek})} id={index}>Неделя {numberWeek}</button>
            <div className="week">{weeks.map((week) => <Block weekday={week.weekday} lessons={week.lesson} />)}</div>
            <button onClick={()=>closeRasp()}>Закрыть</button>
        </div>
    );
};

export default Buttons;