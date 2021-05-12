import { Prodotto } from './../../../../es1/src/app/classes/prodotto';
import { state, style, trigger, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ProdottoService } from '../services/prodotto.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('toggleBox', [
      state('hide', style({
        transform: 'translateY(-170%)',
        opacity: 0,
      })),
      state('show', style({
        opacity: 1,
        transform: 'translateY(0)',
      })),
      transition('show => hide', [
        animate('300ms')
      ]),
      transition('hide => show', [
        animate('300ms')
      ]),
    ])
  ]
})
export class MainComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  _show = false;

  constructor(private serviceProdotto: ProdottoService) { }

  ngOnInit(): void {
  }

  get stateName(): any{
    return this._show ? 'show' : 'hide';
  }

  getShow(): boolean{
    return this._show;
  }

  setShow(choose: boolean): void{
    this._show = choose;
  }

  addProdotto(event: Prodotto): void{
    this.serviceProdotto.addFruit(event);
  }

}
