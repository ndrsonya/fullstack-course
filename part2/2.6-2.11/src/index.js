import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import PersonForm from './PersonForm';
import Persons from './PersonsComponent';
import Filter from './Filter';
import personService, { deleteUser } from './services/personService'


const baseUrl = 'http://localhost:3001/persons'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterWord, setFilter] = useState('');

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        console.log(response)
        setPersons(response)
      })
  }, [])

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  }

  const addPerson = (event) => {
    event.preventDefault();
    const sameName = persons.filter(person => person.name === newName);

    if (sameName.length == 0) {
      const personObject = {
        name: newName,
        //id: id + 1,
        number: newNumber
      };
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('');
          setNewNumber('');
        })
    } else {
      alert(`${newName} is already added to phonebook`)
      setNewName('');
    }

  }
  const deleteUserr = (id) => {
    console.log("BEFORE I will update")
deleteUser(id)
console.log("Now I will update")
personService.getAll().then(response => {
      setPersons(response)
    })
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterWord={filterWord} handleFilterChange={handleFilterChange} />
      <PersonForm
        addPerson={addPerson} newName={newName} newNumber={newNumber}
        handleNumberChange={handleNumberChange} handleNameChange={handleNameChange} />
      <h2>Numbers</h2>
      {
        persons.length > 0 ? <Persons persons={persons} filterWord={filterWord} deleteUserr={deleteUserr} />
          :
          <div></div>
      }

    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)