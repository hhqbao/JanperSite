import { Component, OnInit, ViewChild } from '@angular/core';
import { LeftNavMenuComponent } from 'src/app/components/left-nav-menu/left-nav-menu.component';

@Component({
  selector: 'app-layout-1',
  templateUrl: 'layout-1.component.html',
})
export class Layout1Component implements OnInit {
  @ViewChild('leftNavMenu') leftNavMenu!: LeftNavMenuComponent;

  constructor() {}

  ngOnInit() {}
}
