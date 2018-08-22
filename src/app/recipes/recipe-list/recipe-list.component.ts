import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Cheeze Pizza', 'Can be used as a main dish or apetizer', 'https://images.media-allrecipes.com/userphotos/250x250/31008.jpg'),
    new Recipe('Cheeze Pizza', 'Can be used as a main dish or apetizer', 'https://images.media-allrecipes.com/userphotos/250x250/31008.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
