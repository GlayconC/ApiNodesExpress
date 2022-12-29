module.exports = () => {
  const versaoDB = require('../data/versao.json');
  const controller = {};

  controller.listVersao = (req, res) => res.status(200).json(versaoDB);

  return controller;
}