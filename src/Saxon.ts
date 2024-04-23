import {Soldier} from "./Soldier"

export class Saxon extends Soldier{
    health: number;
    strength: number;
    constructor(health: number, strenght: number) {
        super(health, strenght)
        this.health = health;
        this.strength = strenght;
    }
    attack(){
        return this.strength 
        }

    receiveDamage(damage: number){
        this.health = this.health - damage;
       
            if (this.health > 0){
                return "A Saxon has received " + damage + " points of damage"
            }
            else {
                return "A Saxon has died in combat"
            }
    }

}