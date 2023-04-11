import { K_R1_MAX_POWER, K_R2_MAX_POWER, K_R3_MAX_POWER, K_SURV_CHANCE } from "../config/CKnight";
import { S_R1_MAX_POWER, S_R2_MAX_POWER, S_R3_MAX_POWER, S_SURV_CHANCE } from "../config/CSamurai";
import { V_R1_MAX_POWER, V_R2_MAX_POWER, V_MAX_POWER_UPGRADE, V_MIN_POWER_UPGRADE, V_R3_MAX_POWER, V_SURV_CHANCE } from "../config/CViking";
import { IWarrior } from "../interfaces/IWarrior";

export const warriorSurv = (warrior:IWarrior):boolean => {
    switch (warrior.faction){
        case "vikings":
            if(Math.random() * 100 < V_SURV_CHANCE){
                return true
            } else {
                return false
            }
        case "knights":
            if(Math.random() * 100 < K_SURV_CHANCE){
                return true
            } else {
                return false
            }
        case "samurais":
            if(Math.random() * 100 < S_SURV_CHANCE){
                return true
            } else {
                return false
            }
        default:
            return false
    }
}

export const warriorUpgrade = (warrior:IWarrior):IWarrior => {
    const NPower = Math.floor(Math.random() * V_MAX_POWER_UPGRADE) + V_MIN_POWER_UPGRADE
    const NWarrior = warrior

    switch(warrior.faction){
        case "vikings":
            if(warrior.rank === "berserker"){
                if(warrior.power + NPower <= V_R1_MAX_POWER){
                    NWarrior.power = warrior.power + NPower
                } else {
                    NWarrior.power = warrior.power + NPower
                    NWarrior.rank = "thrall"
                }
            } else 
            if(warrior.rank === "thrall"){
                if(warrior.power + NPower <= V_R2_MAX_POWER){
                    NWarrior.power = warrior.power + NPower
                } else {
                    NWarrior.power = warrior.power + NPower
                    NWarrior.rank = "jarl"
                }
            } else 
            if(warrior.rank === "jarl"){
                if(warrior.power + NPower <= V_R3_MAX_POWER){
                    NWarrior.power = warrior.power + NPower
                } else {
                    NWarrior.power = V_R3_MAX_POWER
                }
            }
            return NWarrior
        case "knights":
            if(warrior.rank === "knight"){
                if(warrior.power + NPower <= K_R1_MAX_POWER){
                    NWarrior.power = warrior.power + NPower
                } else {
                    NWarrior.power = warrior.power + NPower
                    NWarrior.rank = "oficer"
                }
            } else 
            if(warrior.rank === "oficer"){
                if(warrior.power + NPower <= K_R2_MAX_POWER){
                    NWarrior.power = warrior.power + NPower
                } else {
                    NWarrior.power = warrior.power + NPower
                    NWarrior.rank = "lord"
                }
            } else 
            if(warrior.rank === "lord"){
                if(warrior.power + NPower <= K_R3_MAX_POWER){
                    NWarrior.power = warrior.power + NPower
                } else {
                    NWarrior.power = K_R3_MAX_POWER
                }
            }
            return NWarrior
        case "samurais":
            if(warrior.rank === "swordsman"){
                if(warrior.power + NPower <= S_R1_MAX_POWER){
                    NWarrior.power = warrior.power + NPower
                } else {
                    NWarrior.power = warrior.power + NPower
                    NWarrior.rank = "samurai"
                }
            } else 
            if(warrior.rank === "samurai"){
                if(warrior.power + NPower <= S_R2_MAX_POWER){
                    NWarrior.power = warrior.power + NPower
                } else {
                    NWarrior.power = warrior.power + NPower
                    NWarrior.rank = "shogun"
                }
            } else 
            if(warrior.rank === "shogun"){
                if(warrior.power + NPower <= S_R3_MAX_POWER){
                    NWarrior.power = warrior.power + NPower
                } else {
                    NWarrior.power = S_R3_MAX_POWER
                }
            }
            return NWarrior
        default:
            return NWarrior
    }
}