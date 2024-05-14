import React from 'react'
import img1 from '../assets/img4.jpeg';
import img2 from '../assets/testiminsaal.jpg'

function About() {
  return (
    <>
      <div className='bg-gray-900 h-screen w-full'>
        <p className='text-8xl text-white font-semibold flex justify-center'>OUR CASES</p>
        <div className="overflow-x-auto mt-20 flex justify-center">
          <table className="table-auto w-4/5 text-white text-2xl ">
            <thead>
              <tr>
                <th className="px-4 py-2">Year</th>
                <th className="px-4 py-2">Award</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">2017</td>
                <td className="border px-4 py-2">2017
                  National Maritime Rating</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2018</td>
                <td className="border px-4 py-2">Ship agent 2018 in Ukraine</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2019</td>
                <td className="border px-4 py-2">National Maritime Rating</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2020</td>
                <td className="border px-4 py-2">Industry Leader 2020</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2021</td>
                <td className="border px-4 py-2">Agent of the Year</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className='w-full mx-auto container px-4 mt-10'>
        <p className='text-gray-900 text-bold text-8xl'>RECENT</p>
        <p className='text-gray-900 text-bold text-8xl flex justify-end'>ANALYTICAL</p>
        <p className='text-gray-900 text-bold text-8xl'>REPORTS</p>

        <div className='mt-10'>
          <div class="border  border-y-black flex flex-row justify-between text-xl px-4 py-4">
            <p>13.05.2022</p>
            <p>Top shippers, charterers Meal/Cake from Ukraine in 2019-2020 marketing year</p>
          </div>
          <div class="border  border-y-black flex flex-row justify-between text-xl px-4 py-4">
            <p>13.05.2022</p>
            <p>Top shippers, charterers Meal/Cake from Ukraine in 2019-2020 marketing year</p>
          </div>
          <div class="border  border-y-black flex flex-row justify-between text-xl px-4 py-4">
            <p>13.05.2022</p>
            <p>Top shippers, charterers Meal/Cake from Ukraine in 2019-2020 marketing year</p>
          </div>
          <div class="border  border-y-black flex flex-row justify-between text-xl px-4 py-4">
            <p>13.05.2022</p>
            <p>Top shippers, charterers Meal/Cake from Ukraine in 2019-2020 marketing year</p>
          </div>
          <div class="border  border-y-black flex flex-row justify-between text-xl px-4 py-4">
            <p>13.05.2022</p>
            <p>Top shippers, charterers Meal/Cake from Ukraine in 2019-2020 marketing year</p>
          </div>

        </div>
      </div>

      <div className='h-screen bg-gray-900 pt-20 '>
        <p className='text-white text-bold text-8xl'>STARK</p>
        <p className='text-white text-bold text-8xl flex justify-end'>RESEARCH</p>
        <p className='text-white text-bold text-8xl'>TANK AND BULK</p>
        <p className='text-white text-bold text-8xl flex justify-end'>ANALYTICS</p>

      </div>
      <div className='bg-gray-900 h-screen w-full px-4 py-4'>
        <p className='text-white text-2xl cursor-pointer underline'>www.StarShip.com</p>
        <div className='mt-10 ml-48 '>
          <img src={img1} className='w-96 h-96
       rounded-lg '></img>
        </div>
        <div >
          <p className='text-white text-bold text-8xl flex justify-end'>PARTNERS</p>
          <p className='text-white text-bold text-8xl'>OF NEPTUNE LINES</p>
        </div>
      </div>

      <div className='h-screen bg-white pt-20 ml-5 mr-5'>
        <p className='text-gray-900 text-bold text-8xl'>STARK</p>
        <p className='text-gray-900 text-bold text-8xl flex justify-end'>PORTAL</p>
        <p className='text-gray-900 text-bold text-8xl'>FOR AGENTS</p>
        <p className='text-gray-900 text-bold text-8xl flex justify-end'>AND CLIENTS</p>
        <p className='text-gray-900 text-2xl cursor-pointer underline'>www.StarShip.com</p>
      </div>

      <div className='h-screen bg-cover bg-center' style={{ backgroundImage: `url(${img2})` }}>
        <div className=' pt-20'>
          <div className='ml-5 mr-5 '>
            <p className='text-white text-bold text-8xl ml-11 '>TEAM WORK</p>
            <p className='text-white text-bold text-8xl flex justify-end'>NOT ONE MAN</p>
            <p className='text-white text-bold text-8xl ml-11'>SHOW</p>
          </div>
        </div>
      </div>

      {/* footer */}

      <footer class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>

            <span class="ml-3 text-xl">Stark Ship</span>
          </a>
          <p class="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2020 copyright —
            <a href="https://twitter.com/knyttneve" class="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@Aniket Tiwari</a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a class="text-gray-400">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-400">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-400">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-400">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </>
  )
}

export default About