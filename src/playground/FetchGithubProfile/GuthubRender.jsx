import React from 'react'

const GuthubRender = ({ profile }) => {
  return (
    <>
      <img className="git-img" src={profile.data.avatar_url} alt="" />
    </>
  )
}

export default GuthubRender
