import React, { useState } from 'react'

const TodoList = ({ todos, deleteTodo, editTodo = { editTodo } }) => {
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              {/* <th>Save / Edit</th> */}
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => {
              return (
                <Item
                  key={todo._id}
                  todo={todo}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                />
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

const Item = ({ todo, deleteTodo, editTodo }) => {
  const [isEditting, setIsEditting] = useState(false)
  let content

  const handleChangeEdit = (e) => {
    editTodo({
      ...todo,
      title: e.target.value,
    })
  }

  if (isEditting) {
    const handleSubmitEdit = (e) => {
      e.preventDefault()
      setIsEditting(false)
    }

    content = (
      <>
        <td>
          <form onSubmit={handleSubmitEdit}>
            <input
              className="todo-item-input"
              type="text"
              value={todo.title}
              onChange={handleChangeEdit}
            />
            <button></button>
          </form>
        </td>

        {/* <td>
          <span onClick={(e) => setIsEditting(false)}>💾</span>
        </td> */}
      </>
    )
  } else {
    content = (
      <>
        <td onClick={(e) => setIsEditting(true)}>
          <span>{todo.title}</span>
        </td>
        {/* <td>
          <span onClick={(e) => setIsEditting(true)}>🛠️</span>
        </td> */}
      </>
    )
  }

  return (
    <>
      <tr>
        {content}
        <td>
          <span onClick={(e) => deleteTodo(todo._id)}>❌</span>
        </td>
      </tr>
    </>
  )
}

export default TodoList
