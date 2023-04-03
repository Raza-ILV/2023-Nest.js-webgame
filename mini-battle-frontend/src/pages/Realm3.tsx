import { useEffect, useState } from "react";
import { Navbar } from "../parts/Navbar";

export function Realm3(){
    const [warriors, setWarriors] = useState()

    useEffect(() => {
        fetch("http://localhost:8080/warriors/factions/samurais")
        .then(res => { return res.json() })
        .then(data => { setWarriors(data) })
    }, [])
    console.log(warriors)


    return (
        <div className="container min-w-full min-h-screen m-0 p-3 bg-samurais">
            <Navbar/>
        </div>
    )
}