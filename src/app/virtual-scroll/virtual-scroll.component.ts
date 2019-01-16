import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css']
})
export class VirtualScrollComponent implements OnInit {

  numbers: number[] = [];

  constructor() { 
    for (let index = 0; index < 1000; index++) {
      this.numbers.push(index);
  }
  }

  ngOnInit() {
  }

}
