import React, { useEffect, useState } from 'react'

import axios from "axios";

import { Header } from '../parts/Header'
import { IWarrior } from '../../interfaces/IWarrior';
import { rankToImage } from '../../services/rankToImage';
import { factionToWarrior } from '../../services/factionToWarrior';
import { warriorSurv, warriorUpgrade } from '../../services/warriorUpgrade';
import { V_R3_MAX_POWER } from '../../config/CViking';

export const VikingsRealm = () => {

    const [showR1, setShowR1] = useState<boolean>(true)
    const [showR2, setShowR2] = useState<boolean>(false)
    const [showR3, setShowR3] = useState<boolean>(false)

    const [allR1, setAllR1] = useState<IWarrior[]>([])
    const [allR2, setAllR2] = useState<IWarrior[]>([])
    const [allR3, setAllR3] = useState<IWarrior[]>([])

    useEffect(() => {
        axios.get("http://localhost:8080/warriors/rank/berserker")
            .then((res) => {setAllR1(res.data)})   
            .catch((err) => {console.log(err)}) 
        axios.get("http://localhost:8080/warriors/rank/thrall")
            .then((res) => {setAllR2(res.data)}) 
            .catch((err) => {console.log(err)}) 
        axios.get("http://localhost:8080/warriors/rank/jarl")
            .then((res) => {setAllR3(res.data)}) 
            .catch((err) => {console.log(err)}) 
    }, [])

    const createWarrior = (faction:string):void => {
        axios.post("http://localhost:8080/warriors", factionToWarrior(faction))
            .then((res) => {setAllR1(allR1.reverse().concat(res.data).reverse()); console.log("DEV: New dude...");console.table(res.data)})
            .catch((err) => {console.log(err)})  
    }

    const updateWarrior = (warrior:IWarrior):void => {
        const temp:string = warrior.rank
        if(warrior.power === V_R3_MAX_POWER){
            alert("full")
        } else {
            if(warriorSurv(warrior)){
                axios.put("http://localhost:8080/warriors/" + warrior._id, warriorUpgrade(warrior))
                    .then((res) => {
                        if(res.data.rank === temp){
                            setAllR1(allR1.filter((war:IWarrior) => {return war.rank === "berserker"}))
                            setAllR2(allR2.filter((war:IWarrior) => {return war.rank === "thrall"}))
                            setAllR3(allR3.filter((war:IWarrior) => {return war.rank === "jarl"}))
                        } else
                        if(temp === "berserker" && res.data.rank === "thrall"){
                            setAllR1(allR1.filter((war:IWarrior) => {return war.rank === "berserker"}))
                            setAllR2(allR2.concat(res.data))
                        } else 
                        if(temp === "thrall" && res.data.rank === "jarl"){
                            setAllR2(allR2.filter((war:IWarrior) => {return war.rank === "thrall"}))
                            setAllR3(allR3.concat(res.data))
                        }
                    })
                    .catch((err) => {console.log(err)})  
            } else {
                axios.delete("http://localhost:8080/warriors/" + warrior._id)
                    .then((res) => {
                        setAllR1(allR1.filter(war => war._id !== res.data._id))
                        setAllR2(allR2.filter(war => war._id !== res.data._id))
                        setAllR3(allR3.filter(war => war._id !== res.data._id))
                        console.log("DEV: Remove dude...")
                        console.table(res.data)
                    })
                    .catch((err) => {console.log(err)})  
            }
        }

    }

    // RANK 1 SECTION + SWITCHER + "CREATE" 
    const sectionR1switch:JSX.Element = <>

        <section    className="w-full flex justify-between items-center">
            <div    className="w-2/5 h-1 bg-slate-800 rounded-md"></div>
            <button className="uppercase font-extrabold text-slate-800 hover:underline" onClick={() => {showR1 ? setShowR1(false) : setShowR1(true)}}>berserkers</button>
            <div    className="w-2/5 h-1 bg-slate-800 rounded-md"></div>
        </section>

    </>
    const sectionR1:JSX.Element = <>

        <div className='w-full  warrior-item flex flex-wrap justify-center'>
            <div className="recruit w-28 h-44 m-1 p-0 bg-orange-400 rounded-md shadow-lg flex flex-col justify-center items-center cursor-pointer" onClick={() => {createWarrior("vikings")}}>
                <div className="w-24 h-24 bg-berserker-e bg-cover"></div>
                <p className="uppercase font-thin text-xs mt-1">reqcruit new</p>
                <p className="uppercase font-semibold text-sm">power: ???</p>
            </div>
            {allR1.map((warrior:IWarrior):JSX.Element => {
                return (
                    <div className="warrior w-28 h-44 m-1 p-0 bg-orange-400 rounded-md shadow-lg flex flex-col justify-center items-center cursor-pointer" key={warrior._id} onClick={() => {
                        updateWarrior(warrior)
                    }}>
                        <div className={`w-24 h-24 ${rankToImage(warrior.rank)} bg-cover`}></div>
                        <p className="uppercase font-thin text-xs mt-1">{warrior.firstName} {warrior.lastName}</p>
                        <p className="uppercase font-semibold text-sm">power: {warrior.power}</p>
                    </div>
                )
            })}
        </div>
    </>

    // RANK 2 SECTION + SWITCHER
    const sectionR2switch:JSX.Element = <>

        <section    className="w-full flex justify-between items-center">
            <div    className="w-2/5 h-1 bg-slate-800 rounded-md"></div>
            <button className="uppercase font-extrabold text-slate-800 hover:underline" onClick={() => {showR2 ? setShowR2(false) : setShowR2(true)}}>thralls</button>
            <div    className="w-2/5 h-1 bg-slate-800 rounded-md"></div>
        </section>

    </>
    const sectionR2:JSX.Element = <>

        <div className='w-full warrior-item flex flex-wrap justify-center'>
            {allR2.map((warrior:IWarrior):JSX.Element => {
                return (
                    <div className="warrior w-28 h-44 m-1 p-0 bg-orange-400 rounded-md shadow-lg flex flex-col justify-center items-center cursor-pointer" key={warrior._id} onClick={() => {
                        updateWarrior(warrior)
                    }}>
                        <div className={`w-24 h-24 ${rankToImage(warrior.rank)} bg-cover`}></div>
                        <p className="uppercase font-thin text-xs mt-1">{warrior.firstName} {warrior.lastName}</p>
                        <p className="uppercase font-semibold text-sm">power: {warrior.power}</p>
                    </div>
                )
            })}
        </div>

    </>

    // RANK 3 SECTION + SWITCHER
    const sectionR3switch:JSX.Element = <>

        <section    className="w-full flex justify-between items-center">
            <div    className="w-2/5 h-1 bg-slate-800 rounded-md"></div>
            <button className="uppercase font-extrabold text-slate-800 hover:underline" onClick={() => {showR3 ? setShowR3(false) : setShowR3(true)}}>jarls</button>
            <div    className="w-2/5 h-1 bg-slate-800 rounded-md"></div>
        </section>

    </>
    const sectionR3:JSX.Element = <>

        <div className='w-full warrior-item flex flex-wrap justify-center'>
            {allR3.map((warrior:IWarrior):JSX.Element => {
                return (
                    <div className="warrior w-28 h-44 m-1 p-0 bg-orange-400 rounded-md shadow-lg flex flex-col justify-center items-center cursor-pointer" key={warrior._id} onClick={() => {
                        updateWarrior(warrior)
                    }}>
                        <div className={`w-24 h-24 ${rankToImage(warrior.rank)} bg-cover`}></div>
                        <p className="uppercase font-thin text-xs mt-1">{warrior.firstName} {warrior.lastName}</p>
                        <p className="uppercase font-semibold text-sm">power: {warrior.power}</p>
                    </div>
                )
            })}
        </div>

    </>

    return (
    <div className="w-full min-h-screen m-0 p-3 bg-orange-500 flex flex-col ">
        <Header />
            {sectionR1switch}
            {showR1 ? sectionR1 : <></>}
            {sectionR2switch}
            {showR2 ? sectionR2 : <></>}
            {sectionR3switch}
            {showR3 ? sectionR3 : <></>}
    </div>
    )
}
