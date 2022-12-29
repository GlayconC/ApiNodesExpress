const router = require('express-promise-router')();
const calculadoraController = require('../controllers/calculadora.controller');


router.get('/',[calculadoraController.operadorMiddleware, calculadoraController.divisaoZeroMiddleware, calculadoraController.infoMiddleware], calculadoraController.calculadora);

router.post('/',[calculadoraController.operadorMiddleware, calculadoraController.divisaoZeroMiddleware, calculadoraController.infoMiddleware], calculadoraController.postCalculadora);

router.get('/:operador',[calculadoraController.divisaoZeroMiddleware, calculadoraController.infoMiddleware], calculadoraController.calculadoraParams);

module.exports = router;
