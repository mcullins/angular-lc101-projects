import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  title: string = "My Favorite Links";
  favLinks: string[] = ["https://pluralsight.com", "https://www.hermanmiller.com/", "https://www.akc.org/dog-breeds/pembroke-welsh-corgi/"];
  constructor() { }

  ngOnInit() {
  }

}
