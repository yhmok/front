import { average, PI } from './math2.js'
 
console.log(average(3, 4, 5, 6));
console.log(PI);

//export default 된 것은 변수 한 개로 import 할 수 있다.
import Math from './math2.js'

console.log(Math.average(3, 4, 5, 6));
console.log(Math.PI);

const a1 = new Array(5);
a1.fill(0);

const a2 = a1.map((value, index) => index * 10);
console.log(a1, a2);

// let func2 = func1.bind(obj)
//     위와 같은 코드로 obj 객체에 bind된 func2 본문의 this는 obj 객체를 가르킨다.
// obj.func(...)
//     위와 같은 코드로 호출된 함수 본문의 this는 obj 객체를 가르킨다.
// func(...)
//     위와 같은 코드로 호출된 함수가 bind 되지도 않았다면,
//     이 함수 본문의 this는 어떤 객체를 가르키지 않는다.

// 화살표 함수
// 화살표 함수 본문의 this는, 화살표 함수 소스코드를 둘러 싸고 있는 객체를 가르킨다