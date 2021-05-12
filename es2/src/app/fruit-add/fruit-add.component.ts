import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Prodotto } from '../classes/prodotto';

@Component({
  selector: 'app-fruit-add',
  templateUrl: './fruit-add.component.html',
  styleUrls: ['./fruit-add.component.css']
})
export class FruitAddComponent implements OnInit {

  prodotto!: Prodotto;
  errori: string[] = [] ;
  @Output() addProdotto = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.prodotto = new Prodotto();
  }

  addFruit(): void{
    /*VALIDAZIONE*/
    this.validation();
    if (this.errori.length === 0){
      /*aggiunta delle opzioni*/
      this.addOption();

      /*invio del prodotto al componente padre*/
      this.addProdotto.emit(this.prodotto);

      /*instanziamento di un nuovo prodotto*/
      this.prodotto = new Prodotto();
    } else {
      /*stampa degli errori */
      this.stampError();
    }
  }

  addOption(): void{
    if (this.prodotto.quantity > 0) {
      this.prodotto.state = true;
    }else {
      this.prodotto.state = false;
    }
    this.prodotto.image = 'assets/images/icons/fruit-placeholder.png';
  }

  stampError(): void{
    let errorStamp = '';
    // tslint:disable-next-line: prefer-for-of
    this.errori.forEach(errore => {
      errorStamp += errore + '\n';
    });
    alert(errorStamp);
  }

  validation(): void{
    this.errori = [];

    if (this.prodotto.description.length <= 3 || this.prodotto.description === ''){
      this.errori.push('Inserire una descrizione con un minimo di 4 caratteri');
    }

    if ((this.prodotto.quantity < 0) || (this.prodotto.quantity === undefined) || (this.prodotto.quantity === null)){
      this.errori.push('Inserire una quantità corretta');
    }

    if ((this.prodotto.price < 0) || (this.prodotto.price === undefined) || (this.prodotto.price === null)){
      this.errori.push('Inserire un prezzo corretto');
    }
  }
}
