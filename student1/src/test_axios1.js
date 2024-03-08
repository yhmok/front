import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000';
// 서버 URL 앞 부분을 미리 설정한다.
// export 키워드는 java 언어의 public 키워드와 비슷한 역할을 한다.
// export 되지 않은 함수는 그 파일 내에서만 호출할 수 있고,
// export 된 함수는 다른 파일에서도 호출할 수 있다.

export function test1() {
    axios.get('/students') // 서버의 http://localhost:3000/students URL을 get 요청한다
        .then(response => {  // 요청의 응답으로 서버가 전송한 데이터가 도착하면,
            let students = response.data; // 이 콜백 함수가 호출된다.
            console.log('test1a', students);
        })
}

export function test2() {
    axios.get('/students')
        .then(response => {
            let students = response.data;
            return students[0].id; // 이전의 then 콜백 함수의 리턴 값이
        })                       // 다음 then 콜백 함수의 파라미터로 전달된다.
        .then(id => {
            axios.get('/students/' + id)
                .then(response => {
                    let student = response.data;
                    console.log('test2b', student);
                })
        })
}

export function test3(id) {
    axios.get('/students/' + id)
        .then(response => {
            let student = response.data;
            console.log('test3c', student);
        })
        .catch(error => {    // 에러가 발생하면, catch 콜백 함수가 호출된다.
            console.log('test3d', error);
        })
}

