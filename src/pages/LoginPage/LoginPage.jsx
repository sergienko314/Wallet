import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from 'redux/auth/authOperations';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'email':
        return setEmail(e.target.value);
      case 'password':
        return setPassword(e.target.value);
      default:
        return;
    }
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    const user = { email, password };
    dispatch(login(user));
    // console.log(user);
  };
  return (
    <div>
      <h1>Login page</h1>
      <form action="submit" onSubmit={handleFormSubmit}>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Log In</button>
        <Link to="/register">Register</Link>
      </form>
    </div>
  );
};

export default LoginPage;
