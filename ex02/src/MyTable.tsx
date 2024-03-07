import React from 'react';
import './MyTable.css';

function MyTable() {
  let persons = [{ name: '홍길동', age: 16 },
                 { name: '임꺽정', age: 19 },
                 { name: '전우치', age: 20 }];
    let trlist = persons.map(person =>
       <tr><td>{ person.name }</td><td>{ person.age }</td></tr>);

    const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const map1 = array1.map((x) =>  (
            array1.map((y) => (
                    <tr><td>{x}X{y}</td><td>{x*y}</td></tr>
                )
            )           
        )
    );
    return (
        <table className="MyTable">
        <tr><td>이름</td><td>나이</td></tr>
        { trlist }
        { map1 }
        </table>
    );
}

export default MyTable;