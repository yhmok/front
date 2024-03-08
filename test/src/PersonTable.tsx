import React from 'react';
import './PersonTable.css';

export type Person = {
    id : number,
    name: string,
    age: number
};

export type PersonTableProps = {
    persons: Person[]
}

function PersonTable(props: PersonTableProps) {
  let trlist = props.persons.map(person =>
        <tr key={ person.id }><td>{ person.name }</td><td>{ person.age }</td></tr>);
  return (
    <table className="PersonTable">
        <tbody>
            <tr><td>이름</td><td>나이</td></tr>
            { trlist }
        </tbody>
    </table>
  );
}

 

export default PersonTable;