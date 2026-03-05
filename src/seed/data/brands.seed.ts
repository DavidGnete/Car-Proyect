
import { Brand } from 'src/brands/entities/brand.entity'
import {v4 as uuid} from 'uuid'

export const BRAND_SEED: Brand[] = [
    {
        id: uuid(),
        name: 'Volvo',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Monster',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Teslita',
        createdAt: new Date().getTime(),
    },
    
]