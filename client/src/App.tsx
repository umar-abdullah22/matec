import Header from '@components/Header';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocalStorage } from 'react-use';
import AppRouter from 'router/AppRouter';

const App: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>('theme-dark-mode', true); // using this will automatically update the theme 
    // Toggle function that updates both the state and the local storage
    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };

    return (
        <BrowserRouter>
            <div className={`min-h-screen ${isDarkMode ? 'dark' : ''} bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white`}>
                <ToastContainer />
                <Header
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                    isDarkMode={isDarkMode}
                    toggleDarkMode={toggleDarkMode}
                />
                <AppRouter />
            </div>
        </BrowserRouter>
    );
};

export default App;
