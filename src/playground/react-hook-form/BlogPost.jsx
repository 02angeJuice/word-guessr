import React, { useState } from 'react'
import BlogPostForm from './BlogPostForm'
import { v4 as uuid } from 'uuid'
import BlogPostItem from './BlogPostItem'

const BlogPost = () => {
  const [items, setItems] = useState([])

  const addItem = (item) => {
    setItems([...items, { ...item, _id: uuid() }])
  }

  const deleteItem = (id) => {
    console.log(id)
    setItems(items.filter((item) => item._id !== id))
  }

  const editItem = (id) => {
    console.log('wait my knowledge soon!', id)
  }

  return (
    <div>
      <div>
        <div>
          <BlogPostForm addItem={addItem} editItem={editItem} />
        </div>
        <div>
          <table className="w-full border-collapse border border-slate-500 text-center">
            <thead>
              <tr>
                <th className="border border-slate-600">Title</th>
                <th className="border border-slate-600">Message</th>
                <th className="border border-slate-600">From User</th>
                <th className="border border-slate-600">Edit</th>
                <th className="border border-slate-600">Delete</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                return (
                  <BlogPostItem
                    key={item._id}
                    item={item}
                    deleteItem={deleteItem}
                    editItem={editItem}
                  />
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
