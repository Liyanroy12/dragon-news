import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavber from '../components/layout-component/LeftNavber';
import RightNav from './RightNav';
import { Outlet } from 'react-router-dom';

const HomeLayouts = () => {
    return (
        <div className='font-Poppins'>
            {/* Header */}
            <Header />
            <section className='w-11/12 mx-auto'>
                <LatestNews />
            </section>
            {/* navbar */}
            <nav className='w-11/12 mx-auto py-2'>
                <Navbar />
            </nav>
            {/* main */}
            <main className='w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3'>
                <aside className='left col-span-3'><LeftNavber/></aside>
                <section className='col-span-6'><Outlet/></section>
                <aside className='col-span-3'><RightNav/></aside>
            </main>
        </div>
    );
};

export default HomeLayouts;