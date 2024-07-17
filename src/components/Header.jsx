import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({changeTheme, theme}) => {
  return (
    <div className='header backdrop-blur-3xl dark:bg-[#ffffff1a] bg-[#f0f0f0]  dark:shadow-inner shadow-2xl p-3 px-5 flex rounded-2xl items-center justify-between'>
      <Link to="/" className='logo text-2xl leading-none tracking-tighter'>
       {"<S />"}
      </Link>
      <div className='menu flex gap-8'>
        <Link to="/" className='hover:scale-110 cursor-pointer'>Home</Link>
        <Link to="/resume" className='hover:scale-110 cursor-pointer'>Resume</Link>
        <Link to="/projects" className='hover:scale-110 cursor-pointer'>Projects</Link>
        <Link to="/about" className='hover:scale-110 cursor-pointer'>About</Link>
        <Link to="/contact" className='hover:scale-110 cursor-pointer'>Contact</Link>
      </div>
      <ul className='navitems flex gap-5'>
        <li>
            <a href='/'><i className="bi bi-linkedin text-lg"></i></a>
        </li>
        <li><a href='/'><i className="bi bi-github text-lg"></i></a></li>
        <li><a><i className="bi bi-twitter-x text-lg"></i></a></li>
        <li>|</li>
        <li onClick={()=>changeTheme()}>
            {
                theme === "light" ? <i className="bi bi-sun text-xl"></i> : 
                <i className="bi bi-moon-stars-fill text-xl"></i>
            }
            </li>
      </ul>
    </div>
  )
}

export default Header
