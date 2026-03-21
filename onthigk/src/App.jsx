import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [keyword, setKeyword] = useState("");
  const [category, setCata] = useState([])
  const [data, setData] = useState([])
  const [cateSelect, setCataSelected] = useState("All")
  const [dataFilted, setFilted] = useState([])

  useEffect(()=>{
    async function getData(){
      let res = await fetch("./data.json");
      let json = await res.json();
      setData(json)
      setFilted(json)
      setCata(["All", ...new Set(json.map(item=>item.category))])
    }
    getData();
  }, [])

  useEffect(()=>{
    dataFilter();
  }, [cateSelect, keyword])

  function changeCate(e){
    setCataSelected(e.target.value)
  }

  function keywordChange(e){
    setKeyword(e.target.value.toLowerCase())
  }

  function dataFilter(){
    let tmp = data.filter((item)=>{
      if (cateSelect === "All") return true;
      return item.category==cateSelect;
    })
    tmp = tmp.filter((item)=>{
      if (item.name.toLowerCase().includes(keyword)) return true
      else return false;
    })
    console.log(tmp);
    setFilted(tmp)
  }

  return (
    <div>
      <div>{console.log(cateSelect)}</div>
      <input placeholder='Search keyword...' onChange={keywordChange} value={keyword}></input>
      <select id="cate" onChange={changeCate}>
        {category.map((item)=>{
          return <option key={item} value={item}>{item}</option>
        })}
      </select>
      {dataFilted.map((item)=>{
        return <li key={item.id}>{item.name}-{item.category}-{item.price}</li>
      })}
    </div>
    )
}

export default App
