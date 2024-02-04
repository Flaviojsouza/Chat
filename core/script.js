const botaoEnviar = document.getElementById('enviar');
const mensagem = document.getElementById('texto');
const chat = document.getElementById('mensagens');

const socket = io();

botaoEnviar.addEventListener('click', () => {
    if (mensagem.value !== ""){
        socket.emit('nova mensagem', mensagem.value);
        mensagem.value = "";
    }
});

socket.addEventListener('nova mensagem', (msg) => {
    const elementoMensagem = document.createElement('li'); // cria uma tag li para 
    elementoMensagem.textContent = msg;
    elementoMensagem.classList.add('mensagem'); //<li class='mensagem'></li>
    chat.appendChild(elementoMensagem);
});