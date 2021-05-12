import { Iprodotto } from './iprodotto';
export class Prodotto implements Iprodotto{
    id: number;
    image: string;
    description: string;
    quantity: number;
    price: number;
    state: boolean;

    constructor(){
        this.id = 0;
        this.image = '';
        this.description = '';
        this.quantity = 0;
        this.price = 0;
        this.state = false;
    }

}
