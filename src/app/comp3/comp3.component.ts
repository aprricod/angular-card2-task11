import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp3',
  templateUrl: './comp3.component.html',
  styles: [
    `
      .comp3 {
        color: darkmagenta;
      }
    `,
  ],
})
export class Comp3Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
