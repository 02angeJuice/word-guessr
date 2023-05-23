import React, { useState, useEffect } from 'react'
import './Github.css'
import GithubSearchForm from './GithubSearchForm'
import GithubRender from './GuthubRender'

const BASE_URL = 'https://api.github.com/users'

const FetchGithubProfile = () => {
  const [username, setUsername] = useState('')
  const [profile, setProfile] = useState({ data: null, isLoading: true })

  useEffect(() => {
    fetchUserOnChange()
  }, [username])

  const fetchUserOnChange = async () => {
    const res = await fetch(`${BASE_URL}/${username}`)
    const data = await res.json()
    setProfile({ data: data, isLoading: false })
  }

  const getItem = (item) => {
    setProfile({ data: null, isLoading: true })
    setUsername(item)
  }

  if (profile.isLoading) return <i className="git-loading">Loading...</i>

  return (
    <div>
      {/* {!profile.isLoading && <GithubRender profile={profile} />} */}
      <GithubSearchForm getItem={getItem} />
      <div className="git-content-low">
        {/* {!profile.isLoading && <b>{profile.data.login}</b>} */}
        <b>{profile.data.login}</b>
      </div>
    </div>
  )
}

export default FetchGithubProfile
