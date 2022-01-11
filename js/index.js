import Banana from "./banana.class.js";
import Kiwi from "./kiwi.class.js";
import Strawberry from "./Strawberry.class.js";
import Color from "./Color.class.js";
import Smoothie from "./Smothie.class.js";

//les instances



let smoothie= new Smoothie();

// les boutons
let boutonBanana=document.querySelector("#banana");
let boutonStrawberry=document.querySelector("#strawberry");
let boutonKiwi=document.querySelector("#kiwi");






function addBanana(){
    let myBanana=new Banana();
    smoothie.add(myBanana);
    console.log("remplie de banane");
}

function addStrawberry(){
    let myStrawberry=new Strawberry();
    smoothie.add(myStrawberry)
    console.log("remplie fraise");
}

function addKiwi(){
    let myKiwi=new Kiwi();
    smoothie.add(myKiwi)
    console.log("remplie kiwi");
}




//document.body.style.backgroundColor =myStrawberry.getColor().getRGB();




boutonBanana.addEventListener("click",addBanana);

boutonStrawberry.addEventListener("click",addStrawberry);

boutonKiwi.addEventListener("click",addKiwi);