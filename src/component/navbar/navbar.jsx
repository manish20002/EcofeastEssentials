import React from 'react'
import './navbars.css';

export default function navbar() {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div>
            <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <a href='/Home' className="ml-3 text-xl">Coins</a>
            </div>
          </div>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="nav-item active mr-5 hover:text-gray-900" href='/Home'>Home</a>
            <a className="nav-item mr-5 hover:text-gray-900" href='/About'>About Us</a>
            <a className="nav-item mr-5 hover:text-gray-900" href='coins'>Coins</a>
            <a className="nav-item mr-5 hover:text-gray-900" href='/Mints'>Mints</a>
            <a className="nav-item mr-5 hover:text-gray-900" href='contact'>Contact Us</a>
          </nav>
        </div>
      </header>
    </div>
  )
}
