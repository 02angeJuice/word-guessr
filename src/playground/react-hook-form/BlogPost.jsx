import React, { useState } from 'react'
import BlogPostForm from './BlogPostForm'
import { v4 as uuid } from 'uuid'
import BlogPostList from './BlogPostList'

const BlogPost = () => {
  const [items, setItems] = useState([])

  const addItem = (item) => {
    setItems([...items, { ...item, _id: uuid() }])
  }

  const deleteItem = (id) => {
    confirm('Confirm Delete!!') &&
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
          <BlogPostList
            items={items}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default BlogPost
