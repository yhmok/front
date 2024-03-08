// 객체복제
let person1 = { name: "홍길동", age: 16 };
let person2 = Object.assign({ }, person1);
console.log(person2);

let person3 = { ...person1 };
console.log(person3);

// 구조분해할당
// let person10 = { name: "홍길동", age: 16 };
// let { name, age } = person10;
// console.log("%s %d", name, age);

// let person10 = { name: "홍길동", age: 16, english: 90, math: 85, history: 95 };
// let { name, age, ...scores } = person10;
// console.log("%s %d", name, age);
// console.log(scores);

let name = "홍길동";
let age = 16;
let scores = { english: 90, math: 85, history: 95 }; //객체
let person10 = { name, age, scores }; //score객체를 가져옴
console.log(person10); 
 
let person20 = { name, age, ...scores }; //scores에 값을 다 가져옴
console.log(person20);

// 배열에 객체 추가하기
var persons = []
// for (let i=0; i<10; i++){
//     var inputs = {name:'홍길동', age: 16+i}
//     persons.push(inputs)
// }
for (let i=0; i<10; i++){
    var person = {}
    person['name'+i] = '홍길동' + i;
    person['age'+i] = 16 + i;
    persons.push(person)
}
console.log(persons)

// 객체 복제
let persons2 = [...persons];
console.log(persons2)

// 객체 복사..assign()
let persons3 = Object.assign({ }, persons);
console.log(persons3)
