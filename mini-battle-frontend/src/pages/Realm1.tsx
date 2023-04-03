import { useEffect, useState } from "react";
import { Warrior } from "../interfaces/warrior.interface";
import { Navbar } from "../parts/Navbar";

export function Realm1(){
    const [warriors, setWarriors] = useState()

    useEffect(() => {
        fetch("http://localhost:8080/warriors/factions/vikings")
        .then(res => { return res.json() })
        .then(data => { setWarriors(data) })
    }, [])
    console.log(warriors)
    return (
        <div className="container min-w-full min-h-screen m-0 p-3 bg-vikings">
        <Navbar/>
    </div>
    )
}