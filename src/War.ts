import { Viking } from "./Viking.ts";
import { Saxon } from "./Saxon.ts"

export class War {
   vikingArmy : Viking[];
   saxonArmy : Saxon[];
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking: Viking){
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon: Saxon){
        this.saxonArmy.push(Saxon);
    }

    vikingAttack(){
        let randomVikingIndex : number = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxonIndex : number = Math.floor(Math.random() * this.saxonArmy.length);
        
        this.saxonArmy[randomSaxonIndex].receiveDamage(this.vikingArmy[randomVikingIndex].strength)
        if (this.saxonArmy[randomSaxonIndex].health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1);
        } 
        return "A Saxon has died in combat"
    }

    saxonAttack(){
        let randomVikingIndex : number = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxonIndex : number = Math.floor(Math.random() * this.saxonArmy.length);

       
        let result = this.vikingArmy[randomVikingIndex].receiveDamage(this.saxonArmy[randomSaxonIndex].strength) 
        
        if (this.vikingArmy[randomVikingIndex].health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1)
        } 


        return result
    }

    showStatus(){
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        }
        else{
            return "Vikings have won the war of the century!";
        }
    }
}