import React from 'react'

const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Content = (props) => {
    const { parts } = props;

    return (
        <div>
            {
                parts.map(item =>
                    <Part key={item.id} part={item.name} exercises={item.exercises} />)
            }
            <Total parts={parts} />
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p>{props.part} {props.exercises}</p>
        </div>
    )
}

const Total = (props) => {
    const { parts } = props;

    const total = parts.reduce((sum, part) => {
        return sum + part.exercises;
    }, 0)

    return (
        <div>
            <p><b>Total  of  {total} exercices</b></p>
        </div>
    )
}

const Course = (props) => {
    return (
        <div>
            <Header course={props.course.name} />
            <Content parts={props.course.parts} />
        </div>
    )
}

export default Course;
