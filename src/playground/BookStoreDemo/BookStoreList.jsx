const BookStoreList = ({ items, deleteBook }) => {
  return (
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
            return <Book key={item._id} book={item} deleteBook={deleteBook} />
          })}
        </tbody>
      </table>
    </div>
  )
}

const Book = ({ book, deleteBook }) => {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.price}</td>
      <td>{book.qty}</td>
      <td>{book.rating}</td>
      <td>
        <span
          onClick={(e) => deleteBook(e.target.id)}
          id={book._id}
          className="cursor-pointer">
          ❌
        </span>
      </td>
    </tr>
  )
}

export default BookStoreList
