import { useEffect, useState } from "react";
import { Navbar } from "../parts/Navbar";

export function Realm2(){
    const [warriors, setWarriors] = useState()

    useEffect(() => {
        fetch("http://localhost:8080/warriors/factions/knights")
        .then(res => { return res.json() })
        .then(data => { setWarriors(data) })
    }, [])
    console.log(warriors)

    
    return (
        <div className="container min-w-full min-h-screen m-0 p-3 bg-knights">
        <Navbar/>
        </div>
    )
}