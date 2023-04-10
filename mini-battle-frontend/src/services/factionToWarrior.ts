import { V_R1_MIN_POWER, V_R1_MAX_POWER, V_FIRST_NAME, V_LAST_NAME } from "../config/CViking";
import { IWarrior } from "../interfaces/IWarrior";

export const factionToWarrior = (faction:string):IWarrior => {
    switch (faction){
        case "vikings":
            const viking:IWarrior = {
                faction: "vikings",
                rank: "berserker",
                power: Math.floor(Math.random() * V_R1_MAX_POWER) + V_R1_MIN_POWER,
                firstName: V_FIRST_NAME[Math.floor(Math.random() * V_FIRST_NAME.length)],
                lastName: V_LAST_NAME[Math.floor(Math.random() * V_LAST_NAME.length)],
            }
            return viking
        default:
            const noname:IWarrior = {
                faction: "nofaction",
                rank: "norank",
                power: 1,
                firstName: "noname",
                lastName: "noname",
            }
            return noname
    }
}