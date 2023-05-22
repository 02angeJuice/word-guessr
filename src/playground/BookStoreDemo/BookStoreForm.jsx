import React, { useState } from 'react'

const BookStoreForm = ({ addBook }) => {
  const [bookFormData, setBookFormData] = useState({
    title: '',
    author: '',
    price: 0,
    qty: 0,
    rating: 5,
  })
  const [bookisValid, setBookIsValid] = useState(false)

  const validate = (input) => {
    if (input.length === 0) {
      setBookIsValid(false)
    } else {
      setBookIsValid(true)
    }
    // input.length === 0 ? setBookIsValid(false) : setBookIsValid(true)
  }

  const handleChangeInput = (e) => {
    validate(e.target.value)

    setBookFormData((curr) => {
      return { ...curr, [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (bookisValid) {
      addBook(bookFormData)
      setBookFormData({
        title: '',
        author: '',
        price: 0,
        qty: 0,
        rating: 5,
      })
    }
  }

  return (
    <div className="w-full mmax-w-xs">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        action="">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title">
            Title Book
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="title"
            id="title"
            placeholder="title"
            onChange={handleChangeInput}
            value={bookFormData.title}
          />
          {!bookisValid && (
            <span className="text-red-500 text-sm"> required!</span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="author">
            Author
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="author"
            id="author"
            placeholder="author"
            onChange={handleChangeInput}
            value={bookFormData.author}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price">
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="price"
            id="price"
            placeholder="price"
            onChange={handleChangeInput}
            value={bookFormData.price}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="qty">
            Quatity
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="qty"
            id="qty"
            placeholder="qty"
            onChange={handleChangeInput}
            value={bookFormData.qty}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="rating">
            Rating
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="range"
            min="1"
            max="5"
            name="rating"
            id="rating"
            placeholder="rating"
            onChange={handleChangeInput}
            value={bookFormData.rating}
          />
        </div>

        <div className="mb-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Book
          </button>
        </div>
      </form>
    </div>
  )
}

export default BookStoreForm
