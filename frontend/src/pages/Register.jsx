import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/register', formData);
      loginUser(response.data.user, response.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Error executing initialization workflow');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Account Enrollment Gateway</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleFormSubmission}>
        <input style={{ display: 'block', margin: '10px 0', width: '100%' }} type="text" placeholder="Name" onChange={e => setFormData({...formData, name: e.target.value})} required />
        <input style={{ display: 'block', margin: '10px 0', width: '100%' }} type="email" placeholder="Email Address" onChange={e => setFormData({...formData, email: e.target.value})} required />
        <input style={{ display: 'block', margin: '10px 0', width: '100%' }} type="password" placeholder="Password Structure" onChange={e => setFormData({...formData, password: e.target.value})} required />
        <button type="submit">Complete Authorization Generation</button>
      </form>
      <p>Already configured? <Link to="/login">Proceed to Session Access</Link></p>
    </div>
  );
}

export default Register;