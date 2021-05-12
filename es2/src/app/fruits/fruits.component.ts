import { Prodotto } from './../classes/prodotto';
import { ProdottoService } from './../services/prodotto.service';
import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css'],
  animations: [
    trigger('toggleBoxMove', [
      state('up', style({
        transform: 'translateY(5px)',
      })),
      state('down', style({
        transform: 'translateY(-110px)',
      })),
      transition('up => down', [
        animate('300ms ease-out')
      ]),
      transition('down => up', [
        animate('300ms ease-in')
      ]),
    ])
  ]
})
export class FruitsComponent implements OnInit, DoCheck {

  prodotti!: Prodotto[];
  // tslint:disable-next-line: variable-name
  @Input() _show!: any;
  // tslint:disable-next-line: variable-name
  private _state = 'up';

  constructor(private prodottiServices: ProdottoService) { }

  ngOnInit(): void {
    this.prodotti = this.prodottiServices.getFruits();
  }

  ngDoCheck(): void {
    this._state = this._show ? 'up' : 'down';
  }

  get stateName(): any{
    return this._state;
  }

  delete(prodotto: any): void{
    this.prodottiServices.deleteFruit(prodotto);
  }

}
