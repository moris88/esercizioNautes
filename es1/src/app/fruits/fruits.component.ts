import { Prodotto } from './../classes/prodotto';
import { ProdottoService } from './../services/prodotto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  prodotti!: Prodotto[];

  constructor(private prodottiServices: ProdottoService) { }

  ngOnInit(): void {
    this.prodotti = this.prodottiServices.getFruits();
  }

  delete(prodotto: any){
    this.prodottiServices.deleteFruit(prodotto);
  }

}
