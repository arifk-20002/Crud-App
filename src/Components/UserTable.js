import React from 'react'

const UserTable = (props) => (
    <table className="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.users.length > 0 ? (
                props.users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td><button onClick={() => {props.editRow(user) }} className='btn btn-primary btn-sm mx-3'>Edit</button>
                        <button onClick={() => props.deleteUser(user.id)} className='btn btn-danger btn-sm '>Delete</button></td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No users</td>
                </tr>
            )}



        </tbody>
    </table>
)

{/* <tbody>
{props.users.length > 0 ? (
  props.users.map((user) => (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>
        <button className="button muted-button">Edit</button>
        <button className="button muted-button">Delete</button>
      </td>
    </tr>
  ))
) : (
  <tr>
    <td colSpan={3}>No users</td>
  </tr>
)}
</tbody> */}

export default UserTable