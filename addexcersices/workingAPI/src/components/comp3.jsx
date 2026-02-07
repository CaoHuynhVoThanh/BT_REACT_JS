import axios from "axios";
import { useState } from "react";

function AxiosDeleteUser() {
  const [userId, setUserId]=useState("");
  const [loading, setLoading]=useState(false);

  const handleDelete=async ()=>{
    if (!userId) {
      alert("Vui lòng nhập ID user");
      return;
    }
    const confirm=window.confirm("Bạn chắc chắn muốn xoá user này?");
    if (!confirm) return;

    try {
      setLoading(true);
      await axios.delete(
        `https://67d267c490e0670699bd6a32.mockapi.io/users/${userId}`
      );

      alert("Xoá user thành công");
      setUserId("");
    } catch (error) {
      console.error("Lỗi khi xoá user:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Xóa user dùng Axios + Async/Await</h3>
      <input
        type="number"
        placeholder="Nhập ID user"
        value={userId}
        onChange={(e)=>setUserId(e.target.value)}
      />
      <button onClick={handleDelete} disabled={loading}>
        {loading?"Đang xoá...":"Xoá user"}
      </button>
    </div>
  );
}

export default AxiosDeleteUser;
