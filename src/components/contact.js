import React from 'react';

const Contact = () => {
    return (
        <div className='pt-20 px-3 md:h-screen max-w-7xl mx-auto text-start items-center'>
            <h1 className='text-4xl md:text-7xl mb-5 md:mb-0 text-start text-gra'>Contact</h1>
            <div className='h-full md:grid items-center'>
                <div className='md:grid grid-cols-12 w-full h-fit items-center gap-5'>
                    <form action="#" className='col-span-8 h-fit space-y-5 text-end'>
                        <div className='flex gap-5 w-full'>
                            <input type="text" placeholder='Name' className='w-1/2 text-xl bg-white p-4 rounded-lg focus:outline-none focus:outline-grn' />
                            <input type="email" placeholder='Email' className='w-1/2 text-xl bg-white p-4 rounded-lg focus:outline-none focus:outline-grn' />
                        </div>
                        <input type="text" placeholder='Sujet' className='w-full text-xl bg-white p-4 rounded-lg focus:outline-none focus:outline-grn' />
                        <textarea type="text" rows="9" placeholder='Message' className='w-full h-full text-xl bg-white p-4 rounded-lg focus:outline-none focus:outline-grn'/>
                        <button type='submit' className='bg-grn px-6 py-3 rounded-lg text-xl text-white'>Submit</button>
                    </form>
                    <div className='col-span-4 h-full  text-3xl'>
                        <h2 className='py-4'> Contact info </h2>
                        <a className='text-xl my-5 py-3 text-gray-800 block' href="mailto:dawya@mail.com">dawya@mail.com</a>
                        <a className='text-xl my-5 py-3 text-gray-800 block' href="tel:+212678542309">+212 678-542309</a>
                        <a herf="#" className='text-xl my-5 py-3 text-gray-800 block'>
                            234 Avenue Hassan II <br /> Tanger, Maroc
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Contact;
