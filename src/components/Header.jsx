import React from 'react';
import logo from '../assets/logo.png';
import moment from 'moment';

const Header = () => {
    console.log(import.meta.env.VITE_a);
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-3'>
            <img className='w-[300px]' src={logo} alt="" />
            <p className='text-gray-500'>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;