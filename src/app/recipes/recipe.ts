import { Ingredinet } from "app/model/ingredinet";

export class Recipe {
    constructor(public name:string,public description:string,public imagePath:string,public ingredients:Ingredinet[]){
        
    }
}
