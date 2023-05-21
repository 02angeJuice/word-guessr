import React from 'react'

const BookStoreItem = ({ book, deleteItem }) => {
  const handleClickSpan = (e) => {
    // console.log(book)
    deleteItem(e.target.id)
    // console.log(e.target.id)
  }

  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.price}</td>
      <td>{book.qty}</td>
      <td>{book.rating}</td>
      <td>
        <span
          onClick={handleClickSpan}
          id={book._id}
          className="cursor-pointer">
          ❌
        </span>
      </td>
    </tr>
  )
}

export default BookStoreItem
