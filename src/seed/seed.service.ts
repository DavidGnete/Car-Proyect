import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRAND_SEED } from './data/brands.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {

  constructor(
    private readonly CarService: CarsService,
    private readonly BrandsService: BrandsService
  ){}


  PopulateDB() {

      this.CarService.FillCardsWhitSeedData(CARS_SEED);
      this.BrandsService.FillCarsWhitingSeedData(BRAND_SEED);

    return 'Seed executed'
  }

  
}
