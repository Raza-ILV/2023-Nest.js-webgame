import { Controller, Body, Get, Post, Put, Delete, HttpCode, Param} from '@nestjs/common';
import { WarriorsService } from './warriors.service';
import { Warrior } from './interfaces/warrior.interface';

@Controller('warriors')
export class WarriorsController {
    constructor(private readonly ws: WarriorsService){}
// 
//  See all of the boys-warriors in hub!
    @Get()
    checkWarriors():Promise<Warrior[]> {
        return this.ws.findAll()
    }
//
//  See one specific boy-warrior
    @Get(":id")
    checkWarrior(@Param("id") id):Promise<Warrior> {
        return this.ws.findOne(id)
    }
//
//  See all boys-warriors in faction!
    @Get("factions/:faction")
    checkFaction(@Param("faction") faction):Promise<Warrior[]> {
        return this.ws.findFaction(faction)
    }
//
//  See all boys-warriors in same rank!
    @Get("rank/:rank")
    checkRank(@Param("rank") rank):Promise<Warrior[]> {
        return this.ws.findRank(rank)
    }
//
//  Let`s reqruit more boys-warriors!
    @Post()
    @HttpCode(201)
    reqruitWarrior(@Body() warrior: Warrior):Promise<Warrior> {
        return this.ws.create(warrior)
    }
// 
//  Test your luck and and fight to make boy-warrior better!
    @Put(":id")
    sendWarrior(@Param("id") id, @Body() warrior:Warrior):Promise<Warrior> {
        return this.ws.upgradeRank(id, warrior)
    }
//
//  R.I.P. boy-warrior =(
    @Delete(":id")
    ripWarrior(@Param("id") id):Promise<Warrior> {
        return this.ws.delete(id)
    }
}
