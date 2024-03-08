import React from 'react'
import type * as types from './types'
import TodoItem from './TodoItem'

// 할일 목록화면 컴포넌트
type Props = {
  todoList: types.Todo[],
  toggleTodo: types.ToogleTodoFunc
}

function TodoList({ todoList, toggleTodo }: Props) {
  const trlist = todoList.map(todo => <TodoItem todo={todo} key={todo.id}  toggleTodo={toggleTodo}/>);
  return (
    <table>
      <thead>
        <tr><td>id</td><td>할일</td><td>완료</td></tr>
      </thead>
      <tbody>
        {trlist}
      </tbody>
    </table>
  )
}
export default TodoList