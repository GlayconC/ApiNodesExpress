module.exports = app => {
    const controller = app.controllers.aberto;
  
    app.route('/loja/aberto')
      .get(controller.listAberto)
  }