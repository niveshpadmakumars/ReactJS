// FormProps.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserTable from './UserTable';
import ContextForm from './ContextForm';

const ContextPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <center><h1 class='header'>Registration Form[Context]</h1></center>
      <div class="footer">
        <button onClick={() => navigate('/')}>Go To Home</button> &nbsp;&nbsp;&nbsp;
        <button onClick={() => navigate('/form-props')}>Form using Props</button>
      </div>
      <div class="content">
        <ContextForm />&nbsp;&nbsp;
        <UserTable />
      </div>

    </div>
  );
};
export default ContextPage;
