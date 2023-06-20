import React, { useState } from 'react';

const PropsForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (props.name === '') {
      alert('Please enter your name');
      return;
    }
    if (props.address === '') {
      alert('Please enter your address');
      return;
    }
    if (props.email === '') {
      alert('Please enter your email');
      return;
    }
    if (props.password === '') {
      alert('Please enter your password');
      return;
    }
    if (props.phoneNumber === '') {
      alert('Please enter your phone number');
      return;
    }
    if (props.gender === '') {
      alert('Please select your gender');
      return;
    }

    props.onRegistrationSubmit();
  };

  return (
    <center>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name : </label>
          <input type="text" value={props.name} onChange={props.handleNameChange} />
        </div>
        <div>
          <label>Address : </label>
          <input type="text" value={props.address} onChange={props.handleAddressChange} />
        </div>
        <div>
          <label>Email : </label>
          <input type="email" value={props.email} onChange={props.handleEmailChange} />
        </div>
        <div>
          <label>Password : </label>
          <input type="password" value={props.password} onChange={props.handlePasswordChange} />
        </div>
        <div>
          <label>Phone Number : </label>
          <input type="tel" value={props.phoneNumber} onChange={props.handlePhoneNumberChange} />
        </div>
        <div>
          <label>Gender : </label>
          <label>
            <input type="radio" value="male" checked={props.gender === 'male'} onChange={props.handleGenderChange} />
            Male
          </label>
          <label>
            <input type="radio" value="female" checked={props.gender === 'female'} onChange={props.handleGenderChange} />
            Female
          </label>
        </div>
        <button type="submit">{props.editingIndex !== -1 ? 'Update' : 'Register'}</button>
      </form>
    </center>
  );
};

const Table = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Email</th>
          <th>Password</th>
          <th>Phone Number</th>
          <th>Gender</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.registrations.map((registration, index) => (
          <tr key={index}>
            <td>{registration.name}</td>
            <td>{registration.address}</td>
            <td>{registration.email}</td>
            <td>{registration.password}</td>
            <td>{registration.phoneNumber}</td>
            <td>{registration.gender}</td>
            <td>
              <button onClick={() => props.onEdit(index)}>Edit</button> &nbsp;&nbsp;&nbsp;
              <button onClick={() => props.onDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);
  const [registrations, setRegistrations] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleRegistrationSubmit = () => {
    if (editingIndex !== -1) {
      // Updating existing data
      const updatedRegistrations = [...registrations];
      updatedRegistrations[editingIndex] = {
        name,
        address,
        email,
        password,
        phoneNumber,
        gender
      };
      setRegistrations(updatedRegistrations);
      setEditingIndex(-1);
    } else {
      // Add new registration
      const newRegistration = {
        name,
        address,
        email,
        password,
        phoneNumber,
        gender
      };
      setRegistrations([...registrations, newRegistration]);
    }

    // clearing fields
    setName('');
    setAddress('');
    setEmail('');
    setPassword('');
    setPhoneNumber('');
    setGender('');
  };

  const handleEdit = (index) => {
    const selectedRegistration = registrations[index];
    setName(selectedRegistration.name);
    setAddress(selectedRegistration.address);
    setEmail(selectedRegistration.email);
    setPassword(selectedRegistration.password);
    setPhoneNumber(selectedRegistration.phoneNumber);
    setGender(selectedRegistration.gender);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedRegistrations = [...registrations];
    updatedRegistrations.splice(index, 1);
    setRegistrations(updatedRegistrations);
  };

  return (
    <center>
      <div>
        <PropsForm
          name={name}
          address={address}
          email={email}
          password={password}
          phoneNumber={phoneNumber}
          gender={gender}
          editingIndex={editingIndex}
          handleNameChange={handleNameChange}
          handleAddressChange={handleAddressChange}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          handlePhoneNumberChange={handlePhoneNumberChange}
          handleGenderChange={handleGenderChange}
          onRegistrationSubmit={handleRegistrationSubmit}
        />
        <h2>Registered Users</h2>
        <Table registrations={registrations} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </center>

  );
};

export default RegistrationForm;