/* // UserTable.js

import React from 'react';

const UserTable = ({ users, onEdit, onDelete }) => {
  return (
    <center><table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Gender</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.address}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.gender}</td>
            <td>
              <button onClick={() => onEdit(user)}>Edit</button>
              <button onClick={() => onDelete(user)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table></center>
  );
};

export default UserTable; */

// UserTable.js

/* import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserTable = () => {
  const { users, deleteUser, setEditingUser } = useContext(UserContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Gender</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.address}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.gender}</td>
            <td>
              <button onClick={() => setEditingUser(user)}>Edit</button>
              <button onClick={() => deleteUser(user)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable; */

// UserTable.js

import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserTable = () => {
  const { users, deleteUser, setEditingUser } = useContext(UserContext);

  return (
    <center><div>
      <h3>Registered Users</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.address}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.gender}</td>
              <td>
                <button onClick={() => setEditingUser(user)}>Edit</button> &nbsp;&nbsp;&nbsp;
                <button onClick={() => deleteUser(user)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div></center>


  );
};

export default UserTable;

