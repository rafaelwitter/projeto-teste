import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Render, Req, Request, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { request } from 'express';
import { Dog } from 'src/dog.entity';
import { ObjectID, Repository } from 'typeorm';

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

    @Get('list')
    @Render('dog_list')
    async dog_list(){
        const dogs = await this.dogRepo.find();
        return {layout: false, dogs};
    }

    @Get('create')
    @Render('dog_create')
    async dog_create(){
        return {layout: false}
    }

    @Post('create')
    async store(@Body() body: Dog){
        const dog = this.dogRepo.create(body)
        await this.dogRepo.save(dog)
        return "Created success"
    }

    @Put('update/:id')
    async modify(@Param('id') id: string, @Body() body: Dog): Promise<Dog>{
        this.dogRepo.findOne(id);
        this.dogRepo.update({id: +id}, body);
        console.log(body);
        return this.dogRepo.findOne(id);
    }

    @Delete('delete/:id')
    @HttpCode(204)
    async remove(@Param('id') id: string): Promise<void> {
        await this.dogRepo.delete(+id);
        console.log('oi');
    }
}
