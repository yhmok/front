import React from 'react'
import type * as types from './types'

// 할일 한개 화면 컴포넌트
type Props = {
  todo: types.Todo,
  toggleTodo: types.ToogleTodoFunc
}

function TodoItem({ todo, toggleTodo }: Props) {
  const onChange = () => toggleTodo(todo.id)
  return (
    <tr className={todo.done ? "done" : ""}>
      <td>{todo.id}</td>
      <td>
        <input type='checkbox' checked={todo.done} onChange={onChange} />
        {todo.title}
      </td>
      <td>
        {todo.done.toString()}
      </td>
    </tr>
  )
}

export default TodoItem;