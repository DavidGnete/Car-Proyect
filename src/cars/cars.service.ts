import { BadGatewayException, BadRequestException, Injectable, NotFoundException, Delete } from '@nestjs/common';
import { Car } from './interface/car.interface';
import { v4 as uuid, UUIDTypes } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto/index';


@Injectable()
export class CarsService {
    private cars: Car[] = [ 
        {
            id: uuid(),
            brand: 'toyota',
            model: 'corolla'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'seal'
        },
        {
            id: uuid(),
            brand: 'speed',
            model: 'max'
        }
    ]
    findAll(){
        return this.cars
    }

    finOnebyID(id: string){
        const car = this.cars.find(car => car.id === id);

        if (!car) throw new NotFoundException(`car whit id ${id} not found`);
        return car;
    }

    create( CreateCarDto: CreateCarDto) {

        const Newcar: Car = {
            id: uuid(),
            brand: CreateCarDto.brand,
            model: CreateCarDto.model,
        }

        this.cars.push( Newcar);
    
        return Newcar;    
    }

    update(id: string, UpdateCarDto: UpdateCarDto) {

        let carDB = this.finOnebyID(id);

        if ( UpdateCarDto.id && UpdateCarDto.id !== id)
            throw new BadRequestException(`Car id is not valid inside body`);

        this.cars = this.cars.map( car => {

            if ( car.id === id) {
                carDB = { ...carDB,...UpdateCarDto,id}
                return carDB;
            }
            return car;
        })

        return carDB;
    }

    Delete( id: string) {
        const car = this.finOnebyID(id);
        this.cars = this.cars.filter( car => car.id !== id);
        return;
    }

    FillCardsWhitSeedData ( cars: Car[]) {
        this.cars = cars
    }

}

