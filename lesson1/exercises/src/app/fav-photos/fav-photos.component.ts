import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Killer Awesome Photos';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://images-na.ssl-images-amazon.com/images/I/81zkEZ%2B2SwL._SL1500_.jpg';
  image3 = 'https://robots.nu/img/uploads/2019/02/28/little-robot-avatar.png';
  image4 = 'https://media.giphy.com/media/11vhCpFcD3um7m/giphy.gif'

  constructor() { }

  ngOnInit() {
  }

}