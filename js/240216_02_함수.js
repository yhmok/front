function hello(name) {
    console.log("hello " + name);
}
hello("홍길동");

function add(a, b) {
    if (b == undefined) b = 0;
    return a + b;
}
console.log(add(3, 4))
console.log(add(3));

function add1(a, b) {
    return a + (b || 0);
}
console.log(add1(3, 4))
console.log(add1(3));

function sum(...a) {
    let result = 0;
    for (let i = 0; i < a.length; ++i)
        result += a[i];
    return result; 
}
console.log(sum(1, 2, 3, 4));
console.log(sum(4));
console.log(sum());

function printTime(msg) {
    console.log(msg, new Date());
}
// setTimeout(printTime, 1000, "1초 후");
// setTimeout(printTime, 2000, "2초 후");
// setTimeout(printTime, 3000, "3초 후");

let i=0;
// let timer = setInterval(function() {
//     timeOut++;
//     console.log(timeOut+"초", new Date());
//     if(timeOut == 10){
//         clearInterval(timer);
//     }
// }, 1000);

//함수표현식 -> 화살표 함수
//함수를 정의하고 호출을 해야함.
let timeCount=() => {
    i++;
    let date = new Date(); //날짜 생성 객체
    console.log(i + " : ",  date.toLocaleTimeString());
    if(i == 10) {
        clearInterval(timer)
    }
}

var timer = setInterval(timeCount, 1000, "현재시간 : ");

// function timeCount(msg) {
//     i++;
//     let date = new Date();
//     console.log(msg, date.toLocaleTimeString());
//     if(i == 10) {
//         clearInterval(timer)
//     }
// }

var msg = "welcome"; //전역변수




    
