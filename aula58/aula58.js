function Pessoa(nome, sobrenome){
    const ID = 123456;

    const metodoInterno = ()=>{
        
    };

    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Luiz', 'Otávio');
console.log(p1);