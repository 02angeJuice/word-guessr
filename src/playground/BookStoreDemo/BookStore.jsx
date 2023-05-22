import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import BookStoreForm from './BookStoreForm'
import BookStoreList from './BookStoreList'

const BookStore = () => {
  const [items, setitems] = useState([])

  const addBook = (item) => {
    setitems([...items, { ...item, _id: uuid() }])
  }

  const deleteBook = (id) => {
    confirm('Confirm Delete!!') &&
      setitems(items.filter((item) => item._id !== id))
  }

  return (
    <div>
      <BookStoreForm addBook={addBook} />
      <BookStoreList items={items} deleteBook={deleteBook} />
    </div>
  )
}

export default BookStore
