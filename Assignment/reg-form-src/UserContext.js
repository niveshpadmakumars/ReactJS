import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const updateUser = (user) => {
    const updatedUsers = users.map((u) => (u === editingUser ? user : u));
    setUsers(updatedUsers);
    setEditingUser(null);
  };

  const deleteUser = (user) => {
    setUsers(users.filter((u) => u !== user));
  };

  return (
    <UserContext.Provider
      value={{
        users,
        editingUser,
        addUser,
        updateUser,
        deleteUser,
        setEditingUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
