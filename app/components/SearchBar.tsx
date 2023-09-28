"use client"

import React,{useState} from 'react'
import SearchManufacturer from './SearchManufacturer'

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('')
   const handleSearch =() => {

   }

  return (
    <form className='searchBar' onSubmit={handleSearch}>
        <div className='searchBar__items'>
            <SearchManufacturer
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
            />
        </div>
    </form>
  )
}

export default SearchBar