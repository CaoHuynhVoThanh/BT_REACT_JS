import {useState} from 'react';
function GetData(){
const [data, setData] = useState([]);
  const getDatas1 =()=>{
    fetch("https://67d267c490e0670699bd6a32.mockapi.io/users")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error(err));
  }
  return (
    <div>
      <button onClick={getDatas1}>Get Data</button>
      <ol start="0">
        {data.map(item => (
          <li key={item.id}>{item.name} - {item.email}</li>
        ))}
      </ol>
    </div>
  );
}
export default GetData;