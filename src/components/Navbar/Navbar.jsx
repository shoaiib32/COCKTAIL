import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import { CiSearch } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCocktail, fetchSearchCocktail } from '../../store/cocktailSlice';

const Navbar = () => {

  

const [search,setSearch] = useState(false)


  const searchTerm = useRef();
const dispatch = useDispatch()
  const handleChange = () => {
    const searchText = searchTerm.current.value
    dispatch(fetchSearchCocktail({searchText}))
  }

  return (
    <div className='navbar'>
      <Link to="/"><h1>COCKTAIL</h1></Link>

      <div className="right-container">
        { search ?
        <input type="text" placeholder='search here' ref={searchTerm}
        onChange={handleChange}/>
         : <></>}
        <span onClick={() => setSearch((prev) => !prev)} className='search'> <CiSearch /> </span>
      <Link to="/bag"> <span> <FaCartArrowDown /></span>  </Link> 
 
      <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
