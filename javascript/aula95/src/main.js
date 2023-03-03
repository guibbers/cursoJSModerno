import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

(function(){
    
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();
    
})();

const btn = document.querySelector('.btn')

btn.addEventListener('click', (e=>{    
        const gera = new GeraCPF();
        const cpfGerado = document.querySelector('.cpf-gerado');
        cpfGerado.innerHTML = gera.geraNovoCpf();        
    }
))