import React, { useState } from 'react'
import './App.css';
import UserTable from './Components/UserTable';
import AddUserForm from './Components/AddUserForm';
import EditUserForm from './Components/EditUserForm';

function App() {
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]
  const [users, setUsers] = useState(usersData)

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: '', username: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const editRow = (user) => {
    setEditing(true)
  
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
  
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }

  // {editing ? (
  //   <div>
  //     <h2>Edit user</h2>
  //     <EditUserForm
  //       setEditing={setEditing}
  //       currentUser={currentUser}
  //       updateUser={updateUser}
  //     />
  //   </div>
  // ) : (
  //   <div>
  //     <h2>Add user</h2>
  //     <AddUserForm addUser={addUser} />
  //   </div>
  // )}


  return (
    <div className="container">
      <h1 className='text-center'>CRUD App with Hooks</h1>
      <div className=" d-flex flex-row my-5">
      {editing ? (
      <div className='col-md-6'>
      <h2>Edit user</h2>
       <EditUserForm
        setEditing={setEditing}
        currentUser={currentUser}
        updateUser={updateUser}
      />
    </div>):(
        <div className="col-md-6">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>)}
        <div className="col-md-6">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow}  deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
