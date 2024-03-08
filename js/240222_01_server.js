// 서버에서 확인
// 모듈을 추출한다.
var http = require("http");
var express = require("express"); 
// express - JavaScript로 구현하는 서버
// 라우팅은 애플리케이션 엔드 포인트(URI)의 정의, 
// 그리고 URI가 클라이언트 요청에 응답하는 방식
// 메소드 : get(), post(), put(), delete(), use()....등
var bodyParser = require("body-parser");
var mysql = require('mysql');

// 데이타베이스 연결
var client = mysql.createConnection({
    user : "root",
    password: "1234",
    database: "company"
});

// 웹서버 생성
var app = express();
app.use(express.static('public'))
app.use(express.bodyParser())

// 전체 데이타를 조회
app.get("/products", function(req, res) {
    // 쿼리실행
    var sql = "SELECT * FROM products";
    client.query(sql, function(err, data) {
        res.send(data);
    });
});

// 개별 데이타를 조회
app.get("/products/:id", function(req, res) {
    var id = req.params.id;

    // 쿼리실행
    var sql = "SELECT * FROM products where id = " + id;
    client.query(sql, function(err, data) {
        res.send(data);
    });
});

// 데이타 추가
// 크롬의 Talend로 실행해야 한다.
// 1.쿼리스트링으로 추가
app.post("/products", function(req, res) {
    var name = req.query.name;
    var modelnumber = req.query.modelnumber;
    var series = req.query.series;

    // 쿼리실행
    var sql = "INSERT INTO PRODUCTS (name, modelnumber, series)";
        sql += "VALUES ( '" + name + "' , '" + modelnumber + "' , '" + series + "')" ;
    console.log(sql)

    client.query(sql, function(err, data) {
        res.send(data);
    });
});

// 2.body로 추가
app.post("/products2", function(req, res) {
    var user = req.body;
    // var name = req.body.name;
    // var modelnumber = req.body.modelnumber;
    // var series = req.body.series;

   // 쿼리실행
   var sql = "INSERT INTO PRODUCTS (name, modelnumber, series)";
   sql += "VALUES ( '" + user.name + "' , '" + user.modelnumber + "' , '" + user.series + "')" ;
   console.log(sql)

   client.query(sql, function(err, data) {
    res.send(data);
   });
});

// 데이타 수정
app.put("/products/:id", function(req, res) {
    var id = req.params.id;

    var name = req.body.name;
    var modelnumber = req.body.modelnumber;
    var series = req.body.series;

    // 쿼리실행
    var sql = "UPDATE PRODUCTS SET";
        sql += " NAME = '" + name + "',";
        sql += " MODELNUMBER = '" + modelnumber + "',";
        sql += " SERIES = '" + series + "'";
        sql += " WHERE  id = " + id ;

    console.log(sql)

    client.query(sql, function(err, data) {
        res.send(data);
    });
});

// 데이타 삭제
app.delete("/products/:id", function(req, res) {
    var id = req.params.id;

    var name = req.body.name;
    var modelnumber = req.body.modelnumber;
    var series = req.body.series;

    // 쿼리실행
    var sql = "DELETE FROM PRODUCTS WHERE id = " + id;

    console.log(sql)

    client.query(sql, function(err, data) {
        res.send(data);
    });
});

// 웹서버 실행
http.createServer(app).listen(3000, function() {
    console.log("http://127.0.0.1:3000");
});

// 데이타 베이스 연결 확인
// 모듈추출
// var mysql = require('mysql');
// 데이타베이스 연결
// var client = mysql.createConnection({
//     user : "root",
//     password: "1234"
// });
// 쿼리실행
// client.query("use company");
// var sql = "SELECT * FROM PRODUCTS"
// client.query(sql, function(err, res) {
//     if(err) {
//         console.log("쿼리 문장에 오류.")
//     } else {
//         console.log(res);
//     }
// });

// 서버와 데이타통신이 발생할 떄 JSON데이터 형태로 주고받는다.
// 이때 해더와 본문이 전송된다.
// 쿼리스트링은 데이타를 주소표시줄에 실어서 보내는 것이고
// requestBody는 본문에 데이터를 담나서 보내는 것이다
// requestBody는 요청본문
// responseBody는 응답본문이라 한다.