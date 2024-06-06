const form = document.querySelector('#formulario');
const numeros = [];
const nomes = [];
let linhas = ''; 

form.addEventListener('submit', function (e) {
    e.preventDefault();
    atualizaLinha();
});

function atualizaLinha() {
    const nomeDeContato = document.querySelector('#nomeDeContato');
    const numeroDeContato = document.querySelector('#numeroDeContato');

    if (numeros.includes(numeroDeContato.value)) {
        alert(`O número ${numeroDeContato.value} já foi adicionado`);
    } else {
        nomes.push(nomeDeContato.value);
        numeros.push(numeroDeContato.value);

        let linha = `<tr>
            <td>${nomeDeContato.value}</td>
            <td>${numeroDeContato.value}</td>
        </tr>`;

        linhas += linha;

        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;

        const totalContatos = document.querySelector('#total-contatos');
        totalContatos.textContent = nomes.length;

        nomeDeContato.value = '';
        numeroDeContato.value = '';
    }
}

