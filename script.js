const fotos = document.querySelectorAll('.imagem');
const textos = [
    {
        texto: `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`,
        nome: 'Tanya Sinclair',
        cargo: 'UX Engineer'
    },
    {
        texto: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
        nome: 'John Tarkpor',
        cargo: 'Junior Front-end Developer'
    }
];

let index = 0;
const textoElemento = document.querySelector('.texto');
const nomeElemento = document.querySelector('.nome');
const cargoElemento = document.querySelector('.cargo');

function atualizarPessoa() {
    fotos.forEach((img, i) => {
        img.classList.toggle('ativa', i === index);
    });
    textoElemento.textContent = textos[index].texto;
    nomeElemento.textContent = textos[index].nome;
    cargoElemento.textContent = textos[index].cargo;
}

document.querySelector('.botao-proximo').addEventListener('click', () => {
    index = (index + 1) % fotos.length;
    atualizarPessoa();
});

document.querySelector('.botao-anterior').addEventListener('click', () => {
    index = (index - 1 + fotos.length) % fotos.length;
    atualizarPessoa();
});
