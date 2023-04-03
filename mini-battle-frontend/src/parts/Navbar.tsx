import { Link } from "react-router-dom";

export function Navbar(){
    return (
        <nav className="
            flex justify-evenly items-center
            w-full h-20 
            p-3 
            rounded border-2 bg-white">
            <Link to={"/"} className="
                font-extrabold uppercase
                sm:hidden md:flex none: hidden
                md: text-3xl
                underline hover:underline-offset-8 text-slate-700"
            >
                mini-battle
            </Link>


            <div className="
                spacer md:grow sm:grow-0">
                </div>


            <Link to={"/vikings-realm"} className="
                font-medium uppercase
                sm:text-sm md:text-xl lg:text-3xl
                m-2 md:m-3
                text-slate-700"
            >
                vikings
            </Link>
            <Link to={"/knights-realm"} className="
                font-medium uppercase
                sm:text-sm md:text-xl lg:text-3xl
                m-2 md:m-3
                text-slate-700"
            >
                knights
            </Link>
            <Link to={"/samurais-realm"} className="
                font-medium uppercase
                sm:text-sm md:text-xl lg:text-3xl
                m-2 md:m-3
                text-slate-700"
            >
                samurais
            </Link>
        </nav>
    )
}