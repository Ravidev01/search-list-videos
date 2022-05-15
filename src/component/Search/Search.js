import React, { useState } from 'react'
import '../Search/Search.css'

const Search = ({setQuery}) => {
  return (
    <div className='search'><input placeholder='🔍Search...' onChange={(e)=>{setQuery(e.target.value)}}></input></div>
  )
}

export default Search