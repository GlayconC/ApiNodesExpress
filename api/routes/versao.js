module.exports = app => {
  const controller = app.controllers.versao;

  app.route('/config/versao')
    .get(controller.listVersao)
}