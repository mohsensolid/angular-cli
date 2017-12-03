import {RouterModule,Routes} from '@angular/router'
import { RecipesComponent } from 'app/recipes/recipes.component';
import { ShoppingListComponent } from 'app/shopping-list/shopping-list.component';
import { RECIPE_ROUTES } from 'app/recipes/recipes.route';
const APP_ROUTES:Routes = [
    {path:'',redirectTo:'/recipes',pathMatch:'full'},
    {path:'recipes',component:RecipesComponent,children:RECIPE_ROUTES},
    {path:'shopping-list',component:ShoppingListComponent},
    {path:'**',redirectTo:'/recipes'},
    
];
export const route = RouterModule.forRoot(APP_ROUTES);