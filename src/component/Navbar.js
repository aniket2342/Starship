import React from 'react'
import hero from '../assets/hero1.png'

function Navbar() {
    return (
        <>
            <header class="text-gray-400 bg-gray-900 body-font fixed left-0 right-0 z-10">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>

                        <span class="ml-3 text-xl font-bold">Stark Ship</span>
                    </a>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center ">
                        <a class="mr-5 text-white ">Login to Stark portal</a>
                        <a class="mr-5 text-white ">Login to Stark Research</a>

                    </nav>
                    <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>
                    </button>
                </div>
            </header>

            <div className='w-full h-screen bg-gray-900'>
                <div className='flex justify-end'>
                    <img src={hero} className='w-1/2'></img>
                </div>
            <div className='mx-8 my-8 text-7xl text-white font-bold flex justify-between'>
                <p>MORE</p>
                <p>THAN</p>
            </div>
            <div className=' mx-8 my-8 text-7xl text-white font-bold flex justify-end'>
                <p>JUST A PORT</p>
            </div>

            <div className=' mx-8 my-8 text-7xl text-white font-bold flex justify-start'>
                <p>AGENT</p>
            </div></div>

            <div className='text-center bg-gray-900 justify-center w-auto h-screen'>
                <p className='text-white text-xl  '>We come not for one year, we enjoy what we are doing, we are fully</p>
                <p className='text-white text-xl  '>independent, handling all types of ships and we really want to bring to Ukraine</p>
                <p className='text-white text-xl  '>— European standards of port call handling and we want our clients to feel that</p>
                <p className='text-white text-xl  '>Ukraine — is changing, the service here — is changing and people here — are</p>
                <p className='text-white text-xl  '>changing.</p>
                <div className='mt-40 text-white text-2xl -rotate-6 '>
                    <p>CLEANING HOLDS/TANKSCLEANING HOLDS/TANKSCLEANING HOLDS/TANKSCL</p>
                    <p>CLEANING HOLDS/TANKSCLEANING HOLDS/TANKSCLEANING HOLDS/TANKSCL</p>
                    <p>CLEANING HOLDS/TANKSCLEANING HOLDS/TANKSCLEANING HOLDS/TANKSCL</p>
                </div>
                </div>
                
        </>
    )
}

export default Navbar