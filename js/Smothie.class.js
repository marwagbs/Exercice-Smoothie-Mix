import Color from "./Color.class.js";

class Smoothie{
   constructor(){
    //selection des indicateurs   
        this.vitaminsLevel=document.querySelector("#vitamin-level span");
        this.acidityLevel=document.querySelector("#acidity-level span");
        this.sugarLevel=document.querySelector("#sugar-level span");
        this.volumLevel=document.querySelector("#volume-level span");
        this.juiceLevel=document.querySelector("#juice");
    
       this.color= new Color(255,255,255);
       this.acidity=0;
       this.volum=0;
       this.sugar=0;
       this.vitamins=[];
       this.count=0;
    }
    add(fruit){
        console.log("fruit");
   
        this.color.mix(fruit.getColor());
        this.juiceLevel.style.backgroundColor=this.color.getRGB();
        this.sugar+=fruit.sugar;
        this.volum+=fruit.volum;
        this.acidity+=fruit.acidity;
     
        
        for(let i of fruit.vitamins){
          let find=false;
          for(let j of this.vitamins){
              if (fruit.vitamins[i]==this.vitamins[j]){
                find=true;
          }
          if (find==false){
              this.vitamins[j]+=fruit.vitamins[i];
              
          }
          }
          console.log(this.vitamins)
          
        }
// this.vitamins+=fruit.vitamins;

      this.refreshinfos();
    }
    refreshinfos(){
     this.juiceLevel.style.height=this.volum+"px";
     this.volumLevel.textContent=this.volum;
     this.acidityLevel.innerHTML=this.acidity;
     this.sugarLevel.innerHTML=this.sugar;
     this.vitaminsLevel.textContent=this.vitamins;
    }
}

export default Smoothie;
