import React, { useState } from 'react'

const EditUserForm = (props) => {
    const [user, setUser] = useState(props.currentUser)

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    return (
        <div className='col-md-8'>
                <form
                    onSubmit={(event) => {
                        event.preventDefault()

                        props.updateUser(user.id, user)
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
                    <label for="username" className="form-label">Username</label>
                    <input
                        className="form-control mb-4"
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleInputChange}
                    />
                    <button className='btn btn-primary '>Update user</button>
                    <button onClick={() => props.setEditing(false)} className="btn btn-outline-danger mx-2"> Cancel </button>
                </form>
        </div>

    )
}

export default EditUserForm