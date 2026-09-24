function Header() {
    return(
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

            <a href="#CV"
               className="text-xl font-bold text-white">
                Renato Troncoso
            </a>

            <nav className="hidden gap-2 sm:flex">

                <button
                    id="theme-toggle"
                    type="button"
                    className="rounded-lg p-2.5
                        text-slate-600
                        hover:bg-slate-100 hover:text-slate-900
                        dark:text-slate-300
                        dark:hover:bg-slate-800 dark:hover:text-white
                        transition-colors duration-300"
                    aria-label="Cambiar tema">
                    <svg id="moon-icon"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 12.79A9 9 0 1 1 11.21 3
                                7 7 0 0 0 21 12.79z" />
                    </svg>

                    <svg id="sun-icon"
                        className="hidden h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3
                                m15.364-6.364-.707.707M6.343 17.657l-.707.707
                                m12.728 0-.707-.707M6.343 6.343l-.707-.707
                                M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                    </svg>
                </button>

                <a href="#CV"
                   className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-blue-600 hover:text-white">
                    CV
                </a>

                <a href="#PORTAFOLIO"
                   className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-blue-600 hover:text-white">
                    Portafolio
                </a>

                <a href="#CONTACTO"
                   className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-blue-600 hover:text-white">
                    Contacto
                </a>

            </nav>
        </div>
    )
}

export default Header