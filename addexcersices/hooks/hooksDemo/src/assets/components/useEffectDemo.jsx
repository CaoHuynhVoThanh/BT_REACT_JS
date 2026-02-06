import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers]=useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res=>res.json())
      .then(data=>setUsers(data));
  }, []); 

  return (
    <div>
        <h2>Demo useEffect lấy danh sách người dùng từ API khi component được mount</h2>
        <ul>
        {users.map(u=> <li key={u.id}>{u.name}</li>)}
        </ul>
        <p>Khi component được mount lần đầu tiên, useEffect sẽ chạy và gọi API để lấy danh sách người dùng. Khi dữ liệu được load xong, setUsers sẽ cập nhật state users và component sẽ re-render để hiển thị danh sách người dùng.</p>
        <p>Có thể mở DevTools để xem log của useEffect khi reload lại web.</p>
    </div>
  );
}
export default Users;
