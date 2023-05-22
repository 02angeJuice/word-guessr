import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuid } from 'uuid'

const BlogPostForm = ({ addItem, editItem }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [postForm, setPostForm] = useState({
    title: '',
    body: '',
    user: '',
  })

  const registerOptions = {
    title: { required: 'Title cannot be blank' },
    body: { required: 'Please leave a message...' },
    user: { required: 'User must be required!' },
  }

  const handleChangeInput = (e) => {
    setPostForm((curr) => {
      return { ...curr, [e.target.name]: e.target.value }
    })
  }

  const handleSubmitForm = (formData) => {
    console.log(
      '🚀 ~ file: BlogPostForm.jsx:24 ~ handleSubmitForm ~ e:',
      formData
    )

    addItem(postForm)

    setPostForm({
      title: '',
      body: '',
      user: '',
    })
  }

  return (
    <div>
      <div className="w-full max-w-xs mx-auto">
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title">
              Post Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="title"
              id="title"
              placeholder="title"
              {...register('title', registerOptions.title)}
              onChange={handleChangeInput}
              value={postForm.title}
            />
            <small className="text-red-500 text-xs">
              {errors.title && errors.title.message}
            </small>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="body">
              Post Message:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="body"
              id="body"
              placeholder="message..."
              {...register('body', registerOptions.body)}
              onChange={handleChangeInput}
              value={postForm.body}>
              {/* {postForm.body} */}
            </textarea>
            <small className="text-red-500 text-xs">
              {errors.body && errors.body.message}
            </small>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="user">
              From User:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="user"
              id="user"
              placeholder="user"
              {...register('user', registerOptions.user)}
              onChange={handleChangeInput}
              value={postForm.user}
            />
            <small className="text-red-500 text-xs">
              {errors.user && errors.user.message}
            </small>
          </div>

          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Post
            </button>

            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BlogPostForm
