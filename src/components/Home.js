import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FR from './FR';
import EN from './EN';
import AR from './AR';
import SP from './SP';
const Home = () => {
    const [lang,setlang]=useState('fr')
    function show(e){
        e.classList.toggle('hidden')
    }
    function hide(e){
        e.classList.toggle('retate')
    }
    return (
        <div>
            <section className="relative w-full h-screen hero">
                <img className="absolute object-cover w-full h-full inset-0 z-0" src="img/10.jpg" alt=""/>
                <div className="h-screen flex flex-col justify-center items-center gap-4 z-10 pt-18">
                    <h1 className='z-10 text-white text-7xl md:text-9xl '>Da<span className="text-org">w</span>ya Nature</h1>
                        <p className="z-10 text-white text-2xl md:text-4xl ">
                            Immervelliez-vous dans les montagnes de jbala! <br/>
                            Découverts, bien-étre créations &amp; Activités environnementales 
                        </p>
                    <Link to="boujmil" >Découvrir boujmil</Link>
                </div>
            </section>

            <section className='lg:h-screen lg:grid grid-cols-12 items-center gap-10 max-w-7xl mx-auto'>
                <div className='col-span-4 hidden lg:block'>
                    <img className='w-full max-w-fll' src="img/10P.jpg" alt="" />
                </div>
                <div className='text-left col-span-8 mt-10 lg:mt-0'>
                    <div>
                        <h2 className="text-4xl lg:text-6xl font-bold text-gra mb-4  ">
                            A propos de Dawya nature
                        </h2>
                        <i className="text-grn text-xl my-4">La nature a sa musique pour qui sait l’écouter…</i> <br /><br />
                        
                        <p className="text-lgra text-base">
                            <small className="text-lgra text-base mr-1">Translate:</small>
                            <small className="text-lgra text-base cursor-pointer" onClick={()=>{setlang('ar')}}>🇸🇦</small> | <small className="text-lgra text-base cursor-pointer" onClick={()=>{setlang('en')}}>🇬🇧</small> | <small className="text-lgra text-base cursor-pointer" onClick={()=>{setlang('sp')}}>🇪🇸</small>
                        </p>
                    </div>
                    {lang === "fr" && ( 
                        <FR/> 
                    )} 
                    {lang === "ar" && ( 
                        <AR/> 
                    )}
                    {lang === "en" && ( 
                        <EN/> 
                    )}
                    {lang === "sp" && ( 
                        <SP/> 
                    )}
                    <p className="link">
                            <Link to="about">A propos</Link>
                    </p>
                </div>
            </section>

            <section className='lg:h-screen md:grid grid-cols-12 gap-10 max-w-7xl mx-auto mt-10 lg:mt-0 w-full'>
                <div className='col-span-2 hidden lg:block'>
                    <svg viewBox="0 0 175 533" version="1.1" className='w-[130%]'>
                        <g id="Boujmil" fill="#E1E1E1" transform="matrix(1.1518736E-06 -0.99999994 0.99999994 1.1518736E-06 0 531.99994)">
                          <path d="M296.744 51.6648Q291.477 51.6648 287.693 48.1619Q283.909 44.6591 283.909 39.6989Q283.909 34.7386 287.693 31.2614Q291.477 27.7841 296.744 27.7841Q302.063 27.7841 305.821 31.2614Q309.58 34.7386 309.58 39.6989Q309.58 44.6591 305.821 48.1619Q302.063 51.6648 296.744 51.6648ZM471.017 51.6648Q465.75 51.6648 461.966 48.1619Q458.182 44.6591 458.182 39.6989Q458.182 34.7386 461.966 31.2614Q465.75 27.7841 471.017 27.7841Q476.335 27.7841 480.094 31.2614Q483.852 34.7386 483.852 39.6989Q483.852 44.6591 480.094 48.1619Q476.335 51.6648 471.017 51.6648ZM7.92614 139.364L7.92614 34.6364L51.5966 34.6364Q69.2386 34.6364 78.2642 41.9489Q87.2898 49.2614 87.2898 61.125Q87.2898 70.0739 81.8182 76.0568Q76.3466 82.0398 67.7045 83.8295L67.7045 84.8523Q74.0455 85.108 79.4403 88.2528Q84.8352 91.3977 88.108 96.946Q91.3807 102.494 91.3807 110.062Q91.3807 118.5 87.0852 125.122Q82.7898 131.744 74.6591 135.554C69.2386 138.094 62.6591 139.364 54.9205 139.364L7.92614 139.364ZM524.352 139.364L524.352 34.6364L499.347 34.6364L499.347 139.364L524.352 139.364ZM33.2386 77.6932L47.25 77.6932Q53.4886 77.6932 57.4773 74.625Q61.4659 71.5568 61.4659 66.0341Q61.4659 60.8182 57.733 57.7756Q54 54.7329 47.6591 54.7329L33.2386 54.7329L33.2386 77.6932ZM140.216 140.847Q127.892 140.847 118.994 135.759Q110.097 130.67 105.315 121.543Q100.534 112.415 100.534 100.347Q100.534 88.2273 105.315 79.0994Q110.097 69.9716 118.994 64.8835Q127.892 59.7954 140.216 59.7954Q152.591 59.7954 161.463 64.8835Q170.335 69.9716 175.116 79.0994Q179.898 88.2273 179.898 100.347Q179.898 112.415 175.116 121.543Q170.335 130.67 161.463 135.759Q152.591 140.847 140.216 140.847ZM325.125 60.8182L325.125 139.364L350.131 139.364L350.131 92.8807Q350.131 87.0511 353.224 83.5994Q356.318 80.1477 361.227 80.1477Q366.085 80.1477 369.051 83.3182Q372.017 86.4886 372.017 91.9602L372.017 139.364L396.051 139.364L396.051 92.4716Q396.051 86.8466 398.991 83.4972Q401.932 80.1477 407.097 80.1477Q411.852 80.1477 414.895 83.2415Q417.938 86.3352 417.938 92.2159L417.938 139.364L442.943 139.364L442.943 86.4886Q442.943 74.0114 435.989 66.9034Q429.034 59.7954 417.886 59.7954Q409.193 59.7954 402.801 64.0142Q396.409 68.2329 394.21 75.2386L393.392 75.2386Q391.807 68.1818 385.977 63.9886Q380.148 59.7954 371.966 59.7954Q363.938 59.7954 358.082 63.9375Q352.227 68.0795 349.773 75.2386L348.903 75.2386L348.903 60.8182L325.125 60.8182ZM243.409 60.8182L243.409 105.46Q243.409 112.313 239.574 116.02Q235.739 119.727 230.165 119.727Q224.438 119.727 221.114 116.045Q217.79 112.364 217.739 105.972L217.739 60.8182L192.733 60.8182L192.733 110.881Q192.784 119.727 196.159 126.375Q199.534 133.023 205.594 136.705Q211.653 140.386 219.733 140.386Q228.58 140.386 234.844 136.168Q241.108 131.949 243.716 124.739L244.534 124.739L244.534 139.364L268.364 139.364L268.364 60.8182L243.409 60.8182ZM284.267 60.8182L309.273 60.8182L309.273 142.636Q309.273 152.352 305.31 158.08Q301.347 163.807 294.136 166.313Q286.926 168.818 277.108 168.818Q274.807 168.818 272.045 168.665L272.045 149.693Q273.682 149.898 275.114 149.898Q280.278 149.898 282.273 147.98Q284.267 146.063 284.267 142.125L284.267 60.8182ZM458.489 139.364L458.489 60.8182L483.494 60.8182L483.494 139.364L458.489 139.364ZM140.369 121.977Q147.068 121.977 150.75 115.943Q154.432 109.909 154.432 100.193Q154.432 90.4261 150.75 84.3665Q147.068 78.3068 140.369 78.3068Q133.415 78.3068 129.707 84.3665Q126 90.4261 126 100.193Q126 109.909 129.707 115.943Q133.415 121.977 140.369 121.977ZM33.2386 118.96L48.8864 118.96Q57.1193 118.96 61.0313 115.841Q64.9432 112.722 64.9432 107.148Q64.9432 101.114 60.7756 97.5597Q56.6079 94.0057 49.3466 94.0057L33.2386 94.0057L33.2386 118.96Z"></path>
                        </g>
                    </svg>
                </div>
                <div className='text-left col-span-10'>
                    <div className="">
                        <h2 className="lg:text-6xl text-4xl   font-bold text-gra mb-4">la beauté naturelle de village de Boujmil</h2>
                        <i className="text-grn text-xl my-4">
                            Un trésors du monde rural, le Douar Boujmil est un village pittoresque qui
                            s’offrent à vous 
                        </i>
                        <p className="text-base text-gra my-4">
                            Boujmil est un village perché dans une zone de moyenne montagne de
                            l’arrière pays typique des montagnes Jbela.
                            A flan de coteau et au pied d’une dorsale calcaire, la zone est constituée
                            de 4 à 5 vallées ancestrales et totalement préservées.
                        </p>
                        <p><Link className="l" to="boujmil">Explorez boujmil</Link></p>
                        <div className="row grid grid-cols-12 mt-5 lg:mt-0">
                            <div className="md:col-span-4"></div>
                            <div className="col-span-12 md:col-span-8">
                                <img className='w-full max-w-full' src="img/5.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='max-w-7xl mx-auto h-fit md:h-[80h] my-24 space-y-5'>
                <h2 className="text-4xl md:text-6xl font-bold text-gra md:text-start text-center mb-5">Testimonials</h2>
                <div className='w-full md:w-4/5 md:ml-auto md:flex gap-5 items-center md:text-start text-center '>
                    <div className='relative h-48 w-48 mx-auto md:mx-0'>
                        <img className='w-full h-full object-fit-cover absolute rounded-2xl' src="img/Avatar 11.png" alt="" />
                    </div>
                    <div className='space-y-2'>
                        <i className='text-grn'>
                            -Testimonial 1
                        </i>
                        <h2 className='text-3xl'>
                            Nezha Fathi
                        </h2>
                        <p className='text-lg'>
                            neque exercitationem officiis facilis laboriosam harum nesciunt quisquam, corrupti repellendus 
                        </p>
                    </div>
                </div>
                <div className='w-full md:w-4/5 md:mr-auto md:flex gap-5 items-center md:text-start text-center'>
                    <div className='col-span-4 relative h-48 w-48 mx-auto md:mx-0'>
                        <img className='w-full h-full object-fit-cover absolute rounded-2xl' src="img/Avatar 10.png" alt="" />
                    </div>
                    <div className='col-span-8 space-y-2'>
                        <i className='text-grn'>
                            -Testimonial 2
                        </i>
                        <h2 className='text-3xl'>
                            Nikola Hodram
                        </h2>
                        <p className='text-lg'>
                            neque exercitationem officiis facilis laboriosam harum nesciunt quisquam, corrupti repellendus 
                        </p>
                    </div>
                </div>
                <div className='w-full md:w-4/5 md:ml-auto md:flex gap-5 items-center md:text-start text-center'>
                    <div className='col-span-4 relative h-48 w-48 mx-auto md:mx-0'>
                        <img className='w-full h-full object-fit-cover absolute rounded-2xl' src="img/Avatar 13.png" alt="" />
                    </div>
                    <div className='col-span-8 space-y-2'>
                        <i className='text-grn'>
                            -Testimonial 3
                        </i>
                        <h2 className='text-3xl'>
                            Adam Wazni
                        </h2>
                        <p className='text-lg'>
                            neque exercitationem officiis facilis laboriosam harum nesciunt quisquam, corrupti repellendus 
                        </p>
                    </div>
                </div>
            </section>

            <section className='mt-10 md:mt-0 h-fit md:h-screen md:grid grid-cols-12 gap-10 max-w-7xl text-start mx-auto items-start faq'>
                <div className='col-span-4'>
                    <h2 className=" text-4xl md:text-6xl font-bold text-gra">FAQs:</h2>
                </div>
                <div className='md:col-span-8 col-span-12 h-full'>
                    <div>
                        <span className='mb-5 text-2xl md:text-4xl text-gra border-t-4 border-gra w-full flex justify-between pt-3'>
                            <h3>Comment venir a Boujmil ?</h3>
                            <button className='showfaq relative cursor-pointer user-select-none' onClick={(e)=>{show(e.target.parentNode.parentNode.childNodes[1]);hide(e.target.childNodes[1])}}>
                                <div></div>
                                <div className='transition-all duration-300'></div>
                            </button>
                        </span>
                        <span className='hidden transition-all'>
                        Depuis Tanger : 2 heures <br />
                        Depuis Tétouan : 40 mn par l’autoroute<br />
                        Depuis Cabo Négro : 45 mn<br />
                        Depuis Marina Smir : 37 mn<br />
                        Depuis La Restinga : 30 mn dont 6 km de piste en terre 
                        </span>
                    </div>
                    <div>
                        <span className='mb-5 text-2xl md:text-4xl text-gra border-t-4 border-gra w-full flex justify-between pt-3'>
                            <h3>Le trajet sur la piste est-il facile ?</h3>
                            <button className='showfaq relative cursor-pointer user-select-none' onClick={(e)=>{show(e.target.parentNode.parentNode.childNodes[1]);hide(e.target.childNodes[1])}}>
                                <div></div>
                                <div className='transition-all duration-300'></div>
                            </button>
                        </span>
                        <span className='hidden transition-all'>
                            Nous sommes en montagne dans une zone isolée et donc le seul accès dans le haut du village vous oblige à empreinter environ 5 km de piste (80% en terre et 20 en béton) mais pratiquée chaque jour par des véhicule de tourisme, des estafettes, des motos et même des triporteurs. Un simple véhicule de tourisme vous permettra donc de monter vers nous sans de problème et surtout en 2ème vitesse... 
                        </span>
                    </div>
                    <div>
                        <span className='mb-5 text-2xl md:text-4xl text-gra border-t-4 border-gra w-full flex justify-between pt-3'>
                            <h3>Je n’ai pas de véhicule, Comment me rendre à Boujmil ?</h3>
                            <button className='showfaq relative cursor-pointer user-select-none' onClick={(e)=>{show(e.target.parentNode.parentNode.childNodes[1]);hide(e.target.childNodes[1])}}>
                                <div></div>
                                <div className='transition-all duration-300'></div>
                            </button>
                        </span>
                        <span className='hidden transition-all'>
                            3 solutions pour les piétons:
                            En Taxi Depuis le centre d’Al Alyiyene - face à la Marie - Avec Dawya Natures contre rémunération A pied si vous êtes un bon marcheur - au moins 1h de marche 
                        </span>
                    </div>
                    <div>
                        <span className='mb-5 text-2xl md:text-4xl text-gra border-t-4 border-gra w-full flex justify-between pt-3'>
                            <h3>Comment confirmer ma réservation ?</h3>
                            <button className='showfaq relative cursor-pointer user-select-none' onClick={(e)=>{show(e.target.parentNode.parentNode.childNodes[1]);hide(e.target.childNodes[1])}}>
                                <div></div>
                                <div className='transition-all duration-300'></div>
                            </button>
                        </span>
                        <span className='hidden transition-all'>
                            Pour chaque réservation un acompte de 50% sera demandé (carte ou virement bancaire voir cash-plus) qui pourra être rendu en cas d’annulation moins 4 jours avant la prestation. Dans le cas contraire l’acompte sera conserver pour un éventuel report Le solde est payable sur place (CB, Chèque ou numéraire) 
                        </span>
                    </div>
                    <div>
                        <span className='mb-5 text-2xl md:text-4xl text-gra border-t-4 border-gra w-full flex justify-between pt-3'>
                            <h3>Quel équipement nécessaire sont prévoir ?</h3>
                            <button className='showfaq relative cursor-pointer user-select-none' onClick={(e)=>{show(e.target.parentNode.parentNode.childNodes[1]);hide(e.target.childNodes[1])}}>
                                <div></div>
                                <div className='transition-all duration-300'></div>
                            </button>
                        </span>
                        <span className="hidden">
                            Vous allez nous retrouver en montagne (entre 200 et 681 m d’altitude) et le
                            temps peut-être très changeant... il est donc nécessaire de bien être équipé
                            pour profiter au maximum de votre expérience avec nous.
                            <strong><br/> Équipements recommandé: <br/></strong>
                            <strong><br/>Par temps chaud<br/></strong>
                            √ Tenue légère et large - pas de jean - mais prévoir un pull ou un co
                            upe vent + Chapeau ou caquette + Lunette de soleil
                            √ Appareil photo ou mobile
                            <strong><br/>Par temps froid (hivers ou nuit)<br/></strong> 
                            √ Pull bien chaud et parka en cas de pluie
                            <strong><br/>En général<br/></strong>
                            √ Chaussures de sport ou de montagne avec chaussettes hautes
                            √ Bâtons de randonnée
                            √ Petit sac à dos avec une gourde pleine ou vide (possibilité de la re
                            mplir directement à la source)
                            √ Un sac plastique ou autre pour gérer vos déchets
                            √ Un petit cahier pour prendre des note <br/>
                                <b>Et bien sûr, n’oubliez pas votre bonne humeur !</b>
                        </span>
                    </div>
                    <div>
                        <span className='mb-5 text-2xl md:text-4xl text-gra border-t-4 border-gra w-full flex justify-between pt-3'>
                            <h3>Avez vous une charte de bonne conduite ?</h3>
                            <button className='showfaq relative cursor-pointer user-select-none' onClick={(e)=>{show(e.target.parentNode.parentNode.childNodes[1]);hide(e.target.childNodes[1])}}>
                                <div></div>
                                <div className='transition-all duration-300'></div>
                            </button>
                        </span>
                        <span className="hidden">
                        Dans le cadre d’un tourisme responsable, Dawya Natures souhait valoriser les espaces naturels qui nous accueillent et sensibiliser ces clients au respect de l’environnement et de ses habitants, nous avons donc conçu une charte de bonne conduite que nous vous demanderons de signer avant le démarrage de nos ateliers et stages afin de préserver ces lieux exceptionnels le plus longtemps possible. 
                        </span>
                    </div>
                    <div>
                        <span className='mb-5 text-2xl md:text-4xl text-gra border-t-4 border-gra w-full flex justify-between pt-3'>
                            <h3>Peut-on manger sur place ?</h3>
                            <button className='showfaq relative cursor-pointer user-select-none' onClick={(e)=>{show(e.target.parentNode.parentNode.childNodes[1]);hide(e.target.childNodes[1])}}>
                                <div></div>
                                <div className='transition-all duration-300'></div>
                            </button>
                        </span>
                        <span className="hidden">
                            Dawya Natures vous accueille systématiquement avant chaque stage ou atelier avec un ftour beldi pendant le brief. Un café restaurant est peut préparer des tajines sur commande avant le départ les activités. Pour les sessions longues 1 ou 2 jours le déjeuner cuisiné par les habitantes du Douar est prévue et sera servi sur la terrasse du Dar Dawya Enfin vous pouvez bien sûr prévoir un pique-nique. 
                        </span>
                    </div>
                </div>

            </section>

        </div>
    );
}

export default Home;
