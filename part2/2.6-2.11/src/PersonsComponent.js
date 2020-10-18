import React from 'react';

const Persons = (props) => {
    const persons = props.persons;
    const filterWord = props.filterWord;



    return (
        <div>
            <ul>
                {
                    persons.filter(p => p.name.toLowerCase().includes(filterWord.toLowerCase()))
                        .map(person =>
                            <li key={person.id}>
                                {person.name} <button onClick={() => props.deleteUserr(person.id)}>delete</button></li>
                    )
                }


            </ul>
        </div >
    )
}

export default Persons;
