import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: '',
    role: 'donor',
    bloodGroup: '',
    city: '',
    state: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User registered:', formData);
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl mb-4 text-center font-bold">Register</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full p-3 mb-4 border rounded-lg" />
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="w-full p-3 mb-4 border rounded-lg" />
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="w-full p-3 mb-4 border rounded-lg" />
          <select name="role" value={formData.role} onChange={handleChange} className="w-full p-3 mb-4 border rounded-lg">
            <option value="donor">Donor</option>
            <option value="recipient">Recipient</option>
          </select>
          <input type="text" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} placeholder="Blood Group" className="w-full p-3 mb-4 border rounded-lg" />
          <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" className="w-full p-3 mb-4 border rounded-lg" />
          <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" className="w-full p-3 mb-4 border rounded-lg" />
          <button type="submit" className="w-full p-3 bg-red-600 text-white rounded-lg">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
