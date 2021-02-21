import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp2',
  template: `<div class="comp2"><p>comp2 works!</p></div>`,
  styleUrls: ['./comp2.component.css'],
})
export class Comp2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
