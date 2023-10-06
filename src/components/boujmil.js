import React from 'react';

const Boujmil = () => {
    return (
        <div>
            <section className='relative  pt-20 md:h-screen max-w-7xl mx-auto'>
                <h1 className='text-6xl md:text-9xl  text-start text-gra'>VILLAGE DE BOUJMIL </h1>
                <div className='md:grid grid-cols-2 items-end'>
                    <p className='text-2xl  text-start col-span-1 text-gra'>
                        <img src="img/5.jpg" className='md:hidden block mt-16' alt="" />
                        Boujmil est un village perché dans une zone de moyenne montagne de l’arrière pays typique des 
                        montagnes Jbela. A flan de coteau et au pied d’une dorsale calcaire La zone est constituée de 4 à 5 
                        vallées ancestrales et totalement préservées. Ces espaces magnifiques, entretenues par les paysans 
                        locaux avec une vue plongeante sur Tamuda Bay le Barrage Asmir et les montagnes du RIF sont un paradis 
                        pour les randonneurs et/ou les curieux de la nature. 
                    </p>
                    <div className='col-span-1 relative hidden md:block'>
                        <img className='w-full  z-0 bottom-0 right-0 col-span-1 mx-auto' src="img/5.jpg" alt="" />
                    </div>
                </div>
            </section>

            <section className='boujmil relative md:h-screen max-w-7xl mx-auto grid justify-center items-center'>
                <h2 className='text-6xl  text-center text-gra'> ACCES AU SITE DE BOUJMIL  </h2>
                <div className='md:grid grid-cols-4 items-center text-start md:h-full'>
                    <div className='md:col-span-1 my-5 md:my-0 md:flex flex-col items-start justify-start md:h-full gap-20  md:text-end'>
                        <h3 className='text-xl text-gra'>Depuis Tanger: 2h20</h3>
                        <h3 className='text-xl text-gra'>Depuis Tétouan: 50 mn </h3>
                    </div>
                    <iframe className='w-full md:col-span-2 flex justify-center items-center' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12950.135694630488!2d-5.436822349202445!3d35.7622588163957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sma!4v1667636489923!5m2!1sfr!2sma" style={{ border:"0" }} loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="600" height="450"></iframe>    
                    <div className='md:col-span-1 my-5 md:my-0 md:flex flex-col items-end justify-end h-full gap-20 pb-20 md:text-end'>
                        <h3 className='text-xl text-gra'>Depuis Cabo Négro: 45 mn </h3>
                        <h3 className='text-xl text-gra'>Depuis Marina Smir: 37 mn</h3>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Boujmil;