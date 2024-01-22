import { useState, useEffect } from 'react'
import IconNav from "../Icons/IconNav"

const Nav = () => {

    const [theme, setTheme] = useState(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return 'dark'
        }
        return 'ligth'
    })

    useEffect(() => {
        if (theme === 'dark') {
            document.querySelector('html').classList.add('dark')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    }, [theme])

    const handleChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'ligth' ? 'dark' : 'ligth'))
    }

    return (
        <nav className="flex items-center px-3 bg-gray-300 shadow-sm text-gray-500 dark:bg-dark-bg dark:text-white border-b">
            <IconNav />
            <h1 className="font-bold text-xl">CALCULADORA</h1>
            <button 
            onClick={handleChangeTheme} 
            className='ml-auto p-2 bg-gray-100 text-gray-400 font-bold rounded-md dark:bg-dark-card dark:text-white' >
                {theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
            </button>
        </nav>
    )
}

export default Nav
