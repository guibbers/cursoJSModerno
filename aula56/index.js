function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        fala: (assunto)=>{
            return `${this.nome} está falando sobre ${assunto}`;
        },
        altura,
        peso,
        get imc() {
            const indice = this.peso / (this.altura**2);
            return indice.toFixed(2);
        }
    };
};

const p1 = criaPessoa('Guilherme', 'Torres', 1.90, 117);

console.log(p1.nomeCompleto);