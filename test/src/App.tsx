import React, { useState, useEffect } from 'react';
import './App.css';
import { test1, test2} from './test_axios3';

function App() {
  const [count, setcount] = useState(0);
  const increase = () => {
    setcount(count + 1);
  };
  const decrease = () => {
    setcount(count - 1);
  };
  const [message, setMessage] = useState('hello');
  const [value, setValue] = useState(true);
  const helloTag = <div id="hello">Hello React.js</div>;
  const [color, setColor] = useState('green');
  const [gender, setGender] = useState('여자');
  const [name, setName] = useState('');
  const [학과, set학과] = useState('정보통신');

  useEffect(() => {
    test1();
    test2();
    //test3(400);
  });

  return (
    
    <div>
      <p>{count}</p>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>

      <p>{message}</p>
      <input type="text" onChange={(e) => setMessage(e.target.value)} value={message} />

      <div id="app" className={color}>
        <p>{value ? "true" : "false"}</p>
        <hr />
        <input type="checkbox" checked={value}
          onChange={(e) => setValue(e.target.checked)} />
        {value ? helloTag : null}

        <h1>select</h1>
        <select onChange={(e) => setColor(e.target.value)} value={color}>
          <option>yellow</option>
          <option>green</option>
          <option>blue</option>
          <option>red</option>
        </select>

        <p>{gender}</p>
        <hr />
        <label>
          <input type="radio" name="gender"
            onChange={(e) => setGender('남자')} checked={gender == '남자'} />
          <span>남자</span>
        </label>
        <label>
          <input type="radio" name="gender"
            onChange={(e) => setGender('여자')} checked={gender == '여자'} />
          <span>여자</span>
        </label>

        <form>
          <fieldset>
            이름 : <input type="text" id="name" onChange={(e) => setName(e.target.value)} value={name} /><br />
            학번 : <input type="text" id="number" /><br />
            학과 : <select onChange={(e) => set학과(e.target.value)} value={학과}>
              <option>정보통신</option>
              <option>통계</option>
              <option>섬유디자인</option>
              <option>AI</option>
            </select>
          </fieldset>
        </form>
        <div>
          <h3>[학생 입력 내용]</h3>
          <hr />
          <p>{name}</p>
          <p>{학과}</p>
        </div>
      </div>
    </div>
  )
}

export default App;