module.exports = app => {
    const controller = app.controllers.tempo;
  
    app.route('/tempo')
      .get(controller.listTempo)
  }