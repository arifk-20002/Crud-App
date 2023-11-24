import React, { useState } from 'react'

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: '', username: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }
    

    return (
        <div className='col-md-8'>
            <form
                 onSubmit={(event) => {
                    event.preventDefault()
                    if (!user.name || !user.username) return
            
                    props.addUser(user)
                    setUser(initialFormState)
                  }}
            >
                <label for="name" className="form-label">Name</label>
                <input
                    className="form-control mb-4"
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                />
                <label className="form-label">Username</label>
                <input
                    className="form-control mb-2"
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleInputChange}
                />
                <button className='btn btn-primary my-3'>Add new user</button>
            </form>
        </div>

    )
}

export default AddUserForm