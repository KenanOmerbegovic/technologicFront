import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/login'>Računari i oprema</Link>
              </li>
              <li>
                <Link to='/user'>Mobiteli i tableti</Link>
              </li>
              <li>
                <Link to='/vendor'>Laptopi i oprema</Link>
              </li>
              <li>
                <Link to='/track'>TV i audio</Link>
              </li>
              <li>
                <Link to='/contact'>Hlađenje i grijanje</Link>
              </li>
              <li>
                <Link to='/contact'>Foto i video</Link>
              </li>
              <li>
                <Link to='/contact'>Mali kućanski aparati</Link>
              </li>
              <li>
                <Link to='/contact'>Bijela tehnika</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
