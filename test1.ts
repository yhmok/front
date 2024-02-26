// 변수명 : 타입
let a : number;
let s : string;
let b : boolean;

a = 3;
s = "hello";
b = true;

console.log(a);
console.log(s);
console.log(b);

//number타입의 배열
const a1 : number[][] = [[1,2], [2,3], [3,4], [4,5]];
const a2 : string[] = ["one", "two", "three"];

console.log(a1);
console.log(a2);

// 함수 리턴 타입
function add(a : number, b : number) : number {
    return a + b;
}

const result : number = add(3, 4);
console.log(result);

// 객체 - 타입별칭
// 객체 타입을 선언한다.
// ? - 생략가능한 속성
type Person = { readonly name : string, age?: number, email?:string };

const p1 : Person = { name: "홍길동", age: 16 };
const p2 : Person = { name: "임꺽정", age: 19 };
const p3 : Person = { name: "홍길동"};
const p4 : Person = { name: "임꺽정", email: "abc@sss.com"};

type Person2 = { readonly name : string, age: number, email: string };
const a5 : Person2[] = [ { name: "홍길동", age: 16, email: "hong@skhu.net" },
                        { name: "임꺽정", age: 19, email: "lim@skhu.net" } ];

for (let person of a5)
    console.log(person)

//열거형
enum Color { BLACK, RED="빨강", GREEN="", BLUE="파랑", WHITE="" }

// 인덱스값 리턴
const color1 : Color = Color.RED;
const color2 : Color = Color.BLUE;

console.log(color1);
console.log(color2);

export {}