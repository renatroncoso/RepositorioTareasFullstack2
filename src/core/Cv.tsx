function Cv () {
    return ( 
        <section id="CV"
                 className="mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl flex-col items-center justify-center gap-12 px-6 py-20 md:flex-row">
            <div className="relative">

                <div className="absolute -inset-4 rounded-full bg-blue-600/20 blur-2xl"></div>

            </div>
            <div className="max-w-2xl text-center md:text-left">

                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                    Estudiante de Ingeniería en Informática
                </p>

                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                    Renato
                    <span className="text-blue-500">Troncoso</span>
                </h1>

                <p className="mt-6 text-lg leading-8 text-slate-400">
                    Estudiante de Ingeniería en Informática cursando el cuarto semestre,
                    interesado en el desarrollo web, programación y creación de
                    soluciones tecnológicas.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">

                    <a href="#PORTAFOLIO"
                       className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500">
                        Ver portafolio
                    </a>

                    <a href="#CONTACTO"
                       className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 font-semibold text-slate-200 transition hover:border-blue-500 hover:text-blue-400">
                        Contactarme
                    </a>

                </div>

            </div>

        </section>
    )
}

export default Cv