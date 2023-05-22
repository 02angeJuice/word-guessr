import React from 'react'

const StudentResult = ({ item }) => {
  const calGrade = (score) => {
    if (score < 60) {
      return 'F'
    } else if (score < 70) {
      return 'D'
    } else if (score < 80) {
      return 'C'
    } else if (score < 90) {
      return 'B'
    } else if (score < 100) {
      return 'A'
    }
  }

  return (
    <div className="text-white pt-3">
      <li>ชื่อของคุณคือ: {item.fullname}</li>
      <li>รหัสนักศึกษาของคุณคือ: {item.uid}</li>
      <li>คะแนนของคุณคือ: {item.score}</li>
      <li>เกรดของคุณคือ: {calGrade(item.score)}</li>
    </div>
  )
}

export default StudentResult
