exports.operadorMiddleware= async (req, res, next) => {
  if(req.query.operador === undefined && req.body.operador === undefined) {
    res.status(406).send({message:"Parâmetro não informado"})
  } else if (typeof req.query.operador == "string" || typeof req.body.operador == "string"){
    if (req.query.operador === "+" || req.query.operador === "-" || req.query.operador === "*" || req.query.operador === "/" || req.query.operador === "%" ||
        req.body.operador === "+" || req.body.operador === "-" || req.body.operador === "*" || req.body.operador === "/" || req.body.operador === "%"){
      next()
    }
    else{ res.status(406).send({message:"Operador Inválido"})}
  }
  else{res.status(406).send({message:"Parâmetro não informado"})} 
}

exports.divisaoZeroMiddleware= async (req, res, next) => {


  var regex = /[^0-9]/g

    if((req.query.num1 != undefined && regex.test(req.query.num1)) || (req.query.num2 != undefined && regex.test(req.query.num2)) ||
       (req.body.num1 != undefined && regex.test(req.body.num1)) || (req.body.num2 != undefined && regex.test(req.body.num2)) ||
       (req.params.num1 != undefined && regex.test(req.params.num1)) || (req.params.num2 != undefined && regex.test(req.params.num2)) 
    ){
      res.status(406).send({message:"Parâmetro não informado2"})
    }
    else if((req.query.num1 === undefined && req.body.num1 === undefined && req.params.num1 === undefined) ||
      (req.query.num2 === undefined && req.body.num2 === undefined && req.params.num2 === undefined) )
    {
    res.status(406).send({message:"Parâmetro não informado"})
    }
    else if((req.query.num2 === '0' || req.body.num2 === '0' || req.body.num2 === 0 || req.params.num2 === '0')&& 
              (req.query.operador === "/" || req.body.operador === "/" || req.params.operador === "/" || 
              req.query.operador === "%" || req.body.operador === "%" || req.params.operador === "%"))
            {
              res.status(406).send({ "message": "Não pode haver divisão por 0" })
            }
    else{next()}
}

exports.infoMiddleware= async (req, res, next) => {
  console.info(`[${req.method}] [${req.originalUrl}] [${new Date()}] [${req.ip}] - [${req.body}] - [${req.query}]`)
  next()
}

exports.calculadora= async (req, res) => {
  
      var num1 = parseInt(req.query.num1);
      var num2 = +req.query.num2;
      var operador= req.query.operador;

      if (num1 === 0 || num1 <0 || num1 > 0 ) {
        if (num2 === 0 || num2 < 0 || num2 > 0) {

            if (operador === undefined) {
              return res.status(406).send({ message: "Parâmetro operador não informado" });
            }
            else
            if (operador === '+') {
              return res.status(200).send({resultado:eval(num1 + num2)});
            } 
            else
            if (operador === '-') {
              return res.status(200).send({resultado:eval(num1 - num2)});
            }
            else
            if (operador === '*') {
              return res.status(200).send({resultado:eval(num1 * num2)});
            }
            else
            if (operador === '/') {
              return res.status(200).send({resultado:eval(num1 / num2)});
            }
            else
            if (operador === '%') {
              return res.status(200).send({resultado:eval(num1 % num2)});
            }
            else{ return res.status(406).send({ "message": "Operador não reconhecido, favor informar um dos seguintes operadores: [ (+) Adição; (-) Subtração; (*) Multiplicação; (/) Divisão; ou (%) Resto ]" });}
        
        } else {
          return res.status(406).send({ message: "Parâmetro num2 não informado" });
        }
      } else {
        return res.status(406).send({ message: "Parâmetro num1 não informado" });
      }
}

exports.postCalculadora= async (req, res) => {
      var num1 = parseInt(req.body.num1);
      var num2 = parseInt(req.body.num2);
      var operador= req.body.operador;


      if (num1 === 0 || num1 <0 || num1 > 0 ) {
        if (num2 === 0 || num2 < 0 || num2 > 0) {

            if (operador === null || operador === undefined) {
              return res.status(406).send({ message: "Parâmetro operador não informado" });
            }
            else
            if (operador === '+') {
              return res.status(200).send({resultado:eval(num1 + num2)});
            } 
            else
            if (operador === '-') {
              return res.status(200).send({resultado:eval(num1 - num2)});
            }
            else
            if (operador === '*') {
              return res.status(200).send({resultado:eval(num1 * num2)});
            }
            else
            if (operador === '/') {
              return res.status(200).send({resultado:eval(num1 / num2)});
            }
            else
            if (operador === '%') {
              return res.status(200).send({resultado:eval(num1 % num2)});
            }
            else{ return res.status(406).send({ "message": "Operador não reconhecido, favor informar um dos seguintes operadores: [ (+) Adição; (-) Subtração; (*) Multiplicação; (/) Divisão; ou (%) Resto ]" });}
        
        } else {
          return res.status(406).send({ message: "Parâmetro num2 não informado" });
        }
      } else {
        return res.status(406).send({ message: "Parâmetro num1 não informado" });
      }
}

exports.calculadoraParams= async (req, res) => {
  var num1 = parseInt(req.query.num1);
      var num2 = parseInt(req.query.num2);
      var operador= req.params.operador;

      if (num1 === 0 || num1 <0 || num1 > 0 ) {
        if (num2 === 0 || num2 < 0 || num2 > 0) {

            if (operador === null || operador === undefined) {
              return res.status(406).send({ message: "Parâmetro operador não informado" });
            }
            else
            if (operador === '+') {
              return res.status(200).send({resultado:eval(num1 + num2)});
            } 
            else
            if (operador === '-') {
              return res.status(200).send({resultado:eval(num1 - num2)});
            }
            else
            if (operador === '*') {
              return res.status(200).send({resultado:eval(num1 * num2)});
            }
            else
            if (operador === '/') {
              return res.status(200).send({resultado:eval(num1 / num2)});
            }
            else
            if (operador === '%') {
              return res.status(200).send({resultado:eval(num1 % num2)});
            }
            else{ return res.status(406).send({ "message": "Operador não reconhecido, favor informar um dos seguintes operadores: [ (+) Adição; (-) Subtração; (*) Multiplicação; (/) Divisão; ou (%) Resto ]" });}
        
        } else {
          return res.status(406).send({ message: "Parâmetro num2 não informado" });
        }
      } else {
        return res.status(406).send({ message: "Parâmetro num1 não informado" });
      }
}