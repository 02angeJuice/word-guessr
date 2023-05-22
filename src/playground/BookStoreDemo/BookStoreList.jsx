import React, { useState } from 'react'
import BookStoreForm from './BookStoreForm'
import { v4 as uuid } from 'uuid'
import BookStoreItem from './BookStoreItem'

const BookStoreList = () => {
  const [items, setitems] = useState([])

  console.log(items)

  const addBook = (item) => {
    setitems([...items, { ...item, _id: uuid() }])
  }

  const deleteItem = (id) => {
    confirm('Confirm Delete!!') &&
      setitems(items.filter((item) => item._id !== id))
  }

  return (
    <div>
      <div>
        <BookStoreForm addBook={addBook} />
      </div>
      <div>
        <table className={`text-blue-100 text-center`}>
          <thead>
            <tr>
              <th className="px-3">Title Book</th>
              <th className="px-3">Author</th>
              <th className="px-3">price</th>
              <th className="px-3">Quantity</th>
              <th className="px-3">Rating</th>
              <th className="px-3">Delete</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => {
              return (
                <BookStoreItem
                  key={item._id}
                  book={item}
                  deleteItem={deleteItem}
                />
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BookStoreList
