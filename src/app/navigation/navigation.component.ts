import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
declare var firebase: any

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  el: any;
  secEl: any;
  setActiveRoute(activeEl, el1, el2, el3?) {

  }
  setActive(el, secEl) {

    el.style.backgroundColor = '#2e6da4';
    secEl.style.backgroundColor = '#337ab7';
  }
  logout() {
    this.dataService.setNavBar('noAuth');

    firebase.auth().signOut().then(function () {
      localStorage.clear();
      // Sign-out successful.
    }, function (error) {
      // An error happened.
    });
  }
}