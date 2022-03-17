class Ninja {
    constructor(nombre){
        this.nombre = nombre;
        this.salud = 0;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    
    sayName(){
        console.log(`Mi nombre es ${ this.nombre}`);
    }

    showStats(){
        console.log(`Mi nombre es ${this.nombre}, 
                     mi velocidad es ${this.velocidad} y 
                     fuerza es ${this.fuerza}
                     salud es ${this.salud}`);
    }

    drinkSake(){
        this.salud += 10;
        console.log(`Tengo ${this.salud}`);
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.drinkSake();


