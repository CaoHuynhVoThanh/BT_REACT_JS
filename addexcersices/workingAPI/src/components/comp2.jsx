import axios from "axios";
import { useState } from "react";

function AxiosAddUser() {
  const [name, setName]=useState("");
  const [loading, setLoading]=useState(false);
  const addUser=async (user)=>{
    try{
      setLoading(true);
      const res=await axios.post(
        "https://67d267c490e0670699bd6a32.mockapi.io/users",
        user
      );
      console.log("User đã được thêm:", res.data);
      setName(""); 
    } catch (error) {
      console.error("Lỗi khi thêm user:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddUser= ()=>{
    if (!name.trim()) {
      alert("Vui lòng nhập tên");
      return;
    }
    addUser({ name });
  };

  return (
    <div>
      <h3>Axios để thêm user</h3>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nhập tên user"
      />
      <button onClick={handleAddUser} disabled={loading}>
        {loading ? "Đang thêm..." : "Thêm user"}
      </button>
    </div>
  );
}

export default AxiosAddUser;
