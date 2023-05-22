import React, { useState, useEffect } from 'react'

const url = 'https://jsonplaceholder.typicode.com/posts/1/comments'

const FetchAPI = () => {
  const [fetchData, setFetchData] = useState([])

  useEffect(() => {
    fetchDataAPI()
  }, [])

  const fetchDataAPI = async () => {
    const res = await fetch(url)
    const data = await res.json()
    setFetchData(data)
  }

  // const fetchDataAPI = async () => {
  //   const res = await fetch(url)
  //   const data = await res.json()
  //   return data.data
  // }

  return (
    <div>
      FetchAPI
      <ul className="text-white">
        {fetchData.map((item) => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </div>
  )
}

export default FetchAPI
