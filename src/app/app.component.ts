import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'billtime';
  path = window.location.pathname.indexOf('print') === -1;
  constructor(private act: ActivatedRoute,private router: Router) {
    this.router.events.subscribe(res => {
      this.path = window.location.pathname.indexOf('print') === -1;
    });
  }
}
