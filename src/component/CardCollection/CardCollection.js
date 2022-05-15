import React, { useEffect, useState } from 'react'
import { product } from '../../product'
import Card from '../Card/Card'
import Search from '../Search/Search'

const {REACT_APP_API_KEY} = process.env;
console.log(process.env);


const CardCollection = () => {
    const [data,setData] = useState([]);
    const [query,setQuery] =useState("");
    useEffect(()=>{
        const data = fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${REACT_APP_API_KEY}`)
        .then(res =>res.json())
        .then(res=>setData(res.items))

        // setData(product.items)
    },[])
    console.log(query,"query")
  return (
      <>
      <Search setQuery={setQuery}/>
    <div style={{display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"}}>
       {data.filter((data) =>data.snippet.title.toLowerCase().includes(query))
       .map(data=><Card data={data}/> )}
    </div>
    </>
  )
}
export default CardCollection