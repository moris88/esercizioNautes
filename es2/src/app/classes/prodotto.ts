import { Iprodotto } from './iprodotto';
export class Prodotto implements Iprodotto{
    id: number;
    image!: string;
    description: string;
    quantity!: number;
    price!: number;
    state!: boolean;

    constructor(){
        this.id = 0;
        this.description = '';
    }

}