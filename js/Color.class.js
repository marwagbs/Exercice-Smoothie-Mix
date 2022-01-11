class Color {

    constructor(red, green, blue) {
        //hydratation de notre class color
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.count=1;
    }

    setRed(red) {
        this.red = red;
    }
    getRed() {
        return this.red;
    }
    setGreen(green) {
        this.green = green;
    }
    getGreen() {
        return this.green;
    }
    setBlue(blue) {
        this.blue = blue;
    }
    getBlue() {
        return this.blue;
    }
     
    mix(color){
    
    this.red +=color.getRed();
    this.green +=color.getGreen(); 
    this.blue += color.getBlue();
    this.count++;
    return "rgb("+this.red+" , "+this.green+", "+this.blue+")";
       
    }
    
    getRGB(){
        return  "rgb("+this.getRed()/this.count+","+this.getGreen()/this.count+","+this.getBlue()/this.count+")";
    }
    
}

export default Color;