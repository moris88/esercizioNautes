import { Prodotto } from './../classes/prodotto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {

  private prodotti!: Prodotto[];

  constructor() {
    this.prodotti = [
      {
        id: 1,
        image: 'assets/images/strawberry.png',
        description: 'Fragole deliziose',
        quantity: 256,
        price: 2.35,
        state: true,
      },
      {
        id: 2,
        image: 'assets/images/lemon.png',
        description: 'Limone succoso',
        quantity: 354,
        price: 1.40,
        state: true,
      },
      {
        id: 3,
        image: 'assets/images/oranges.png',
        description: 'Arancia rossa',
        quantity: 0,
        price: 3.75,
        state: false,
      },
      {
        id: 4,
        image: 'assets/images/pineapple.png',
        description: 'Ananas del Brasile',
        quantity: 123,
        price: 10.60,
        state: true,
      },
      {
        id: 5,
        image: 'assets/images/cherries.png',
        description: 'Ciliegia Ferrovia',
        quantity: 0,
        price: 1.23,
        state: false,
      },
    ];
  }

  getFruits(): Prodotto[]{
    return this.prodotti;
  }

  getFruitById(id: number): any{
    return this.prodotti.find(prodotto => prodotto.id === id);
  }

  setFruits(prodotti: Prodotto[]): void{
    this.prodotti = prodotti;
  }

  addFruit(prodotto: Prodotto): boolean {
    if (prodotto.description.length > 3){
      if (prodotto.id === 0){ // se l'id dell'user è nuovo
        if (this.prodotti.length === 0){
          prodotto.id = 1;
        }else {
          prodotto.id = this.prodotti[this.prodotti.length - 1].id + 1; // inserisco l'id all'user aggiungendo 1 dall'ultimo id dell'array
        }
        this.prodotti.push(prodotto); // inserisco l'user alla fine dell'array
        return true;
      }else { // altrimenti modifica l'id esistente
        const index = this.prodotti.findIndex(p => p.id === prodotto.id); // cerco l'indice dell'user andando a scandire tutto l'array
        this.prodotti.splice(index, 1, prodotto);  // sovrascivo l'user all'array users
        return true;
      }
    }
    return false;
  }

  deleteFruit(prodotto: Prodotto): boolean {
    const index = this.prodotti.indexOf(prodotto); // identifica l'indice dell'user
    if (index > -1){
      this.prodotti.splice(index, 1); // cancello l'user dell'array users
      return true;
    }
    return false;
  }

  deleteFruits(): void{
    this.prodotti.splice(0);
  }
}
