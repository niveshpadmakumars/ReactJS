/* // App.js

import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import UserTable from './UserTable';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const handleRegistration = (newUser) => {
    if (editingUser) {
      // If editing an existing user, update the user data
      const updatedUsers = users.map((user) => (user === editingUser ? newUser : user));
      setUsers(updatedUsers);
      setEditingUser(null);
    } else {
      // If registering a new user, add it to the users list
      setUsers([...users, newUser]);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleDelete = (user) => {
    setUsers(users.filter((u) => u !== user));
  };

  return (
    <div>
      <h1>User Registration</h1>
      <RegistrationForm onSubmit={handleRegistration} userToEdit={editingUser} />
      <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App; */

// App.js

/* import React from 'react';
import { UserProvider } from './UserContext';
import RegistrationForm from './RegistrationForm';
import UserTable from './UserTable';

const App = () => {
  return (
    <UserProvider>
      <div>
        <h1>User Registration</h1>
        <RegistrationForm />
        <UserTable />
      </div>
    </UserProvider>
  );
};

export default App; */

// App.js

/* import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './UserContext';
import Page1 from './Page1';
import Page2 from './Page2';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App; */

// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './UserContext';
import HomePage from './HomePage';
import PropsPage from './PropsPage';
import ContextPage from './ContextPage';


const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form-props/form-context" element={<ContextPage />} />
          <Route path="/form-props" element={<PropsPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;