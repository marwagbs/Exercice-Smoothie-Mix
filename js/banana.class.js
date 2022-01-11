import Fruit from "./Fruit.class.js";
import Color from "./Color.class.js";
class Banana extends Fruit{
    
    //la méthode magique qui construit l'objet
    constructor(){
        super();
        //modification de la propriété de notre classe
        this.color = new Color(255,255,0);//composition
        this.acidity =5 ;
        this.sugar = 10;
        this.volum=30;
        this.vitamins=["B6","Mg"];
    }
    
}


export default Banana;