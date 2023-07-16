import React from 'react';
import { BsBasket2, BsReverseListColumnsReverse, BsTelephone } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const TopHeader = ({ setToggle }) => {
    const navigate = useNavigate();
    return (
        <div className="top-header">
            <div onClick={()=>setToggle(true)} className="top-header-menu">
                <BsReverseListColumnsReverse />
            </div>
            <div onClick={()=>navigate("/")} className="top-header-logo">
                <BsBasket2 className='icon' />
                متجر إلكترونيات
            </div>
            <div className="top-header-text">
                أهلاً وسهلاً بكم
            </div>
            <div className="top-header-phone">
                123-456-789
                <BsTelephone className='phone' />
            </div>
        </div>
    )
}

export default TopHeader