//useContext Page

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserProvider } from './UserContext';
import PropsForm from './PropsForm';

const PropsPage = () => {
  const navigate = useNavigate();
  return (
    <UserProvider>
      <div>
        <center><h1 class='header'>Registration Form [Props]</h1></center>
        <div class="footer">
          <button onClick={() => navigate('/')}>Go To Home</button> &nbsp;&nbsp;&nbsp;
          <button onClick={() => navigate('/form-props/form-context')}>Form using Context</button>
        </div>
        <div class='content'>
          <PropsForm />
        </div>

      </div>
    </UserProvider>
  );
};

export default PropsPage;