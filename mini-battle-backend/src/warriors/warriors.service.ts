import { Injectable } from '@nestjs/common';
import { Warrior } from './interfaces/warrior.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class WarriorsService {
    constructor(
        @InjectModel("Warrior") private readonly warriorModel:Model<Warrior>
    ){}
    async findStats():Promise<number[]>{
        const battle:Array<number> = []
        battle[0] = (await this.warriorModel.find({faction: "vikings"})).length
        battle[1] = (await this.warriorModel.find({faction: "knights"})).length
        battle[2] = (await this.warriorModel.find({faction: "samurais"})).length
        return battle
    }
    async findAll():Promise<Warrior[]>{
        return await this.warriorModel.find().sort({power: -1})
    }
    async findFaction(faction:string):Promise<Warrior[]>{
        return await this.warriorModel.find({faction: faction}).sort({power: -1})
    }
    async findRank(rank:number):Promise<Warrior[]>{
        return await this.warriorModel.find({rank: rank}).sort({power: -1})
    }
    async findOne(id:string):Promise<Warrior>{
        return await this.warriorModel.findOne({ _id: id })
    }
    async create(warrior: Warrior):Promise<Warrior>{
        const newWarrior = new this.warriorModel(warrior)
        return await newWarrior.save()
    }
    async upgradeRank(id:string, warrior: Warrior):Promise<Warrior>{
            return await this.warriorModel.findByIdAndUpdate(id, warrior) 
    }
    async delete(id:string){
        return await this.warriorModel.findByIdAndRemove(id)
    }
}
