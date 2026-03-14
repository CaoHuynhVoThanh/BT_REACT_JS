import { useState, useEffect } from 'react'

function FetchApi(){
    const [data, setData] = useState([]);
    useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setData(data))
    }, []);
    console.log(data);
    return(
        <div>
            <ul>
              {data.map(user =>(
                  <li key={user.id}>{user.name}</li>
              ))}
            </ul>
        </div>
    );
}
export default FetchApi;