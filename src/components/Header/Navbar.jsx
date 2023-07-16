import React from 'react';
import { BsXLg } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const Navbar = ({toggle,setToggle}) => {
    return (
        <nav style={{ right: toggle && "0" }} className='navbar'>
                <div className='navbar-close-icon'>
                    <BsXLg onClick={()=>setToggle(false)} className='close-icon' />
                </div>
                <ul className="navbar-links">
                    <NavLink to="/" onClick={()=>setToggle(false)} className="navbar-link">الصفحة الرئيسية</NavLink>
                    <NavLink to="/products" end onClick={()=>setToggle(false)} className="navbar-link">الإلكترونيات والموبايلات</NavLink>
                    <NavLink to="/house" onClick={()=>setToggle(false)} className="navbar-link">المنزل والمطبخ</NavLink>
                    <NavLink to="/manFashion" onClick={()=>setToggle(false)} className="navbar-link">فاشون رجالي</NavLink>
                    <NavLink to="/womenFashion" onClick={()=>setToggle(false)} className="navbar-link">فاشون حريمي</NavLink>
                    
                </ul>
            </nav>
    )
}

export default Navbar