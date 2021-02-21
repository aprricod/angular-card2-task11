import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp4',
  template: `<div class="comp4">
    <p>comp4 works!</p>
  </div>`,
  styles: [
    `
      .comp4 {
        color: red;
        font-style: italic;
      }
    `,
  ],
})
export class Comp4Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
