const http = require('http');
const express = require('express');
const aplicacao = express();

const servidorHttp = http.createServer(aplicacao);
//websocket -  canal de comunicação entre o usuarios e o servidor
const io = require('socket.io')(servidorHttp);

// função anonima(função com uso de function, mas sem nome)
// arrow fuction
// () => {
//     return
// };
io.addListener('connection', (socket) => {
    console.log('Um usuário conectou');
    socket.addListener('nova mensagem', (mensagem) => {
        io.emit("nova mensagem", mensagem);
    });
});

//definicao do caminho para arquivos staticos
aplicacao.use(express.static('core'));

servidorHttp.listen(1000);