import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
recipies=[];
  constructor() { }

  ngOnInit() {
  }

}
