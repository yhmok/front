// let obj = {
//     count: 0,
//     startTimer: function() {
//         console.log(this.count);
//         let callback = function() { console.log(this.count++); };
//         setInterval(callback, 1000);
//     }
// }

// let obj = {
//     count: 0,
//     startTimer: function() {
//       console.log(this.count);
//       let callback = () => { console.log(this.count++); };
//       setInterval(callback, 1000)
//     }
// }
  
//obj.startTimer();

// reduce() : 배열을 순서대로 불러 각 요소에 대해 callback함수를 실행한 결과를 누적한 값
let a1 = [7, 3, 8, 6, 9, 5, 1, 4];
let max = a1.reduce((result, i) => i > result ? i : result, 0);
console.log(max);

let a = [1, 2, 3, 4, 5]; 
a.forEach(n => console.log(n)); 

let persons = [
    { name: "임꺽정", age: 18 },
    { name: "홍길동", age: 16 },
    { name: "전우치", age: 19 }
];
let person = persons.find(p => p.age == 18);
console.log(person);

// 연습문제
// 1. age내림차순으로 정렬
//    sort 메소드의 파라미터는 콜백 함수이다.
//    이 콜백 함수의 리턴 값을 기준으로 배열을 정렬한다.
//    첫째 파라미터가 더 크면 양수를, 
//    둘째 파라미터가 더 크면 음수를, 
//    두 파라미터의 값이 같으면 0을 리턴해야 한다.
persons.sort((p1, p2) => p1.age - p2.age);
console.log(persons);

// 2. age최대값 사람 찾기 - reduce메소드 사용
let maxAge = persons.reduce((result, i) => i.age > result ? i.age : result, 0);
console.log(maxAge);
