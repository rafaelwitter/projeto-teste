import { Body, Controller, Get, Param, Post, Put, Render, Req, Request } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { request } from 'express';
import { Dog } from 'src/dog.entity';
import { Repository } from 'typeorm';

@Controller('dogs')
export class DogController {

    constructor(
        @InjectRepository(Dog)
        private dogRepo: Repository<Dog>
    ){
    }

    @Get() // API REST
    @Render('dog_index')
    async index(@Req() request: Request){
        const opt = await request;
        console.log(request);
        return {layout: false, opt}
    }

    @Get(':id')
    async show(@Param('id') id: string){
        return this.dogRepo.findOne(id)
    }

    @Get('list')
    @Render('dog_list')
    async dog_list(){
        const dogs = await this.dogRepo.find();
        return {layout: false, dogs};
    }

    @Get('create')
    @Render('dog_create')
    async dog_create(){
        //const dg = await this.dogRepo.create({age:11,race:"pitbull",color:"dark blue"});
        //return this.dogRepo.save(dg);
        return {layout: false}
    }

    @Post('create')
    async store(@Body() body: Dog){
        const dog = this.dogRepo.create(body)
        await this.dogRepo.save(dog)
        return "Created success"
    }

    @Put('update/:id')
    async update(@Param('id') id: string, @Body() body: Dog){
        const dog = await this.dogRepo.findOne(id)
        this.dogRepo.update({id: +id}, body)
        return this.dogRepo.findOne(id)
    }
}
