import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import Upload from './components/Upload';
import Error404 from './components/Error404';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <ToastContainer />
      <div className={`min-h-screen ${isDarkMode ? 'dark' : ''} bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white`}>
        <BrowserRouter>
          <header className={`w-full flex justify-between bg-gray-800 dark:bg-gray-900 text-white mx-auto px-4 sm:px-6 lg`}>
            <div className="w-full h-16 flex items-center justify-between">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-lg font-bold">Matec</Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex  items-center space-x-4">
                  <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Home</Link>
                  <Link to="/upload" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Upload Image</Link>
                  <span onClick={toggleDarkMode} className='cursor-pointer'>
                    {isDarkMode ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={20} height={20} fill="#fff"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" /></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width={20} height={20} fill="#646cff"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" /></svg>

                    )}
                  </span>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                  <span className="sr-only">Open main menu</span>
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                  </svg>
                </button>
              </div>
            </div>

            <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden w-full`}>
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ml-2">
                <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/upload" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>Upload Image</Link>
                <div onClick={toggleDarkMode} className='cursor-pointer rounded-md px-3 py-2 hover:bg-gray-700'>
                    {isDarkMode ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={20} height={20} fill="#fff"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" /></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width={20} height={20} fill="#646cff"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" /></svg>

                    )}
                  </div>
              </div>
            </div>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
};

export default App;
