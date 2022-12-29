module.exports = () => {

    const controller = {};

    function hora(){
        const date = new Date();
        const currentYear = date.getFullYear();
        const today = date.getDate();
        const currentMonth = date.getMonth() + 1;
        const hour = ("0" + date.getHours()).slice(-2);
        const minute = ("0" + date.getMinutes()).slice(-2);
        const second = ("0" + date.getSeconds()).slice(-2);

        const dateNow = `${today}/${currentMonth}/${currentYear}`;
        const hourNow = `${hour}:${minute}:${second}`;

        var data = [];

        data ={
            "data_atual":dateNow,
            "hora_atual":hourNow
        }

        return data;

    }
        controller.listTempo = (req, res) => res.status(200).json(hora());
        return controller;  
  }