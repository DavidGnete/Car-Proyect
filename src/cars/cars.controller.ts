import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { UUIDTypes, v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto/index';


@Controller('cars')
export class CarsController {

    constructor( 
        private readonly CarsService: CarsService
    ){}

    @Get()
    getAllcars() {
        return this.CarsService.findAll();
    }


    @Get(':id')
    getCarById( @Param ('id', ParseUUIDPipe) id: string) {
        console.log ({id})
        return this.CarsService.finOnebyID(id);
    }

    @Post()
    createCard( @Body() createCarDto: CreateCarDto ) {
        return this.CarsService.create(createCarDto);
    }

    @Patch(':id')
    UpdateCard(
        @Param('id', ParseUUIDPipe ) id: string,
        @Body() UpdateCarDto: UpdateCarDto)
    {

        return this.CarsService.update(id, UpdateCarDto);
    }

    @Delete(':id')
    DeleteCard( @Param('id', ParseUUIDPipe) id: string ) {
        return this.CarsService.Delete( id )
    }
}
