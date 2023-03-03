class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.form');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', (e)=>{
            this.handleSubmit(e);
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if (camposValidos && senhasValidas) {
            alert('Formulario enviado');
            this.formulario.submit();
        }
    }

    senhasSaoValidas() {
        let valid = true;
        const senha = this.formulario.querySelector('.password');
        const repetirSenha = this.formulario.querySelector('.repeatPassword');

        if(senha.value !== repetirSenha.value) {
            valid = false;
            this.criaErro(senha, 'Senhas devem ser idênticas.')
            this.criaErro(repetirSenha, 'Senhas devem ser idênticas.')
        }

        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criaErro(senha, 'Senha precisa ter entre 6 e 12 caracteres.');
            this.criaErro(repetirSenha, 'Senha precisa ter entre 6 e 12 caracteres.');
        }

        return valid
    }

    camposSaoValidos() {
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            if(!campo.value) {
                this.criaErro(campo, `Campo "${campo.name}" não pode estar em branco.`);
                valid = false;
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false;
            }

            if(campo.classList.contains('user')) {
                if(!this.validaUsuario(campo)) valid = false;
            }
        }
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;
        if(usuario.length > 12 || usuario.length < 3) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }

        if(!usuario.match(/^[a-zA-z0-9]+$/g)) {
            this.criaErro(campo, 'Nome de usuário deve conter apenas letras ou números.')
        }


        return valid
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

            if (!cpf.valida()) {
                this.criaErro(campo, 'CPF inválido')
                return false
            }

            return true
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidaFormulario();