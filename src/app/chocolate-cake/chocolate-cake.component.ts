import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chocolate-cake',
  templateUrl: './chocolate-cake.component.html',
  styleUrls: ['./chocolate-cake.component.css']
})
export class ChocolateCakeComponent implements OnInit {

  constructor() { }

  cakes = [
    {name: 'Cherry Brandy Chocolate Cake', dis: 'Cherry Brandy Special', url: '../assets/images/choco/cherry-brandy.webp', price: 1500},
    {name: 'Chocolate Fudge Cake', dis: 'Soo Rich and decadent', url: '../assets/images/choco/choco-fudge.webp', price: 1750 },
    {name: 'Chocolate Cake', dis: 'Chocolate Lovers may be love this', url: '../assets/images/choco/chocolate-cake.webp', price: 1000},
    {name: 'Chocolate Mud Cake', dis: 'This is definitely The best ever cake for Chocolate lovers', price: 1250, url: '../assets/images/choco/choco-mud.webp'},
    {name: 'Chocolate Muse Cake', dis: 'Taste of heven', url: '../assets/images/choco/choco-muse.webp', price: 1250},
    {name: 'Roasted Nut Chocolate Cake', dis: 'My Favorite Cake' , url: '../assets/images/choco/choco-nut.webp', price: 2000},
    {name: 'Chocolate Swiss Role', dis: 'Tea time special', url: '../assets/images/choco/choco-swiss.webp', price: 150}
  ];


  ngOnInit(): void {
  }

}
