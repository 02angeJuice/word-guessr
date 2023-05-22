import React, { useState } from 'react'

const BlogPostList = ({ items, deleteItem, editItem }) => {
  return (
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
  )
}

const BlogPostItem = ({ item, deleteItem, editItem }) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <tr className="hover:bg-slate-200">
      <td className="border border-slate-600 px-2">{item.title}</td>
      <td className="border border-slate-600 px-2">{item.body}</td>
      <td className="border border-slate-600 px-2">{item.user}</td>
      <td className="border border-slate-600 px-2">
        <span className="cursor-pointer" onClick={() => editItem(item._id)}>
          🪄
        </span>
      </td>
      <td className="border border-slate-600">
        <span className="cursor-pointer" onClick={() => deleteItem(item._id)}>
          ❌
        </span>
      </td>
    </tr>
  )
}

export default BlogPostList
