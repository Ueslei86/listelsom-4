// importart módulo express
const express = require('express');

// função do express para manipular as rotas
const rotas = express.Router();

// GET
// rota para acesar o método GET para veículo
rotas.get('/', (req, res) => {
    res.status(200).send({
      mensagem: 'Você acessou a rota raiz de veículo.'
    });
})

// POST
// rota para acesar o método POST para veículo
rotas.post('/', (req, res) => {

  // implementar código para salvar os recebidos no banco de dados
  const carro = {
    nome: req.body.nome,
    fabricante: req.body.fabricante,
    anoModelo: req.body.anoModelo,
    combustivel: req.body.combustivel,
    cor: req.body.cor,
    preco: req.body.preco
  }

  // indica que o dado foi criado com sucesso
  res.status(201).send({
    mensagem: 'Veículo cadastrado com sucesso.',
    carro: carro
  });
});


// PUT
// rota para acesar o método PUT para veículo
rotas.put('/', (req, res) => {
  
  // implementação do código para atualizar o veículo no banco

  const preco = req.params.preco
  // obter o id enviado pela url
  const idVeiculo = req.params.idVeiculo;

  res.status(200).send({
    mensagem: `Id recebido pelo servidor: ${idVeiculo} `,
    mensagem: `O preço do veículo é: ${preco}`
  });
});


// DELETE
// rota para excluir um veículo
rotas.delete('/', (req, res) => {

  // implementação de código que irá excluir do banco
  const idVeiculo = req.params.idVeiculo;

  res.status(202).send({
    mensagem: `Veículo de ID ${idVeiculo} foi excluído com sucesso.`
  });
});



// exportar toda a configuração das rotas
module.exports = rotas;