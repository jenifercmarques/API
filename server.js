import {generatePrompt} from './generate-questions.js';
import express from 'express';
import cors from 'cors';
const app = express(); //aqui estamos chamando
const port = 3000;

app.use(cors()); //a segurança do acesso da API

// Configuração para receber dados no corpo da requisição
app.use(express.json());

// Endpoint que recebe um parâmetro via body. endpoint é só o nome que damos para o que vamos fazer no get, post ou outros q não conheço
app.post('/TalkingWithGemini', async (req, res) => { //post recebe 
    const Prompt = req.body.prompt;
    const response = await generatePrompt(Prompt);
    res.status(200).send(JSON.parse(response.response.text())); // res traz a resposta do gemini nesse cenário
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});