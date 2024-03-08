import React, { ChangeEvent, useState } from 'react'
import type * as types from './types'

type Props = {
  addTodo : types.AddTodoFunc
}
function TodoInput({ addTodo }: Props) {
  const [title, setTitle] = useState<string>('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const onClick = () => { addTodo(title); setTitle(''); }
  return (
    <div>
      <input type='text' value={title} onChange={onChange} />
      <button onClick={onClick}>추가</button>
    </div>
  )
}
export default TodoInput

// 새 할일이 입력되고 저장 버튼이 클릭되면, 이 이벤트가 컨테이너 컴포넌트에게 보고되어야 한다.
//    그 보고를 하기 위한 함수가 TodoInput 컴포넌트에 전달되어야 한다.
//    addTodo props 값이 바로 그 함수이다.

