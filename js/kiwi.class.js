import Fruit from "./Fruit.class.js";
import Color from "./Color.class.js";
class Kiwi extends Fruit{
    
    //la méthode magique qui construit l'objet
    constructor(){
        super();
        //modification de la propriété de notre classe
        this.color = new Color(0,255,0); //composition
        this.acidity = 25;
        this.sugar = 7;
        this.volum=15;
        this.vitamins=["C"];
    }
  
    
}

export default Kiwi;