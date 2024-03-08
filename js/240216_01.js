// 내장함수
// alert, prompt, confirm
// window,open()
// window.print()

// 함수를 선언 전에 호출해도 실행 가능 -> 호이스팅 되기 때문이다.
// 함수선언 -> 호이스팅(hoisting)된다
//                      => 메모리에 자동 올라간다.
//                            stack영역
//                            함수호출 -> call stack
sayHello('이순신');


function sayHello(name='원빈') { // 파라미터를 안주고 호출했을 경우 기본 파라미터
    console.log(`Hello, ${name}`);
}
// function : 함수를 정의하는 키워드
// sayHello -> 함수이름
// name -> 매개변수 또는 파라미터
// 리턴값이 undefined이다

// 함수호출
sayHello("강감찬");
// 강감찬 -> 아규먼트, 인자, 매개변수의 값

function add(a, b) {
    return a+b;
}
var c = add(5, 8);
document.write(c + '<br>')

sayHello();
sayHello('홍길순');
// 함수 오버로딩 : 함수의 재사용을 위함
// 파라미터를 안줄경우 default파라이터가 세팅됨.

// 가변파라미터의 구버젼
function sum() {
    let result = 0;
    for (let i=0; i<arguments.length; i++) {
        result += arguments[i]; 
    }
    return result;
}

document.write(sum() + " ");
document.write(sum(1, 2, 3, 5) + " ");
document.write(sum(1, 2, 5, 8, 9, 10) + " ")

// 가변파라미터의 신버젼
// 함수명이 동일한 경우 먼저 선언한 함수가 update됨
function sum(...a) {
    console.log("뒤 sun함수 호출 : " + a); //배열
    let result = 0;
    for (let i=0; i<a.length; i++) {
        result += a[i];
    }
    return result;
}

document.write(sum() + " ");
document.write(sum(1, 2, 4, 5) + " ");
document.write(sum(1, 2, 5, 8, 9, 10) + " ")

// welcome(); 

// 익명함수는 함수선언 전에 호출하면 실행되지 않는다
// 익명함수 - 함수표현식
// 차이점은 호출타이밍에 있다.
// 호이스팅 되지않는다.
let welcome=function() {
    document.write("<h2>welcome</h2>")
}
welcome();

// 화살표 함수
let mul2 = (a, b) => {
    return a+b;
}

let mul3= (a, b) => a+b;
let hello=name => `Hello, ${name}` ;
document.write(hello('안녕')+'<br>')

function userName(name) {
    document.write(name+'님 안녕하세요'+'<br>');
    //userName('이몽룔');
    // call stack -> stack overflow발생(무한반복 실행)
}
userName('홍길동');

// 재귀함수 팩토리얼 구하기
let f=(n) => {
    if(n==1) return 1; // 없으면 stack overflow발생 1: false return
    return n*f(n-1);
}    
console.log(f(5))

//var btn= document.getElementById('btn'); //-> 못찾음
// 외부함수와 내부함수
// 콜백함수 존재
window.onload = function() {
    // btn.addEventListener('click', function(){
    //     alert('클릭했습니다.');
    // });

    // callback을 매개변수로 설정
    btn.addEventListener('click', callback);

    //함수선언 -> 내부함수가 된다.
    function userLogin() {
        console.log("사용자가 로그인 했습니다.");
    }
    userLogin();

    function callback() {
        alert('callback()함수 호출....클릭했습니다.');
    }
}
// 외부에서는 내부함수 접근 못한다. -> scope영역
//userLogin(); //에러발생