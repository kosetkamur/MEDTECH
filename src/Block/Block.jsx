import React from 'react';
import Lessons from "../Lessons/Lessons";
import './Block.css'

const Block = ({weekday,lessons}) => {
    console.log(weekday,lessons)
    return (
        <div className="block">
            <div className="weekday">{weekday}</div>
            {lessons.map((lesson,index) => <Lessons name={lesson.name} time={lesson.time} classroom={lesson.classroom} index={index} key={index}/>)}
        </div>
    );
};

export default Block;