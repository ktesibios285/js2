import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Robert', 'Dan', 'Tina', 'Dan']
    const persons = [
        {
            id: 1,
            name: 'Robert',
            age: 24,
            skill: 'React'
        }, 
        {
            id: 2,
            name: 'Dan',
            age: 24,
            skill: 'Angular'
        }, 
        {
            id: 3,
            name: 'Tina',
            age: 24,
            skill: 'Vue'
        }
    ]
    const nameList = names.map((name, index) => <h2 key={name}>{index} {name}</h2>)
    return <div>{nameList}</div>

    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Robert',
    //         age: 24,
    //         skill: 'React'
    //     }, 
    //     {
    //         id: 2,
    //         name: 'Dan',
    //         age: 24,
    //         skill: 'Angular'
    //     }, 
    //     {
    //         id: 3,
    //         name: 'Tina',
    //         age: 24,
    //         skill: 'Vue'
    //     }
    // ]
    // const personList = persons.map(person => <Person key={person.id} person={person} />)
    // return <div>{personList}</div>

    // const names = ['Robert', 'Dan', 'Tina']
    // const nameList = names.map(name => <h2>{name}</h2>)
    // return (<div>{nameList}</div>)
      
    // <div>
    //   <h2>{names[0]}</h2>
    //   <h2>{names[1]}</h2>
    //   <h2>{names[2]}</h2> 
    // </div>
}

export default NameList
