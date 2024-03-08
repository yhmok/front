// 웹서버 생성
// require : express 모듈에 있음
var http=require("http")
var express = require("express");

// 웹서버 생성
var app = express();
//app.use(express.static('/'))

// body에 데이타를 통째로 보내겠다.
app.use(express.bodyParser())

// 기본폴더 : public
// public폴더의 index.html화일이 기본으로 실행됨
app.use(express.static('public')) 

// app.use(function(req, res) {
//     res.send("<h1>안녕하세요</h1>")
// });

// 라우트
// 가상의 폴더를 만듬 
// http://127.0.0.1:3000/a, /b, /c로 접속했을 경우 분산시킴
app.all("/a", function(req, res) {
    res.send('<h1> A page</h1>')
})
app.all("/b", function(req, res) {
    res.send('<h1> B page</h1>')
})
app.all("/c", function(req, res) {
    res.send('<h1> B page</h1>')
})

// get방식 - 배열객체를 읽어서 화면에 출력
var users = [
    {name: "강감찬", age: 10},
    {name: "이순신", age: 50},
    {name: "유관순", age: 15},
    {name: "강호동", age: 38},
    {name: "꽃순이", age: 18},
]
app.get("/user.html", function(req, res) {
    var out = "<ol>";
    users.forEach((user)=> {
        out += '<li>' + user.name + " : " + user.age + "</li>";
    });
    out += '</ol>'
    res.send(out); //서버의 데이타를 클리이언트로 보냄
});

// get방식 - 배열객체를 읽어서 JSON형태로 화면에 출력
app.get("/user.json", function(req, res) {
    res.send(users);
});

// app.all("/parameter", function(req, res) {
//     var name = req.param("name");
//     var age = req.param("age");
//     res.send(`<h2>${name} : ${age} 살</h2>`);
// });

// app.all("/parameter/", function(req, res) {
//     var name = req.query.name;
//     var age = req.query.age;
//     res.send(`<h2>${name} : ${age} 살</h2>`);
// });

// 특정 아이디를 가지고 서브 화면을 open해야 하는 경우
app.all("/parameter/:id", function(req, res) {
    //var id = req.query.id;
    var id = req.params.id;
    res.send(`<h2>${id}</h2>`);
});

// 데이타 전체 조회
app.get("/users", function(req, res) {
    res.send(users); //서버의 데이타를 클리이언트로 보냄
});

// 개별데이터 조회(상세페이지)
app.get("/users/:id", function(req, res) {
    var id = req.params.id
    if (users[id]) {
        res.send(users[id]);
        // 1 -> 에러는 코드를 넘기고 front에서 메세지 처리한다.
    } else if(isNaN(id)) {
        res.send({error:"숫자를 입력하세요."})
        // 2
    } else {
        res.send({error:"존재하지 않는 데이타입니다."})
        // 3 alert('존재하지 않는 데이타입니다.');
    }
    res.send(users[id]); //해당하는 id만 조회
});

// 데이타 추가 -> post
// query스트링 방식
app.post("/users", function(req, res) {
    // var name = req.query.name;
    // var age = req.query.age;
    var name = req.param('name');
    var age = req.param('age');
    // var user = {
    //     name: name,
    //     age: age
    // }
    var user = {
        name,
        age
    }
    users.push(user);
    res.send({
        msg: "사용자를 추가했습니다.",
        user: user
    }); //서버의 데이타를 클리이언트로 보냄
});

// body방식
app.post("/users2", function(req, res) {
    var user = req.body;
    users.push(user);
    res.send({
        msg: "사용자를 추가했습니다.",
        user: user
    }); //서버의 데이타를 클리이언트로 보냄
});

// redirect구현하기
app.post("/users3", function(req, res) {
    var user = req.body;
    users.push(user);
    res.redirect(301, "/users")
});


// 데이타 수정
app.put("/user/:id", function(req, res) {
    var id = req.params.id;
    var name = req.query.name;
    var age = req.query.age;

    users[id].name = name;
    users[id].age = age;

    res.send({
        msg: "데이타 수정완료",
        data: users[id]
    });
});

// body로 put 요청하기
app.put("/user2/:id", function(req, res) {
    var id = req.params.id;
    var user = req.body;

    console.log(user)
    users[id].name = user.name;
    users[id].age = user.age;

    if (users[id]) {
        res.send({
            msg: "데이타 수정완료2.",
            user:  users[id]
        });
    } else {
        res.send({error:"존재하지 않는 데이타...."})
    }
});

// 데이타 삭제
app.delete("/user/:id", function(req, res) {
    var id = req.params.id;

    if (isNaN(id)) {
        error: "숫자를 입력하세요."
    } else if(users[id]) {
        res.send({
            msg: "데이타 삭제완료",
            data: users[id]
         
        });
        users.splice(id, 1); // splice(start index, 삭제할 갯수)
    } else {
        res.send({
            에러 : "없는 사용자입니다."
        });
    }
});

// 웹서버 실행
http.createServer(app).listen(3000, function() {
    console.log("http://127.0.0.1:3000");
});

// express설치
// >npm install express@3.4.7

// 라우터
//  외부에서 요청이 왔을경우 분산 처리
//  get, post, put, del, all()
// 주소표시줄에 uri를 입력하고 엔터를 치면 -> 서버에 요청(get방식으로 요청한 것이다)

// 요청 -> request객체
// 응답 -> response객체
//  요청 한번에 응답 한번만 수행한다.

// 크롬마켓
//  - json viewer
//  - post man
//  - talend API Tester

/*
 요청매개변수(파라미터)
  - 쿼리스트링(querystring)

req.params
    req.query.name
    req.param("name")

req.body
var id = req.params.id

CRUD Test
    1) 데이타 조회

>npm install body parser
body-parser : body의 form데이타를 파라미터가 아니라 덩어리로 send

*/