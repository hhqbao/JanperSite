import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-nav-menu',
  templateUrl: 'left-nav-menu.component.html',
})
export class LeftNavMenuComponent implements OnInit {
  isMainLevelOpen = false;
  isSubLevelOpen = false;

  constructor() {}

  ngOnInit() {}
}
