import React from 'react';
const About = () => {
    return (
        <div>
            <section className=' grid lg:grid-cols-4 grid-rows-4 lg:gap-6 gap-3 pt-20 text-start about h-auto lg:h-[120vh] max-w-7xl mx-auto'>
                    <h1 className='text-gra lg:text-8xl text-6xl '>
                        LES SOUHAITES Da<span className="text-org">w</span>ya Nature
                    </h1>
                    <div className='relative'>
                        <img className='absolute w-full object-cover top-0 left-0 h-full' src="img/3.jpg" alt="" />
                    </div>
                    <div className='relative'>
                        <img className='absolute w-full object-cover top-0 left-0 h-full' src="img/8.jpg" alt="" />
                    </div>
                    <div className='relative'>
                        <img className='absolute w-full object-cover top-0 left-0 h-full' src="img/18.jpg" alt="" />
                    </div>
                    <div className='relative'>
                        <img className='absolute w-full object-cover top-0 left-0 h-full' src="img/12.jpg" alt="" />
                    </div>
                    <p className="z-10 text-gra  text-xl flex justify-start items-center">
                    Dawya Nature organiser des activités exclusivement outdoor en pleine nature, des micro aventures
                    avec retour vers le local et la tradition, en quête de bien-être et revitalisation des sens pour 
                    tous les publics : en couple, en famille ou entre amis… <br />
                    Adultes, Ados et Enfants pour une immersion totale dans la nature 
                    </p>
            </section>

            <div className='relative about2 h-screen max-h-screen flex flex-col justify-center items-center max-w-7xl mx-auto '>
                    <img className='absolute h-[60vh] z-0' src="img/5.jpg" alt="" />
                    <h2 className='text-white text-4xl lg:text-8xl z-10'>LA DECOUVERTE</h2>
                    <p className='z-10 absolute lg:bottom-[10vh] bottom-0 w-fit text-xl text-gra'>
                        Pays et traditions Jbala
                        Randonnées artistiques, Création land art <br />
                        Rencontres avec les habitants, Nuits de pleine lune= Activités culturelles
                    </p>
            </div>

            <div className='relative about2 h-screen max-h-screen flex flex-col justify-center items-center max-w-7xl mx-auto '>
                    <img className='absolute h-[60vh] z-0' src="img/2.jpg" alt="" />
                    <h2 className='text-white lg:text-8xl text-4xl z-10'>LA CONNAISSANCE</h2>
                    <p className='z-10 absolute lg:bottom-[10vh] bottom-0 w-fit text-xl text-gra'>
                    Observation de étoiles (Astronomie), des plantes (Botanique), 
                    <br /> de la faune ou des paysages (Photographie) = Valorisation du patrimoine naturel 
                    </p>
            </div>


            <div className='relative about2 h-screen max-h-screen flex flex-col justify-center items-center max-w-7xl mx-auto '>
                    <img className='absolute h-[60vh] z-0' src="img/17.jpg" alt="" />
                    <h2 className='text-white lg:text-8xl text-4xl z-10'>LA CONTEMPLATION</h2>
                    <p className='z-10 absolute lg:bottom-[10vh] bottom-0 w-fit text-xl text-gra'>
                    Promenade douce, Yoga, Relaxation et Méditation Gym douce, Photographie,
                    <br /> Nuits de pleine lune Balade en âne = Respect de l’environnement  
                    </p>
            </div>


            <section className='grid md:grid-cols-2 text-center gap-3 lg:gap-0 justify-center md:h-screen max-w-7xl mx-auto'>
                <h2 className='text-4xl md:text-6xl lg:col-span-2 text-start font-bold text-gra my-10 md:my-0'>LES BROCHURES</h2>
                <div className='relative col-span-1'>
                    <img className='w-[70%] mx-auto' src="img/fl1.jpg" alt="" />
                </div>
                <div className='relative col-span-1'>
                    <img className='w-[70%] mx-auto' src="img/fl2.jpg" alt="" />
                </div>
            </section>
        </div>
    );
}

export default About;
