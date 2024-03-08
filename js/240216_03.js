function outer() {
    console.log("outer함수 호출됨")

    function inner() {
        console.log("inner함수 호출됨")
    }
    return inner;
}

//()소괄호 하나 더 붙여주면 내부함수가 호출된다.
outer()(); 
var inner=outer();
//다이렉트로 함수호출
inner();

// ex1
// var i=0; //전역변수
// function out() {
//     console.log("외부 i= " + i);
//     i++;
//     return function inner() {
//         console.log("내부 i= " + i);
//         ++i;
//     }
// }
// // out();
// // out();
// // out();
// // out()();
// var inner=out();

var i=0; //전역변수
function out() {
    var i=0; //지역변수s
    console.log("외부 i= " + i);
    i++;
    return function inner() {
        console.log("내부 i= " + i);
        ++i;
    }
}
// 계속 0,1 출력
// out()();
// out()();
// out()();

var inner=out();
inner()
inner()
inner()

// 내부에 지역변수에 접근해서 변수값을 변경할 수 있다.
// 클로저(종결자) - 무법자 closer

// 객체를 생성하는 방법
// 1.literal
// 2.생성자함수
// 3.객체를 리턴하는 함수 

//1.literal
var 고양이={ } //빈 객체를 생성한 다음에 속성을 추가한다.
    고양이.이름 = "야옹이"
    고양이.나이 = 2
    고양이.먹다 = function(food) {
        return this.이름+"가 " + food + "을 먹고 응가를 싸다."
            // 고양이.이름
    }
// 먹다 -> 메소드(method0)
// 이름 -> 속성(property)

console.log(고양이)

// 객체를 읽기
for(let i in 고양이){
    if(i!="먹다")
    console.log(i + " : " + 고양이[i]);
}
// i -> key, 고양이[i] -> value

console.log(고양이.먹다("생선"))

var hero = {
    name:'아이언맨',
    age: 30,
    // 일반함수
    // skill: function() {
    //     console.log(this.name+'은 날을 수 있다.')
    // }

    // 화살표 함수
    // 자신만의 this를 가지지 않으므로 this인식 못함.
    skill:()=> {
        console.log(this.name+'은 날을 수 있다.')
    }
}
hero.skill();

//2.일반함수가 객체를 리턴하는 방식
function superMan(name, age) {
    return {
        //name: name, //왼쪽의 name은 key, 오늘쪽의 name은 value(매개변수의 값)가 된다.\
        //age: age        
        name, // 이름을 동일하게 할 경우 단축 속성으로 표기해도 된다.
        age 
    }
}
var hero1 = superMan("스파이더맨", 50)
console.log(hero1)
for (var key in hero1) {
    console.log(key+ " : " + hero1[key])
}

//3. 생성자 함수로 생성하기
// 첫글자가 대문자로 시작한다.
// new라는 키워드로 생성한다.
// 멤버변수가 존재한다. this키워드를 사용한다.
function Hero(name, age) {
    this.name = name,
    this.age = age
}
var hero2 = new Hero('캡틴아메리카', 20)
console.log(hero2)

// 객체에 속성을 추가, 삭제
// 단축 프로퍼티 사용하기 - 계산된 속성 computed property

hero2.gender='남자'
hero2['skill']='방패' //계산된 속성
for(var key in hero2){
    console.log(key + " : " + hero2[key])
}