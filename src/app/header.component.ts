import {
  Component,
  OnInit
} from '@angular/core';
import {
  RecipeService
} from 'app/recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}
  onStore() {
    this.recipeService.storeData().subscribe(data => console.log(data.json()),
      erorr => console.log(erorr));
  }
  onRetrive() {
    this.recipeService.fetchData();
  }
}
