import React from 'react';
import Table from './table';

const students = [
    {name: 'Quan', course: 'professional tomato eater', grade: 100},
    {name: 'David', course: 'V10 climber', grade: 10},
    {name: 'Jason', course: 'Too nice Jason', grade: 100}
]

export default () => {
    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
}