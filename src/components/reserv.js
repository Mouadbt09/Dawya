import { useState } from 'react';
const Reserve = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('VOTRE MESSAGE A BIEN ETE ENVOYE. A BIENTÔT')
  };

  const selectType = (event) => {
    const labels = document.querySelectorAll('.typem');

    labels.forEach((label) => {
        if(event.target==label){
            label.classList.add('bg-grn');
            label.classList.remove('bg-white');
        }else{
            label.classList.add('bg-white');
            label.classList.remove('bg-grn');
        }
    });
  };

  const findus= (event) => {
    const labels = document.querySelectorAll('.findus');

    labels.forEach((label) => {
        if(event.target==label){
            label.classList.add('bg-grn');
            label.classList.remove('bg-white');
        }else{
            label.classList.add('bg-white');
            label.classList.remove('bg-grn');
        }
    });
  };

  const douar= (event) => {
    const labels = document.querySelectorAll('.douar');

    labels.forEach((label) => {
        if(event.target==label){
            label.classList.add('bg-grn');
            label.classList.remove('bg-white');
        }else{
            label.classList.add('bg-white');
            label.classList.remove('bg-grn');
        }
    });
  };

  const foodtype= (event) => {
    const labels = document.querySelectorAll('.foodtype');

    labels.forEach((label) => {
        if(event.target==label){
            label.classList.add('bg-grn');
            label.classList.remove('bg-white');
        }else{
            label.classList.add('bg-white');
            label.classList.remove('bg-grn');
        }
    });
  };

  const selectdate= (event) => {
    const labels = document.querySelectorAll('.date');

    labels.forEach((label) => {
        if(event.target==label){
            label.classList.add('bg-grn');
            label.classList.remove('bg-white');
        }else{
            label.classList.add('bg-white');
            label.classList.remove('bg-grn');
        }
    });
  };

  function select(event){
    event.target.classList.toggle('bg-grn')
    event.target.classList.toggle('bg-white')
  }

  return (
    <div className="pt-20 px-3 max-w-7xl mx-auto text-start items-center mb-5">
        <div className='space-y-5 mb-5'>
            <h1 className='text-gra text-start mb-3 text-4xl md:text-7xl '>Reservation</h1>
            <i className='text-grn text-start'>Merci de l’intérêt que vous portez à nos ivités et nos expériences
            insolites en pleine nature...</i>
            <p>
                Pour mieux répondre à vos souhaits de découvertes avec Dawya Natures,
                nous vous remercions de bien vouloir nous donner quelques informations
                indispensables pour vous proposer notre offre la plus adapter et un budget
                bien sûr.
                Ces informations resterons confidentielles et nous nous engageons à ne pas les
                utiliser hors de nos propres ivités
            </p>
        </div>
        <form onSubmit={handleSubmit} className="w-full">
            <fieldset className='grid md:grid-cols-4 grid-cols-2 gap-3 mt-8'>
                <legend><h2 className="text-4xl text-gra mb-3">Vous êtes: </h2></legend>
                <input 
                    type="text" 
                    placeholder='Prénom' 
                    className=' md:text-xl text-base  bg-white p-4 rounded-lg focus:outline-none focus:outline-grn' 
                />
                <input 
                    type="text" 
                    placeholder='Nom' 
                    className=' md:text-xl text-base  bg-white p-4 rounded-lg focus:outline-none focus:outline-grn' 
                />
                <input 
                    type="text" 
                    placeholder='Adresse e-mail' 
                    className=' md:text-xl text-base  bg-white p-4 rounded-lg focus:outline-none focus:outline-grn' 
                />
                <input 
                    type="text" 
                    placeholder='Confirmer adresse e-mail' 
                    className=' md:text-xl text-base  bg-white p-4 rounded-lg focus:outline-none focus:outline-grn' 
                />
                <input 
                    type="text" 
                    placeholder='Mobile' 
                    className=' md:text-xl text-base  bg-white p-4 rounded-lg focus:outline-none focus:outline-grn' 
                />
                <input 
                    type="text" 
                    placeholder='Ville' 
                    className=' md:text-xl text-base  bg-white p-4 rounded-lg focus:outline-none focus:outline-grn' 
                />
                <input 
                    type="text" 
                    placeholder='Pays' 
                    className=' md:text-xl text-base  bg-white p-4 rounded-lg focus:outline-none focus:outline-grn' 
                />
                <input 
                    type="text" 
                    placeholder='Age' 
                    className=' md:text-xl text-base  bg-white p-4 rounded-lg focus:outline-none focus:outline-grn' 
                />
            </fieldset>
            
            <div className='md:grid grid-cols-12 gap-8 mt-8'>
                <fieldset className='grid md:grid-cols-4 grid-cols-2 gap-3 mt-5 text-center col-span-5'>
                    <legend>
                        <h2 className="text-4xl text-gra mb-3 text-start">Période, Durée souhaitées</h2>
                    </legend>
                    <input 
                        type="date" 
                        className=' md:text-xl text-base col-span-2 md:col-span-4 bg-white p-4 rounded-lg focus:outline-none focus:outline-grn' 
                        name="" id="" 
                    />

                    <input type="radio" id="Matin" name="periode" className='hidden' />
                    <label htmlFor="Matin" onClick={(e)=>{selectdate(e)}}
                    className='date text-xl bg-white rounded-xl justify-center flex items-center cursor-pointer py-5'>
                        Matin                   
                    </label>

                    <input type="radio" id="Après midi" name="periode" className='hidden' />
                    <label htmlFor="Après midi" onClick={(e)=>{selectdate(e)}}  
                    className='date text-xl bg-white rounded-xl justify-center flex items-center cursor-pointer'>
                        Après midi                   
                    </label>

                    <input type="radio" id="Journée complète" name="periode" className='hidden' />
                    <label htmlFor="Journée complète" onClick={(e)=>{selectdate(e)}}  
                    className='date text-xl bg-white rounded-xl justify-center flex items-center cursor-pointer'>
                        Journée complète                   
                    </label>

                    <input type="radio" id="2 jours" name="periode" className='hidden' />
                    <label htmlFor="2 jours" onClick={(e)=>{selectdate(e)}} 
                    className='date text-xl bg-white rounded-xl justify-center flex items-center cursor-pointer py-5'>
                        2 jours                   
                    </label>
                </fieldset>

                <fieldset className='md:grid grid-cols-2 gap-3 mt-5 text-center col-span-7'>
                    <legend>
                        <h2 className="text-4xl text-gra mb-3">Mais encore</h2>
                    </legend>
                    <div className='grid grid-cols-2 gap-3'>
                        <input type="radio" id="seul" name="" className='hidden' />
                        <label htmlFor="seul" onClick={(e)=>{selectType(e)}}  
                        style={{ aspectRatio:"3/1.5" }} 
                        className='typem text-xl bg-white rounded-xl justify-center flex items-center cursor-pointer'>
                            Seul
                        </label>

                        <input type="radio" id="couple" name="" className='hidden' />
                        <label htmlFor="couple" onClick={(e)=>{selectType(e)}}  
                        style={{ aspectRatio:"3/1.5" }} 
                        className='typem text-xl bg-white rounded-xl justify-center flex items-center cursor-pointer'>
                            Un couple
                        </label>

                        <input type="radio" id="famille" name="" className='hidden' />
                        <label htmlFor="famille" onClick={(e)=>{selectType(e)}}  
                        style={{ aspectRatio:"3/1.5" }} 
                        className='typem text-xl bg-white rounded-xl justify-center flex items-center cursor-pointer'>
                            famille                    
                        </label>

                        <input type="radio" id="amis" name="" className='hidden' />
                        <label htmlFor="amis" onClick={(e)=>{selectType(e)}}  
                        style={{ aspectRatio:"3/1.5" }} 
                        className='typem text-xl bg-white rounded-xl justify-center flex items-center cursor-pointer'>
                            Entre amis                    
                        </label>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-1 justify-between gap-8 mt-3 md:mt-0'>
                        <input 
                            type="text" 
                            placeholder='Nombre d’adultes' 
                            className=' md:text-xl text-base  bg-white p-4 rounded-lg focus:outline-none focus:outline-grn' 
                        />

                        <input 
                            type="text" 
                            placeholder='Nombre d’enfants' 
                            className=' md:text-xl text-base  bg-white p-4 rounded-lg focus:outline-none focus:outline-grn' 
                        />
                    </div>
                </fieldset>
            </div>

            <fieldset className='mt-8 text-center md:grid gap-3 grid-cols-2 space-y-3'>
                    <legend>
                        <h2 className="text-4xl text-gra mb-3">Période & Durée souhaitées</h2>
                    </legend>

                    <input type="chackbox" id="Randonnée" name="Randonnée" className='hidden' />
                    <label htmlFor="Randonnée" onClick={(e)=>{select(e)}}  
                    className=' text-xl rounded-xl justify-center flex items-center cursor-pointer py-5 bg-white'>
                        Randonnée Douce - 2h30 -                   
                    </label>

                    <input type="chackbox" id="rd" name="rd" className='hidden' />
                    <label htmlFor="rd" onClick={(e)=>{select(e)}}  
                    className=' text-xl rounded-xl justify-center flex items-center cursor-pointer py-5 bg-white'>
                        Randonnée Dynamique - 2h30 -                  
                    </label>

                    <input type="chackbox" id="raslad" name="raslad" className='hidden' />
                    <label htmlFor="raslad" onClick={(e)=>{select(e)}}  
                    className=' text-xl rounded-xl justify-center flex items-center cursor-pointer py-5 bg-white'>
                        Randonnée ARTISTIQUE SUR LE Sentier Land art Dawya - 3h -                  
                    </label>

                    <input type="chackbox" id="abe" name="abe" className='hidden' />
                    <label htmlFor="abe" onClick={(e)=>{select(e)}}  
                    className=' text-xl rounded-xl justify-center flex items-center cursor-pointer py-5 bg-white'>
                        Atelier Bien être - 3h -                  
                    </label>

                    <input type="chackbox" id="sb" name="sb" className='hidden' />
                    <label htmlFor="sb" onClick={(e)=>{select(e)}}  
                    className=' text-xl rounded-xl justify-center flex items-center cursor-pointer py-5 bg-white'>
                        Stage Botanique - 3h30 -                 
                    </label>

                    <input type="chackbox" id="pfa4" name="pfa4" className='hidden' />
                    <label htmlFor="pfa4" onClick={(e)=>{select(e)}}  
                    className=' text-xl rounded-xl justify-center flex items-center cursor-pointer py-5 bg-white'>
                        Promenade familiale AVEC un âne - 4h -                  
                    </label>

                    <input type="chackbox" id="pfa6" name="pfa6" className='hidden' />
                    <label htmlFor="pfa6" onClick={(e)=>{select(e)}}  
                    className=' text-xl rounded-xl justify-center flex items-center cursor-pointer py-5 bg-white'>
                        Promenade familiale AVEC un âne - 6h30 -                 
                    </label>

                    <input type="chackbox" id="scla" name="scla" className='hidden' />
                    <label htmlFor="scla" onClick={(e)=>{select(e)}}  
                    className=' text-xl rounded-xl justify-center flex items-center cursor-pointer py-5 bg-white'>
                        Stage DE CREATION Land Art - 4h -                  
                    </label>

                    <input type="chackbox" id="oc" name="oc" className='hidden' />
                    <label htmlFor="oc" onClick={(e)=>{select(e)}}  
                    className=' text-xl rounded-xl justify-center flex items-center cursor-pointer py-5 bg-white'>
                        Observation du ciel - 3h -                  
                    </label>

                    <input type="chackbox" id="sbee" name="sbee" className='hidden' />
                    <label htmlFor="sbee" onClick={(e)=>{select(e)}}  
                    className=' text-xl rounded-xl justify-center flex items-center cursor-pointer py-5 bg-white'>
                        Stages bien-être & énergie - 4h -                  
                    </label>

                    <input type="chackbox" id="rdbe8h" name="rdbe8h" className='hidden' />
                    <label htmlFor="rdbe8h" onClick={(e)=>{select(e)}}  
                    className=' text-xl rounded-xl justify-center flex items-center cursor-pointer py-5 bg-white'>
                         retraite dawya bien-être - 8 H -                    
                    </label>

                    <input type="chackbox" id="rdbe2j" name="rdbe2j" className='hidden' />
                    <label htmlFor="rdbe2j" onClick={(e)=>{select(e)}}  
                    className=' text-xl rounded-xl justify-center flex items-center cursor-pointer py-5 bg-white'>
                        retraite dawya bien-être - 2 jours -                  
                    </label>

                    <input type="chackbox" id="pdd8h" name="pdd8h" className='hidden' />
                    <label htmlFor="pdd8h" onClick={(e)=>{select(e)}}  
                    className=' text-xl rounded-xl justify-center flex items-center cursor-pointer py-5 bg-white'>
                        Package Dawya découvertes - 8h -                 
                    </label>

                    <input type="chackbox" id="pdd2j" name="pdd2j" className='hidden' />
                    <label htmlFor="pdd2j" onClick={(e)=>{select(e)}}  
                    className=' text-xl rounded-xl justify-center flex items-center cursor-pointer py-5 bg-white'>
                        Package Dawya découvertes - 2 jours -                 
                    </label>
            </fieldset>

            <div className='md:grid grid-cols-2 gap-8 mt-8 '>
                <fieldset className='text-start space-y-3'>
                        <legend>
                            <h2 className="text-4xl text-gra mb-3">Et enfin</h2>
                        </legend>
                        <div className='md:grid grid-cols-2 gap-8 space-y-5 md:space-y-0'>
                            <div className='grid justify-between'>
                                <p className='text-xl mb-3'>
                                    Souhaitez vous dormir chez l’habitant du Douar ?
                                </p>
                                <div className='grid grid-cols-2 gap-3 items-end'>
                                    <input type="chackbox" id="veille" name="Douar" className='hidden' />
                                    <label htmlFor="veille" onClick={(e)=>{douar(e)}}style={{ aspectRatio:"3/1.5" }}
                                    className='douar text-xl rounded-xl justify-center flex items-center cursor-pointer py-5 bg-white'>
                                        La veille                 
                                    </label>

                                    <input type="chackbox" id="même" name="Douar" className='hidden' />
                                    <label htmlFor="même" onClick={(e)=>{douar(e)}}style={{ aspectRatio:"3/1.5" }}
                                    className='douar text-xl rounded-xl justify-center flex items-center cursor-pointer py-5 bg-white'>
                                        Le soir même                  
                                    </label>
                                </div>
                            </div>
                            <div className='grid justify-between'>
                                <p className='text-xl mb-3'>
                                    Souhaitez-vous un repas Jbala sur place préparé par les femmes du
                                    Douar Boujmil ?
                                </p>
                                <div className='grid grid-cols-2 gap-3'>
                                    <input type="chackbox" id="Déjeuner" name="fod" className='hidden' />
                                    <label htmlFor="Déjeuner" onClick={(e)=>{foodtype(e)}}style={{ aspectRatio:"3/1.5" }}
                                    className='foodtype text-xl rounded-xl justify-center flex items-center cursor-pointer py-5 bg-white'>
                                        Déjeuner                  
                                    </label>

                                    <input type="chackbox" id="Dîner" name="fod" className='hidden' />
                                    <label htmlFor="Dîner" onClick={(e)=>{foodtype(e)}}style={{ aspectRatio:"3/1.5" }}
                                    className='foodtype text-xl rounded-xl justify-center flex items-center cursor-pointer py-5 bg-white'>
                                        Dîner                  
                                    </label>
                                </div>
                            </div>
                        </div>
                </fieldset>

                <fieldset className='text-start grid items-end mt-8 md:mt-0'>
                        <legend>
                            <h2 className="text-4xl text-gra mb-3">Remarques ou Souhaits particuliers</h2>
                        </legend>
                        <textarea 
                            name="" id="" 
                            className='md:text-xl text-base bg-white p-4 rounded-lg focus:outline-none focus:outline-grn w-full' 
                            cols="30" rows="3">
                        </textarea>
                </fieldset>
            </div>

            <fieldset className='text-start md:grid items-end mt-8'>
                    <legend>
                        <h2 className="text-4xl text-gra mb-3">Comment avez-vous connu notre site internet ?</h2>
                    </legend>
                    <div className='grid grid-cols-2 md:grid-cols-5 md:gap-10 gap-3 text-center'>
                        <input type="chackbox" id="rs" name="hdfu" className='hidden' />
                        <label htmlFor="rs" onClick={(e)=>{findus(e)}}  
                        className='findus text-xl rounded-xl justify-center flex items-center cursor-pointer py-5 bg-white'>
                            Réseaux sociaux                  
                        </label>

                        <input type="chackbox" id="inet" name="hdfu" className='hidden' />
                        <label htmlFor="inet" onClick={(e)=>{findus(e)}}  
                        className='findus text-xl rounded-xl justify-center flex items-center cursor-pointer py-5 bg-white'>
                           Publicité Internet                
                        </label>

                        <input type="chackbox" id="mr" name="hdfu" className='hidden' />
                        <label htmlFor="mr" onClick={(e)=>{findus(e)}}  
                        className='findus text-xl rounded-xl justify-center flex items-center cursor-pointer py-5 bg-white'>
                           Moteur de recherche            
                        </label>

                        <input type="chackbox" id="inet" name="hdfu" className='hidden' />
                        <label htmlFor="inet" onClick={(e)=>{findus(e)}}  
                        className='findus text-xl rounded-xl justify-center flex items-center cursor-pointer py-5 bg-white'>
                           Un message envoyé par nos soins              
                        </label>

                        <input type="chackbox" id="auter" name="hdfu" className='hidden' />
                        <label htmlFor="auter" onClick={(e)=>{findus(e)}}  
                        className='findus text-xl rounded-xl justify-center flex items-center cursor-pointer py-5 bg-white'>
                           Autre               
                        </label>
                    </div>
            </fieldset>

            <div className='text-center mt-8'>
                <button 
                    className='transition-all duration-300 hover:bg-lime-600 md:text-xl text-base font-bold bg-grn p-4 px-8 rounded-lg focus:outline-none text-white' 
                    type='submit'
                >
                    Reserver
                </button>
            </div>
        </form>
    </div>
    );
}

export default Reserve;
