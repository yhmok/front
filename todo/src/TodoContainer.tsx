import React, { useState } from 'react'
import type * as types from './types'
import TodoRoot from './TodoRoot';

const data : types.Todo[] = [
  {id: 1, title: '프론트엔드 과제', done: false},
  {id: 2, title: '백엔드 과제', done: true},
  {id: 3, title: '웹프 시험공부', done: false}
];

function TodoContainer() {
  const [todoList, setTodoList] = useState<types.Todo[]>(data);

  // Input의 추가버튼시 호출
  // 신규데이타를 추가
  const addTodo : types.AddTodoFunc = (title: string) => {
    const lastIndex = todoList.length - 1;
    const lastId = todoList[lastIndex].id;
    const todo = {id: lastId + 1, title: title, done: false};
    setTodoList([...todoList, todo]);
  }
  // 체크박스 체크했을 경우 호출
  // 바뀐 데이타만 변경
  const toggleTodo: types.ToogleTodoFunc = (id: number) => {
    for (let todo of todoList)
      if (todo.id === id) {
        todo.done = !todo.done;
        setTodoList([...todoList]);
        return;
      }
  }
  return <TodoRoot todoList={todoList} addTodo={addTodo} toggleTodo={toggleTodo}/>;
}
export default TodoContainer