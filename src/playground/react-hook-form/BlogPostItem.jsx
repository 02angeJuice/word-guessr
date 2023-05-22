import React from 'react'

const BlogPostItem = ({ item, deleteItem, editItem }) => {
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

export default BlogPostItem
