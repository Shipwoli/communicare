import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { createUser } from './UserActions'

const UserManagement = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the list of users from the API
    axios.get('/users').then(res => {
      setUsers(res.data);
    });
  }, []);

  const handleCreateUser = () => {
    const newUser = {
      username,
      email,
      password,
      role,
    };
    dispatch(createUser(newUser));
  };

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <div className="create-user">
        <h3>Create a New User</h3>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <label htmlFor="role">Role:</label>
        <select id="role" value={role} onChange={e => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button onClick={handleCreateUser}>Create User</button>
      </div>
      <div className="user-list">
        <h3>List of Users</h3>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.username} ({user.email}) - {user.role}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserManagement;
