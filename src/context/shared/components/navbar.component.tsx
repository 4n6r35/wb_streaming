import { DropdownLanguagesOptionsConstant } from "../../application/constants/language.dropdown.constants"
import { DropdownComponent } from "./dropdown.component"

export const NavbarComponent = () => {
    return (
        <>
            <section className="fixed z-20 w-dvw text-white-2 text-sm grid grid-cols-2 justify-between select-none cursor-pointer">
                <div className="flex flex-row items-center m-5 gap-10 ">
                    <img className="w-10 h-10" src="../../../../src/context/assets/img/rhombus.svg" alt="rhombus-svg" />
                    <h1>Inicio</h1>
                    <h1>TV Shows</h1>
                    <h1>Series</h1>
                    <h1>Peliculas</h1>
                    <h1>Próximamente</h1>
                </div>
                <div className="flex flex-row justify-end m-5 gap-5">
                    <DropdownComponent options={DropdownLanguagesOptionsConstant} />
                    <div className="flex flex-row justify-center gap-5 font-bold text-center text-sm border-l border-l-white w-72">
                        <h1 className="w-28 h-8 border border-white-2 rounded-full flex items-center justify-center">
                            Regístrate
                        </h1>
                        <h1 className="w-28 h-8 border bg-white-2 rounded-full text-black flex items-center justify-center">
                            Iniciar sesión
                        </h1>
                    </div>
                </div>
            </section>
        </>
    )
}