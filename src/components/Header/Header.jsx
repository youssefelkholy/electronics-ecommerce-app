import { useState } from 'react';
import MiddleHeader from './MiddleHeader';
import Navbar from './Navbar';
import TopHeader from './TopHeader';
import "./header.css";

const Header = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <header className='header'>
            <TopHeader setToggle={setToggle} />
            <MiddleHeader />
            <Navbar toggle={toggle} setToggle={setToggle} />
        </header>
    )
}

export default Header