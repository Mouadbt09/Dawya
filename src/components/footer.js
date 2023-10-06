import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='relative bg-black text-start text-white'>
        <div className=''>
            {/* <div className='absolute -top-24  flex justify-center w-full max-w-7xl'>
                <div className="mx-auto flex h-48 justify-between gap-3 items-center max-w-7xl md:mx-auto bg-white py-10 px-5 rounded-lg text-gra">
                    <span className=''>
                        <h2 className='md:text-5xl text-3xl mb-2 font-sec'>
                            Choisissier votre activite
                        </h2>
                        <h4 className='md:text-3xl text-xl font-primary font-extrabold text-gray-600'>Reserver maintenent</h4>
                    </span>
                    <Link to="reserve" className='resv p-8 md:p-10 rounded-full bg-[#f7f3ec]'>
                        <img className='w-8 h-auto' src="img/arrow.png" alt=""/>
                    </Link>
                </div>
            </div> */}
            <div className="reserv_button mx-auto flex h-48 justify-between gap-3 items-center max-w-7xl md:mx-auto bg-white py-10 px-5 rounded-lg text-gra">
                    <span className=''>
                        <h2 className='md:text-5xl text-3xl mb-2 font-sec'>
                            Choisissier votre activite
                        </h2>
                        <h4 className='md:text-3xl text-xl font-primary font-extrabold text-gray-600'>Reserver maintenent</h4>
                    </span>
                    <Link to="reserv" className='resv p-8 md:p-10 rounded-full bg-[#f7f3ec]'>
                        <img className='w-8 h-auto' src="img/arrow.png" alt=""/>
                    </Link>
            </div>
            <div className="grid reserv_footer max-w-7xl mx-auto grid-cols-12 pt-12 px-3">
               <div className="col-span-8 md:col-span-4">
                   <h4 className='text-3xl text-org uppercase'>DAWYA NATURE</h4>
                   <p>La nature a sa musique  pour qui sait l’écouter…</p>
               </div>
               <div className="col-span-4 md:col-span-4 grid grid-cols-1 gap-3">
                   <h4 className='text-3xl text-org uppercase'>Liens utiles</h4>
                        <Link to="about">A propos</Link>
                        <Link to="contact">Contact</Link>
                        <Link to="boujmil">Boujmil</Link>
                        <Link to="activities">Activités</Link>
               </div>
               <div className="col-span-12 md:col-span-4">
                    <div className=" grid grid-cols-1 gap-3 cml">
                        <h4 className='text-3xl text-org uppercase'>Contact</h4>
                        <a href="mailto:ouedkoumdawya@gmail.com">dawya@gmail.com</a>
                        <a href="callto:+2126 17 86 24 72">06 17 86 24 72</a>
                    </div>
                   <span className=' grid grid-cols-1 gap-3'>
                       <h4 className='text-3xl text-org uppercase'>Social</h4>
                       <a href="#facebook.com"> Facebook</a>
                       <a href="#instagram.com"> Instagram</a>
                   </span>
                   
               </div>
               <div className="col-span-12 text-center mb-9 grid gap-3">
                    <hr/>
                   <p>© DAWYA NATURE |<Link to="mj"> Mentions juridiques</Link></p>
               </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;
