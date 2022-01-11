import Fruit from "./Fruit.class.js";
import Color from "./Color.class.js";

class Strawberry extends Fruit{
    
    //la méthode magique qui construit l'objet
    constructor(){
        super();
        //modification de la propriété de notre classe
        this.color = new Color(255,0,0);//composition
        this.acidity = 15;
        this.sugar = 4;
        this.volum=8;
        this.vitamins=["B9","C"];
    }
    
}
export default Strawberry;