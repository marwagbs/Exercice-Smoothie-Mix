//CLASSE MÈRE DE BANANA, KIWI, STRAWBERRY

class Fruit{
    
    constructor(){
       this.color=0;
       this.acidity=0;
       this.volum=0;
       this.sugar=0;
       this.vitamins=[];
    }
    
    
    setColor(color) {
        this.color = color;
    }
     getColor(){
        return this.color;   
    }
    
    setAcididity(acidity) {
        this.acidity = acidity;
    }
     getAcidity(){
        return this.acidity;   
    }
    
    setSugar(sugar) {
        this.sugar = sugar;
    }
     getSugar(){
        return this.sugar;   
    }
    
    setVolum(volum) {
        this.volum = volum;
    }
     getVolum(){
        return this.volum;   
    }
    
    setVitamin(vitamin) {
        this.vitamins = vitamin;
    }
     getVitamin(){
        return this.vitamins;   
    }
}

export default Fruit;