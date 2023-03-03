// 705.484.450-52

class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            value: cpfEnviado.replace(/\D+/g, ''),
            writable: false,
            enumerable: false,
            configurable: false
        });
    }

    sequencial() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.geraDigito(cpfParcial);
        const digito2 = this.geraDigito(cpfParcial + digito1);
        this.novoCpf = cpfParcial + digito1 + digito2;
    }

    geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for(let stringNumerica of cpfSemDigitos){
            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.sequencial()) return false;
        this.geraNovoCpf();
        return this.novoCpf === this.cpfLimpo
    }
}

const validaCpf = new ValidaCPF('070.987.720-03')

// if (validaCpf.valida()) {
//     console.log('CPF válido.');
// } else {
//     console.log('CPF inválido');
// }