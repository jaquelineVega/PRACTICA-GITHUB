import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: []
})
export class CardComponent implements OnInit {
  @Input() productList: any[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  VerDetalle(codigo:string ){
    this.router.navigate(['product',codigo])
  }

}
