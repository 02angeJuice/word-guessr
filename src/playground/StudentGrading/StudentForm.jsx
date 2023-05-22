import React, { useState } from 'react'
import SudentGrading from './StudentGrading'

const StudentForm = ({ getItem }) => {
  const [studentForm, setStudentForm] = useState({
    fullname: '',
    uid: '',
    score: '',
  })
  // const [studentData, setStudentData] = useState({})

  const handleChangeInput = (e) => {
    setStudentForm((curr) => {
      return { ...curr, [e.target.name]: e.target.value }
    })
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()
    getItem(studentForm)
    setStudentForm({ fullname: '', uid: '', score: '' })
  }

  return (
    <div>
      <div className="text-center bg-gray-700 py-2 rounded-lg">
        <div>
          <h1 className="text-white text-4xl mb-4">คำนวนเกรด</h1>
        </div>
        <form className="text-white" onSubmit={handleSubmitForm}>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="fullname">
              ชื่อ - สกุล
            </label>
            <input
              className="ml-3 pl-3 text-black border border-red-300 rounded-sm"
              type="text"
              name="fullname"
              id="fullname"
              onChange={handleChangeInput}
              value={studentForm.fullname}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="uid">
              รหัสนักศึกษา
            </label>
            <input
              className="ml-3 pl-3 text-black border border-red-300 rounded-sm"
              type="text"
              name="uid"
              id="uid"
              onChange={handleChangeInput}
              value={studentForm.uid}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="score">
              ระบุคะแนนของคุณ
            </label>
            <input
              className="ml-3 pl-3 text-black border border-red-300 rounded-sm"
              type="text"
              name="score"
              id="score"
              onChange={handleChangeInput}
              value={studentForm.score}
            />
          </div>

          <div className="mb-4">
            <button className="px-4 py-2 bg-white text-black rounded-xl">
              คำนวณ
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default StudentForm
