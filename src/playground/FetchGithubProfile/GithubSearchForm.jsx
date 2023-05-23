import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const GithubSearchForm = ({ getItem }) => {
  const [usernameForm, setUsernameForm] = useState('')

  const handleChangeInput = (e) => {
    setUsernameForm(e.target.value)
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()
    getItem(usernameForm)
    setUsernameForm('')
  }

  return (
    <>
      <form className="git-form" onSubmit={handleSubmitForm}>
        <div className="git-flex">
          <div className="git-label">
            <label htmlFor="username">Username: </label>
          </div>
          <div>
            <input
              className="git-input"
              type="text"
              name="username"
              id="username"
              value={usernameForm}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <button type="submit" className="git-button">
              Search
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default GithubSearchForm
