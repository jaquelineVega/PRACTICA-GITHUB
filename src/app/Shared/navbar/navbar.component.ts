import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from "rxjs/operators";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  breadcrumb: any={};
  constructor(private router: Router) {
      this._getBreadcrumb().subscribe(event =>{
        this.breadcrumb=event;
      });
   }

  ngOnInit() {
  }

  _getBreadcrumb(){
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      map((event: ActivationEnd) => event.snapshot.data)
    )
  }

}
