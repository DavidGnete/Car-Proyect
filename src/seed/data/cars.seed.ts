import { Car } from "src/cars/interface/car.interface";
import {v4 as uuid} from 'uuid'

export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: "toyota",
        model: 'Seal 17'
    },
    {
        id: uuid(),
        brand: "Tesla",
        model: 'Seaal 2017'
    },
    {
        id: uuid(),
        brand: "Monster",
        model: 'Civic'
    }

]