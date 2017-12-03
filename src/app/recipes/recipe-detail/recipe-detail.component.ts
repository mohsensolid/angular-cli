import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  Recipe
} from 'app/recipes/recipe';
import {
  ShopingListService
} from 'app/shopping-list/shoping-list.service';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  Subscription
} from 'rxjs/Rx';
import { RecipeService } from 'app/recipes/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  selectedRecipe: Recipe;
  private recipeIndex: number = 2;
  private subscription: Subscription;
  constructor(private shopingListService: ShopingListService,
              private recipesService:RecipeService,
     private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.activeRoute.params.subscribe(data => {
      this.recipeIndex = data['id'];
      this.selectedRecipe = this.recipesService.getRecipe( this.recipeIndex)
    });
  }
  onEdit() {
    this.router.navigate(['/recipes', this.recipeIndex, 'edit'])
  }
  onDelete() {
    this.recipesService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }
  onAddToShoppingList() {
    this.shopingListService.addItems(this.selectedRecipe.ingredients);
  }
}
