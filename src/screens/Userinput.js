import React, { useState } from 'react'
import './Userinput.css'

function Userinput() {


  const [user, setUser] = useState({
    name: '',
    dob: '',
    number: ''
  })

  const data = JSON.parse(localStorage.getItem('user'))


  const handleChange = (e) => {


    const { name, value } = e.target

    setUser({ ...user, [name]: value })

  }

  const handleSubmit = (e) => {

    e.preventDefault()

    window.localStorage.setItem('user', JSON.stringify(user));

    if (data.name === user.name && data.dob === user.dob && data.number === user.number) {

      alert('user already exist')

      window.location.assign('/')

    } else {

      alert('user saved')

      window.location.assign('/')

    }

  }

  return (
    <div className='Userinput'>
      <div className="container">
        <div className="header">
          <h3>User Details</h3>
        </div>
        <div className="input">
          <label htmlFor="">Name</label>
          <input type="text" name='name' onChange={handleChange} />

        </div>
        <div className="input">

          <label htmlFor="">DOB</label>
          <input type="date" name='dob' onChange={handleChange} />

        </div>
        <div className="input">

          <label htmlFor="">Number</label>
          <input type="text" name='number' onChange={handleChange} />

        </div>
        <div className="button">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Userinput