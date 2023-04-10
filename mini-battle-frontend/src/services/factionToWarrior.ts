
import { K_FIRST_NAME, K_LAST_NAME, K_R1_MAX_POWER, K_R1_MIN_POWER } from "../config/CKnight";
import { V_FIRST_NAME, V_LAST_NAME, V_R1_MAX_POWER, V_R1_MIN_POWER } from "../config/CViking";
import { IWarrior } from "../interfaces/IWarrior";

export const factionToWarrior = (faction:string):IWarrior => {
    switch (faction){
        case "vikings":
            const viking:IWarrior = {
                faction: "vikings",
                rank: "berserker",
                power: Math.floor(Math.random() * (V_R1_MAX_POWER - V_R1_MIN_POWER - 1) + V_R1_MIN_POWER) ,
                firstName: V_FIRST_NAME[Math.floor(Math.random() * V_FIRST_NAME.length)],
                lastName: V_LAST_NAME[Math.floor(Math.random() * V_LAST_NAME.length)],
            }
            return viking
        case "knights":
                const knight:IWarrior = {
                    faction: "knights",
                    rank: "knight",
                    power: Math.floor(Math.random() * (K_R1_MAX_POWER - K_R1_MIN_POWER - 1) + K_R1_MIN_POWER) ,
                    firstName: K_FIRST_NAME[Math.floor(Math.random() * K_FIRST_NAME.length)],
                    lastName: K_LAST_NAME[Math.floor(Math.random() * K_LAST_NAME.length)],
                }
                return knight
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