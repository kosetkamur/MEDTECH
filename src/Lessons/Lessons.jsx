import React, {useState} from 'react';
import './Lessons.css'

const Lessons = ({name, time, classroom}) => {
    return (
        <div className='lesson'>
            <div className='lesson_time'>{time}</div>
            <div className='lesson_name'>{name}</div>
            <div className='lesson_classroom'>{classroom}</div>
        </div>
    );
};

export default Lessons;