import React from 'react';

const Activities = () => {
    return (
        <div>
            <section className='md:h-screen h-[90vh] relative pt-20 max-w-7xl mx-auto act'>
                <i><h1 className='text-[12vw] md:text-[6vw] text-end text-gra absolute right-3 md:right-0 w-full'>                   
                    <span>DA</span><span className='text-org'>W</span><span>YA</span> <br/>
                    <span>NATURE ACTIVITES</span>
                </h1></i>
                <img className='w-1/3 shadow-xl' src="img/10P.jpg" alt="" />
                <p className='md:text-base text-xl absolute px-3 md:px-0 w-full h-full top-0 left-0 flex items-center justify-end text-gra text-end'>
                    OFFRES TOURISTIQUES UNIQUES de (RE)DECOUVERTE de la  NATURE dans l’arrière <br />
                     pays de la côte méditerranéenne
                </p>
                <div className='w-full absolute left-0 bottom-10'>
                    <div className='md:w-4/5 w-full px-3 md:px-0 flex justify-between items-end ml-auto'>
                        <img className='md:w-1/3 w-2/3 shadow-xl' src="img/11.jpg" alt="" />
                        <div className='text-center flex flex-col items-center justify-end'>
                            <span class="mouse">
                                <span class="move"></span>
                            </span>
                            Scroll Down 
                        </div>
                    </div>
                </div>
            </section>

            <section className='max-w-7xl mx-auto relative act2 container'>
                <div className='md:grid grid-cols-12 gap-10 relative md:h-[70vh] md:my-40 container'>
                    <div className='relative col-span-12 md:col-span-4 hidden md:block h-full'>
                    <img className='absolute w-full top-0 left-0 h-full object-cover' src="img/Walk with guide.jpg" alt="" />
                    </div>
                    <div className='relative flex flex-col justify-center col-span-12 md:col-span-8 pt-20 md:pt-0 text-start'>
                        <h3 className="text-lw text-[11rem] absolute left-0 z-0 top-0">01</h3>
                        <div className='md:pl-20 z-10 grid gap-3 '>
                            <h4 className='text-grn text-2xl'>—Activité</h4>
                            <h2 className='text-gra text-4xl md:text-6xl'>Randonnée douce ou dynamique</h2>
                            <img className='w-full top-0 left-0 object-cover md:hidden block' src="img/Walk with guide.jpg" alt="" />
                            <p className='text-xl'>
                                Principe : Promenade guidée avec un coach sportif ou coach mental 
                                <br /> Période d’action: 
                                Février – Novembre 
                                <br /> durée : 4 heures avec en option un déjeuner beldi 
                                <br /> Cibles: Adultes & Adolescents
                                <br /> Animateur : Coach, guides
                            </p>
                        </div>
                    </div>
                </div>

                <div className='md:grid grid-cols-12 gap-10 relative md:h-[70vh] md:my-40 container'>
                    <div className='relative flex flex-col justify-center col-span-12 md:col-span-8 pt-20 md:pt-0 text-start'>
                        <h3 className="text-lw text-[11rem] absolute left-0 z-0 top-0">02</h3>
                        <div className='md:pl-20 z-10 grid gap-3 '>
                            <h4 className='text-grn text-2xl'>—Activité</h4>
                            <h2 className='text-gra text-4xl md:text-6xl'>Randonnées Dawya</h2>
                            <img className='w-full top-0 left-0 object-cover md:hidden block' src="img/15.jpg" alt="" />
                            <p className='text-xl'>
                                Principe : Promenade guidée et commentée (histoires des lieux, géologie, faune et installations land art)  
                                <br /> Période d’action: Février – Novembre 
                                <br /> durée : 6 heures avec un déjeuner beldi 
                                <br /> Cibles: Adultes & Adolescents
                                <br /> Animateur : Coach, guides et animateurs locaux spécialisés 
                            </p>
                        </div>
                    </div>
                    <div className='relative col-span-12 md:col-span-4 hidden md:block h-full'>
                        <img className='absolute w-full top-0 left-0 h-full object-cover' src="img/15.jpg" alt="" />
                    </div>
                </div>
                
                <div className='md:grid grid-cols-12 gap-10 relative md:h-[70vh] md:my-40 container'>
                    <div className='relative col-span-12 md:col-span-4 hidden md:block h-full'>
                        <img className='absolute w-full top-0 left-0 h-full object-cover' src="img/Land art.png" alt="" />
                    </div>
                    <div className='relative flex flex-col justify-center col-span-12 md:col-span-8 pt-20 md:pt-0 text-start'>
                        <h3 className="text-lw text-[11rem] absolute left-0 z-0 top-0">03</h3>
                        <div className='md:pl-20 z-10 grid gap-3 '>
                            <h4 className='text-grn text-2xl'>—Activité</h4>
                            <h2 className='text-gra text-4xl md:text-6xl'>Randonnées Dawya</h2>
                            <img className='w-full top-0 left-0 object-cover md:hidden block' src="img/Land art.png" alt="" />
                            <p className='text-xl'>
                                Principe : Créations d’installation land art éphémères en montage (mandala, suspension, empilements…)
                                <br /> Période d’action: 
                                Juin – Octobre
                                <br /> durée : 2,5 à 4 heures avec une pause ftour beldi 
                                <br /> Cibles: Adultes & Adolescents
                                <br /> Animateur : Artistes ou Animateurs spécialistes land art 
                            </p>
                        </div>
                    </div>
                </div>

                <div className='md:grid grid-cols-12 gap-10 relative md:h-[70vh] md:my-40 container'>
                    <div className='relative flex flex-col justify-center col-span-12 md:col-span-8 pt-20 md:pt-0 text-start'>
                        <h3 className="text-lw text-[11rem] absolute left-0 z-0 top-0">04</h3>
                        <div className='md:pl-20 z-10 grid gap-3 '>
                            <h4 className='text-grn text-2xl'>—Activité</h4>
                            <h2 className='text-gra text-4xl md:text-6xl'>Stages bien-être & énergie</h2>
                            <img className='w-full top-0 left-0 object-cover md:hidden block' src="img/Stages bien-être & énergie.jpg" alt="" />
                            <p className='text-xl'>
                            Principe : Ballade douce avec des étapes Médiation, Yoga du rire, Gym douce, Qi-gong ou Méditation pleine conscience   
                                <br /> Période d’action: Mars – Novembre
                                <br /> durée : 4 heures avec un ftour beldi 
                                <br /> Cibles: Adultes & Adolescents
                                <br /> Animateur : Animateur spécialisé 
                            </p>
                        </div>
                    </div>
                    <div className='relative col-span-12 md:col-span-4 hidden md:block h-full'>
                        <img className='absolute w-full top-0 left-0 h-full object-cover' src="img/Stages bien-être & énergie.jpg" alt="" />
                    </div>
                </div>
                   
                <div className='md:grid grid-cols-12 gap-10 relative md:h-[70vh] md:my-40 container'>
                    <div className='relative col-span-12 md:col-span-4 hidden md:block h-full'>
                        <img className='absolute w-full top-0 left-0 h-full object-cover' src="img/ane.jpg" alt="" />
                    </div>
                    <div className='relative flex flex-col justify-center col-span-12 md:col-span-8 pt-20 md:pt-0 text-start'>
                        <h3 className="text-lw text-[11rem] absolute left-0 z-0 top-0">05</h3>
                        <div className='md:pl-20 z-10 grid gap-3 '>
                            <h4 className='text-grn text-2xl'>—Activité</h4>
                            <h2 className='text-gra text-4xl md:text-6xl'>Balade avec un âne</h2>
                            <img className='w-full top-0 left-0 object-cover md:hidden block' src="img/ane.jpg" alt="" />
                            <p className='text-xl'>
                                Principe : Promenade douce en famille ou entre amis dans la campagne Jbala, Rencontre avec les habitants, Découverte des Douars et observation de la Faune et la Flore
                                <br /> Période d’action: 
                                Juin – Septembre
                                <br /> durée : 6 à 7 heures avec un déjeuner et ftour beldi 
                                <br /> Cibles: Famille ou Adulte
                            </p>
                        </div>
                    </div>
                </div>

                <div className='md:grid grid-cols-12 gap-10 relative md:h-[70vh] md:my-40 container'>
                    <div className='relative flex flex-col justify-center col-span-12 md:col-span-8 pt-20 md:pt-0 text-start'>
                        <h3 className="text-lw text-[11rem] absolute left-0 z-0 top-0">06</h3>
                        <div className='md:pl-20 z-10 grid gap-3 '>
                            <h4 className='text-grn text-2xl'>—Activité</h4>
                            <h2 className='text-gra text-4xl md:text-6xl'>Observation du ciel</h2>
                            <img className='w-full top-0 left-0 object-cover md:hidden block' src="img/Observer ciel.jpg" alt="" />
                            <p className='text-xl'>
                                Principe : Promenades nocturnes et observation des étoiles avec des jumelles ou un télescope  
                                <br /> Période d’action: Février – Novembre
                                <br /> durée : 4 heures avec un ftour beld
                                <br /> Cibles: Adultes & Enfants
                                <br /> Animateur : Animateur spécialisé 
                            </p>
                        </div>
                    </div>
                    <div className='relative col-span-12 md:col-span-4 hidden md:block h-full'>
                        <img className='absolute w-full top-0 left-0 h-full object-cover' src="img/Observer ciel.jpg" alt="" />
                    </div>
                </div>
   
                <div className='md:grid grid-cols-12 gap-10 relative md:h-[70vh] md:my-40 container'>
                    <div className='relative col-span-12 md:col-span-4 hidden md:block h-full'>
                        <img className='absolute w-full top-0 left-0 h-full object-cover' src="img/Plants.jpg" alt="" />
                    </div>
                    <div className='relative flex flex-col justify-center col-span-12 md:col-span-8 pt-20 md:pt-0 text-start'>
                        <h3 className="text-lw text-[11rem] absolute left-0 z-0 top-0">07</h3>
                        <div className='md:pl-20 z-10 grid gap-3 '>
                            <h4 className='text-grn text-2xl'>—Activité</h4>
                            <h2 className='text-gra text-4xl md:text-6xl'>STAGE botanique</h2>
                            <img className='w-full top-0 left-0 object-cover md:hidden block' src="img/Plants.jpg" alt="" />
                            <p className='text-xl'>
                                Principe : Balade douce en montagne, présentation du site et de ces particularités et 
                                découverte et explications des plantes (comestible, tinctoriale, médicinale, agricole, culturelle…) + 
                                remise d’un book des plantes locales et recettes de cuisine.
                                <br /> Période d’action: 
                                Mars – Juin
                                <br /> durée : de 3 à 5 heures avec une pause ftour beldi 
                                <br /> Cibles: Adultes & Adolescents 
                                <br /> Animateur : Botaniste spécialisée 
                            </p>
                        </div>
                    </div>
                </div>
   
                <div className='md:grid grid-cols-12 gap-10 relative md:h-[70vh] md:my-40 container'>
                    <div className='relative flex flex-col justify-center col-span-12 md:col-span-8 pt-20 md:pt-0 text-start'>
                        <h3 className="text-lw text-[11rem] absolute left-0 z-0 top-0">08</h3>
                        <div className='md:pl-20 z-10 grid gap-3 '>
                            <h4 className='text-grn text-2xl'>—Activité</h4>
                            <h2 className='text-gra text-4xl md:text-6xl'>Package Dawya découvertes</h2>
                            <img className='w-full top-0 left-0 object-cover md:hidden block' src="img/package dwya nature.jpg" alt="" />
                            <p className='text-xl'>
                                Principe : Promenade douce sur le sentier, découvertes botanique, rencontres avec les 
                                paysans, 
                                Astronomie, Yoga, Gym, Méditation et Création artistique land art   
                                <br /> Période d’action: Mars – Novembre 
                                <br /> durée : 1 à 2 jours avec pauses et déjeuner beldi 
                                <br /> Cibles: Adultes, couples & Ados
                                <br /> Animateur : Artiste land art, guide et coach spécialisés 
                            </p>
                        </div>
                    </div>
                    <div className='relative col-span-12 md:col-span-4 hidden md:block h-full'>
                        <img className='absolute w-full top-0 left-0 h-full object-cover' src="img/package dwya nature.jpg" alt="" />
                    </div>
                </div>
   
                <div className='md:grid grid-cols-12 gap-10 relative md:h-[70vh] md:my-40 container'>
                    <div className='relative col-span-12 md:col-span-4 hidden md:block h-full'>
                        <img className='absolute w-full top-0 left-0 h-full object-cover' src="img/retraite dawya bien-être.jpg" alt="" />
                    </div>
                    <div className='relative flex flex-col justify-center col-span-12 md:col-span-8 pt-20 md:pt-0 text-start'>
                        <h3 className="text-lw text-[11rem] absolute left-0 z-0 top-0">09</h3>
                        <div className='md:pl-20 z-10 grid gap-3 '>
                            <h4 className='text-grn text-2xl'>—Activité</h4>
                            <h2 className='text-gra text-4xl md:text-6xl'>retraite dawya bien-être</h2>
                            <img className='w-full top-0 left-0 object-cover md:hidden block' src="img/retraite dawya bien-être.jpg" alt="" />
                            <p className='text-xl'>
                                Principe : Yoga, Gym douce, Méditation en pleine conscience, Marche calme, 
                                Danse circulaire, Astronomie et Création land art
                                <br /> Période d’action:  Mars – Octobre 
                                <br /> durée : 2,5 jours avec pauses et déjeuner beldi 
                                <br /> Cibles: Adultes, couples & Ados  
                                <br /> Animateur : Coach spécialisés, Animateur land art et Guide 
                            </p>
                        </div>
                    </div>
                </div>
   
                <div className='md:grid grid-cols-12 gap-10 relative md:h-[70vh] md:my-40 container'>
                    <div className='relative flex flex-col justify-center col-span-12 md:col-span-8 pt-20 md:pt-0 text-start'>
                        <h3 className="text-lw text-[11rem] absolute left-0 z-0 top-0">10</h3>
                        <div className='md:pl-20 z-10 grid gap-3 '>
                            <h4 className='text-grn text-2xl'>—Activité</h4>
                            <h2 className='text-gra text-4xl md:text-6xl'>Team Building</h2>
                            <img className='w-full top-0 left-0 object-cover md:hidden block' src="img/Team-building.jpg" alt="" />
                            <p className='text-xl'>
                                Principe : animation des réseaux de vente, des distributeurs ou encore de ses principaux clients avec la mise en place d’actions nature : stage de survie, bien-être, méditation, chasse au trésors
                                animations sportives ou autres sur mesure pour répondre aux demande des entreprise  
                                <br /> Période d’action: Printemps et Automne
                                <br /> durée : 1 à 2 jours avec pauses et déjeuner beldi 
                                <br /> Cibles: Clients professionnels des hôtels de Tamuda Bay
                            </p>
                        </div>
                    </div>
                    <div className='relative col-span-12 md:col-span-4 hidden md:block h-full'>
                        <img className='absolute w-full top-0 left-0 h-full object-cover' src="img/Team-building.jpg" alt="" />
                    </div>
                </div>
                   
            </section>
        </div>
    );
}

export default Activities;
