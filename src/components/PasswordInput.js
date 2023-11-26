import React, { useState } from 'react';

function PasswordInput({ onPasswordEntered }) {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordSubmit = () => {
    if (password === '123') {
      onPasswordEntered();
    }
  };

  return (
    <div>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={handlePasswordSubmit}>Submit</button>
    </div>
  );
}

export default PasswordInput;
