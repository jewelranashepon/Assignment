import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';

const NavBar = () => {
  return (
    <>

    <header className="header-upper py-2">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-2">
            <h2>
              <Link to="/" className="text-white">Jewel</Link>
            </h2>
          </div>
          <div className="col-5">
            <div className="input-group">
              <input
               type="text"
               className="form-control py-2" 
               placeholder="Search here..."
               aria-label="Search your product here..." 
               aria-describedby="basic-addon2" 
              />
              <span className="input-group-text p-2" id="basic-addon2">
                <BsSearch className="fs-6"/>
              </span>
           </div>    
          </div>

          <div className="col-5">
          <div className="menu-bottom d-flex align-items-center gap-40">
              <div className="menu-links">
                <div className="d-flex align-items-center gap-30 ps-5">
                  <NavLink className="text-white" to="/">Home</NavLink>
                  {/* <NavLink className="text-white" to="/blogs">Blogs</NavLink> */}
                  <NavLink className="text-white" to="/contact">Contact</NavLink>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </header>

    
      
    </>
  )
}

export default NavBar;