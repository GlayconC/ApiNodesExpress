module.exports = () => {

    const controller = {};

    function minutoAtual(){

        const date = new Date();
        const minute = parseInt(("0" + date.getMinutes()).slice(-1));

        var data = [];
        if(minute > 5){
            data = {
                "is_aberto":0
            }
        } else{
            data = {
                    "is_aberto":1
            } 
        }

        return data;
    }
  
    controller.listAberto = (req, res) => res.status(200).json(minutoAtual());
  
    return controller;
  }