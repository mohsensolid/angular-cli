import { Recipe } from "app/recipes/recipe";
import { Ingredinet } from "app/model/ingredinet";
import { Headers,Http } from "@angular/http";
import { Injectable,EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Rx";
import "rxjs/Rx"
@Injectable()
export class RecipeService {
  public recipesChanges = new EventEmitter<Recipe[]>();
 private recipes:Recipe[]=[new Recipe('مرغ',"مرغ شکم پر با بهترین مواد خوراکی ","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIWR7Ggsq11NPFyQlMSCerst-XH9N09HtE2RyU4kWtj7sZMdkb",[
   new Ingredinet('مرغ',1),
   new Ingredinet('هویچ',3)
 ]),
  new Recipe('ماکرونی',"ماکرونی شهر های مختلف  با مواد عالی","https://tfv.goodblogscdn.com/sites/www.theflamingvegan.com/post_images/originals/2014.jpg",[])
];
constructor(private http:Http){

}
deleteRecipe(value: Recipe): void {
this.recipes.splice(this.recipes.indexOf(value),1);
}
getRecipes(){
  return this.recipes;
}
addRecipe(recipe: Recipe) {
  this.recipes.push(recipe);
}
getRecipe(id:number):Recipe{
  return this.recipes[id];
}
editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
  this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
}
storeData():Observable<any>{
const body = JSON.stringify(this.recipes);
const headers = new Headers({
'Content-Type':'application/json'
});
return this.http.put('https://recipebook-214e9.firebaseio.com/recipes.json',body,
{headers});
}
fetchData(){
  return this.http.get('https://recipebook-214e9.firebaseio.com/recipes.json')
  .map(data=><Recipe[]>data.json())
  .do(data=>{console.log(data);
      this.recipes=data})
      .subscribe(data=>{this.recipes=data
        this.recipesChanges.emit(data)});
}
}
