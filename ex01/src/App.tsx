import React from 'react';

function App() {
  //로딩할때, 랜더할떄 두번 실행됨
  console.log('App() 함수 호출됨');
  return (
    <div>
      <h1>안녕하세요 리액트</h1>
      <p>welcome to my world</p>
      <p>create by mok.y.h</p>
    </div>
  );
}

export default App;
