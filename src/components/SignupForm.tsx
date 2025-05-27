import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Signupform() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:3939/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, username, password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      localStorage.setItem('auth_token', data.token);
      console.log(data);
      // Redirect to home page
      navigate("/home"); 
    } catch (error) {
      setError('Failed to sign up. Please try again.');
    }
  }

  return (
    <div className="row justify-content-center align-items-center vh-100">
      <div className='flex-column col-md-6 mx-auto'>
        <img src="/logo.png" height="300px;" width="300px;" alt="Moneymaze logo" className="mb-4" />
      </div>
      <div className='flex-column col-md-6 mx-auto'>
        <div className='w-50 mx-auto mb-4'>
          <h1 className="text-2xl font-bold mb-4">Signup</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className='form-group'>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control mb-2"
                name="email"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
              />
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control mb-2"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control mb-2"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Signup
            </button>
            {error && <div className="text-danger mt-2">{error}</div>}
          </form>
        </div>
      </div>
    </div>
    )
};