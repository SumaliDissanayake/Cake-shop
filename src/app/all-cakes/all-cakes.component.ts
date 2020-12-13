import { Component, OnInit } from '@angular/core';








@Component({
  selector: 'app-all-cakes',
  templateUrl: './all-cakes.component.html',
  styleUrls: ['./all-cakes.component.css']
})
export class AllCakesComponent implements OnInit {

  constructor() { }

  cakes = [
  {name: 'Chocolate Cake', dis: 'Chocolate Lovers may be love it.', url: '../assets/images/choco/chocolate-cake.webp', price: 960},
  {name: 'Chocolate Cake with Roasted Nut', dis: 'My Favorite Cake', url: '../assets/images/choco/choco-nut.webp',
   price: 1360},
  {name: 'Chocolate Cherry Brany Cake', dis: 'Cherry Brandy Special.', url: '../assets/images/choco/cherry-brandy.webp',
   price: 1510},
  {name: 'Chocolate Fudge Cake', dis: 'Soo Rich and decadent.', url: '../assets/images/choco/choco-fudge.webp', price: 1210},
  {name: 'Chocolate Mousse', dis: 'Chocolate Lovers may be love it.', url: '../assets/images/choco/choco-muse.webp', price: 1700},
  {name: 'Chocolate Mud Cake', dis: 'This is definitely The best ever cake for Chocolate lovers.', url: '../assets/images/choco/choco-mud.webp', price: 1210},
  {name: 'Chocolate Swiss Roll', dis: 'Tea time special.', url: '../assets/images/choco/choco-swiss.webp', price: 1060},
  {name: 'X-mas Snow man ribbon cake', dis: 'Chocolate Lovers may be love it.'
  , url: '../assets/images/christmas cake/x-mas-snow-man.webp', price: 1600},
  {name: 'X-mas ribbon Cake', dis: 'Chocolate Lovers may be love it.', url:
  '../assets/images/christmas cake/x-mas-ribbon.webp', price: 1200},
  {name: 'X-mas tree ribbon Cake', dis: 'Chocolate Lovers may be love it.', url:
   '../assets/images/christmas cake/x-mas-tree.webp', price: 1600},
  {name: 'X-mas chocolate cake', dis: 'A Christmas Favorite.', url:
  '../assets/images/christmas cake/x-mas-choco.webp', price: 1200},
  {name: 'Black Forest Gateau', dis: 'A Winter classic!.', url: '../assets/images/gateau/black-forest.webp'
  , price: 1920},
  {name: 'Devil Chocolate Gateau', dis: 'Chocolate Lovers may be love it.', url: '../assets/images/gateau/choco-devil.webp', price: 2670},
  {name: 'Chocolate Gateau', dis: 'Chocolate Lovers may be love it.', url: '../assets/images/gateau/choco-gateau.webp', price: 1700},
  {name: 'Mixed Fruit Gateau', dis: 'Chocolate Lovers may be love it.', url: '../assets/images/gateau/mixed-fruit.webp', price: 2670},
  {name: 'Mocha Gateau', dis: 'Chocolate Lovers may be love it.', url: '../assets/images/gateau/mocha-gateau.webp', price: 1760},
  {name: 'Pineapple Gateau', dis: 'Chocolate Lovers may be love it.', url: '../assets/images/gateau/pineapple-gateau.webp', price: 1700},
  {name: 'Valentine Cake', dis: 'Ribbon Cake (design1).', url: '../assets/images/ribbon cake/valentines-1.webp', price: 3000},
  {name: 'Valentine Cake', dis: 'Ribbon Cake (design2).', url: '../assets/images/ribbon cake/valentines-2.webp', price: 3000},
  {name: 'Valentine Cake', dis: 'Ribbon Cake (design3)', url: '../assets/images/ribbon cake/valentines-3.webp', price: 3000},
  {name: 'Valentine Cake', dis: 'Ribbon Cake (design4)', url: '../assets/images/ribbon cake/valentines-4.webp', price: 2500},
  {name: 'X-mas Cup Cake', dis: 'Chocolate Lovers may be love it.', url: '../assets/images/cup cake/x-mas-cup.webp', price: 120},
  {name: 'Blueberry Cheese Cake', dis: 'Chocolate Lovers may be love it.', url: '../assets/images/cup cake/blueberry-cup.jpg', price: 170},
  {name: 'Chocolate Cup Cake', dis: 'Chocolate Lovers may be love it.', url: '../assets/images/cup cake/choco-cup.jpg', price: 130},
  {name: 'Chocolate Mousse Cup Cake', dis: 'Chocolate Lovers may be love it.', url: '../assets/images/cup cake/mousse-cup.jpg', price: 150},
  {name: 'Chocolate Mud Cup Cake', dis: 'Chocolate Lovers may be love it.', url: '../assets/images/cup cake/choco-mud-cup.jpg', price: 200},
  {name: 'Fruit Trifle Cup Cake', dis: 'Chocolate Lovers may be love it.', url: '../assets/images/cup cake/fruit-trifle-cup.jpg'
  , price: 130},
  {name: 'Strowberry Cheese Cake Cup', dis: 'Chocolate Lovers may be love it.', url: '../assets/images/cup cake/strowberry-cheese-cup.jpg'
  , price: 170},
  {name: 'Tiramisu Cup Cake', dis: 'Chocolate Lovers may be love it.', url: '../assets/images/cup cake/tiramisu-cup.jpg', price: 150},
  {name: 'Vanilla Cup Cake', dis: 'Chocolate Lovers may be love it.', url: '../assets/images/cup cake/vanilla-cup.webp', price: 130},

  ];

  ngOnInit(): void {
  }

}
