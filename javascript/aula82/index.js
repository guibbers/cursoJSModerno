class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(!this.ligado){
            this.ligado = !this.ligado;
        }
    }

    desligar(){
        if(this.ligado){
            this.ligado = !this.ligado;
        }
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo){
        super(nome)
        this.cor = cor
        this.modelo = modelo;
    }
}

const d1 = new Smartphone('iPhone', 'Rose Gold', '12');

d1.ligar();
d1.desligar();

console.log(d1);