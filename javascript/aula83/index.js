function teste() {
    
}

class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    // Métodos de instância
    aumentarVolume() {
        this.volume++;
    }

    diminuirVolume(){
        this.volume--;
    }

    // Método estático
    static trocaPilha(){
        console.log('Pilha trocada');
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
ControleRemoto.trocaPilha();
console.log(controle1);
