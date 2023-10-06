import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const showMobile= (event) => {
        const mobile_nav=document.querySelector('.mobile_nav')
        event.target.style.display="none"
        mobile_nav.classList.remove('hidden')
        document.querySelector('.mobile_nav_closer').classList.remove('hidden')
        mobile_nav.classList.add('grid')
        const links=document.querySelectorAll('.-translate-x-20')
        for(var el of links){
            el.classList.add('animated')
            el.classList.remove('-translate-x-20')
        }
    }

    const closeMobile= (event) => {
        
        const mobile_nav=document.querySelector('.mobile_nav')
        document.querySelector('.mobile_nav_closer').classList.add('hidden')
        mobile_nav.classList.add('hidden')
        document.querySelector('.mobile_nav_shower').style.display="block"
        mobile_nav.classList.remove('grid')
    }

    const closeMobile2= () => {
        const mobile_nav=document.querySelector('.mobile_nav')
        document.querySelector('.mobile_nav_closer').classList.add('hidden')
        mobile_nav.classList.add('hidden')
        document.querySelector('.mobile_nav_shower').style.display="block"
        mobile_nav.classList.remove('grid')
    }
    return (
            <nav className=" w-full md:py-3 absolute z-50">
            <div className="hidden md:flex max-w-7xl mx-auto  justify-between text-org px-3">
                <Link to="/" className="logo url">
                    <img className="w-32" src="img/dawya.png" alt="dawya logo"/>
                </Link>
                    <div className="flex gap-5 items-center">
                        <Link to="about">A propos</Link>
                        <Link to="contact">Contact</Link>
                        <Link to="boujmil">Boujmil</Link>
                        <Link to="activities">Activités</Link>
                    </div>
                    <Link to="reserv" className="bg-org py-2 px-6 rounded-md text-white m-0">Reserver</Link>
            </div>
            <div className="md:hidden max-w-7xl mx-auto absolute flex justify-between text-org px-3 w-full">
                <Link to="/" className="logo">
                    <img className="w-32" src="img/dawya.png" alt="dawya logo"/>
                </Link>
                <svg className='menu mobile_nav_shower' onClick={(e)=>{showMobile(e)}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

                <svg className='hidden menu z-50 mobile_nav_closer' onClick={(e)=>{closeMobile(e)}} viewBox="0 0 24 24" width="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F"></path> </g></svg>
            </div>
            <div className='mobile_nav fixed t-0 l-0 w-full h-screen hidden justify-center gap-0 items-center bg-white'>
                    <div className='grid gap-20 grid-cols-1 m_n_c'>
                        <Link onClick={closeMobile2} className='-translate-x-20 text-2xl transition-all duration-300 ease-in-out hover:text-org' to="about">A propos</Link>
                        <Link onClick={closeMobile2} className='-translate-x-20 text-2xl transition-all duration-300 ease-in-out hover:text-org' to="contact">Contact</Link>
                        <Link onClick={closeMobile2} className='-translate-x-20 text-2xl transition-all duration-300 ease-in-out hover:text-org' to="boujmil">Boujmil</Link>
                        <Link onClick={closeMobile2} className='-translate-x-20 text-2xl transition-all duration-300 ease-in-out hover:text-org' to="activities">Activités</Link>
                    </div>
            </div>
            </nav>
    );
}

export default Header;
