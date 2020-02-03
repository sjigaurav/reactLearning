import React from 'react'
import Person from './Person'

function NameList() {

    const persons = [
        {
            id : 1,
            name : 'Gaurav',
            age : 28,
            skill : 'AEM'
        },
        {
            id : 2,
            name : 'Saurav',
            age : 29,
            skill : 'React'
        },
        {
            id : 3,
            name : 'Ankur',
            age : 32,
            skill : 'Angular'
        }
    ]
    const personList = persons.map(person => <Person key = {person.id} person={person}/>)
    return (
        <div>
            {
                personList
            }
        </div>
    )
}

export default NameList
