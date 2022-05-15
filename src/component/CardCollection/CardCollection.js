import React, { useEffect, useState } from 'react'
import { product } from '../../product'
import Card from '../Card/Card'
import Search from '../Search/Search'

const CardCollection = () => {
    const [data,setData] = useState([]);
    const [query,setQuery] =useState("");
    useEffect(()=>{
        setData(product.items)
    })
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