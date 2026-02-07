import './App.css'
import GetData from './components/comp1'
import AxiosAddUser from './components/comp2'
import AxiosDeleteUser from './components/comp3'

function App() {
  return (
    <>
    <h2>Lấy danh sách người dùng sử dụng fetch</h2>
    <GetData/>
    <AxiosAddUser/>
    <AxiosDeleteUser id={1} onDeleted={() => alert('User đã được xoá!')} />
    </>
  )
}

export default App
