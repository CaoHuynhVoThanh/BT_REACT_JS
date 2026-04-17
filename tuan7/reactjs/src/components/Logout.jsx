import React from 'react';
import { useRecoilState } from 'recoil';
import { userAtom } from '../atoms/userAtom';

function Logout() {
  const [user, setUser] = useRecoilState(userAtom);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>{(
        <button onClick={handleLogout}>Logout</button>
        )}
    </div>
  );
}

export default Logout;