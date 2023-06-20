import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from './UserContext';


const ContextForm = () => {
  const { addUser, updateUser, editingUser, setEditingUser } = useContext(UserContext);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setAddress(editingUser.address);
      setEmail(editingUser.email);
      setPassword(editingUser.password);
      setPhone(editingUser.phone);
      setGender(editingUser.gender);
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !email || !password || !phone || !gender) {
      alert('Please fill in all fields');
      return;
    }
    const newUser = {
      name,
      address,
      email,
      password,
      phone,
      gender,
    };
    if (editingUser) {
      updateUser(newUser);
    } else {
      addUser(newUser);
    }
    setName('');
    setAddress('');
    setEmail('');
    setPassword('');
    setPhone('');
    setGender('');
    setEditingUser(null);
  };

  return (
    <center>
      <form onSubmit={handleSubmit}>
        <div>
          <label class='lbl'>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label class='lbl'>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div>
          <label class='lbl'>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label class='lbl'>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label class='lbl'>Phone Number:</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <label class='lbl'>Gender:</label>
          <label class='lbl'>
            <input type="radio" value="male" checked={gender === 'male'} onChange={() => setGender('male')} />
            Male
          </label>
          <label class='lbl'>
            <input type="radio" value="female" checked={gender === 'female'} onChange={() => setGender('female')} />
            Female
          </label>
        </div>
        <button type="submit">{editingUser ? 'Update' : 'Register'}</button>
      </form>
    </center>
  );
};

export default ContextForm;
