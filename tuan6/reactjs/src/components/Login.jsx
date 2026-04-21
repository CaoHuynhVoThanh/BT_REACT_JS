import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { userAtom } from '../atoms/userAtom';

function Login() {
  const [user, setUser] = useRecoilState(userAtom);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    setUser({ username });
  };
  return (
    <div>
      <h2>Login</h2>
      {user?(<p>Welcome, {user.username}</p>):(
        <>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
}

export default Login;