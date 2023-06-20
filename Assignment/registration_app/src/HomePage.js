// HomePage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <center>
      <div>
        <h1 class="HomeTitle">Home Page</h1>
        <h2 class="HomeTitle">Select your method of Registration </h2>

        {/* <Link to="/form-props">Form using Props</Link>
      <Link to="/form-context">Form using Context</Link> */}

        <div class="footer">
          <button onClick={() => navigate('/form-props')}>Form using Props</button> &nbsp;&nbsp;&nbsp;
          <button onClick={() => navigate('/form-props/form-context')}>Form using Context</button>
        </div>
      </div>
    </center>
  );
};

export default HomePage;
