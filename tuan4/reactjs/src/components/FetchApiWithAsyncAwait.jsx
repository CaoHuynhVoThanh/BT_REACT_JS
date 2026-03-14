import { useState, useEffect } from "react"

function FetchApiWithAsyncAwait(){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData(){
            await fetch("https://jsonplaceholder.typicode.com/users")
                    .then(res=>res.json())
                    .then(data=>setData(data))
                    .catch(err=>{
                        isOk=false
                        return false;
                    });
            return true;
        }
        loadData()
    }, [])
    
    if (loading==true){
        
    }
    
}

export default FetchApiWithAsyncAwait