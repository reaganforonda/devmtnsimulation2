const axios = require("axios");

module.exports = {
  // GET ALL HOUSES
  getHouses: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .GET_HOUSES()
      .then(result => {
        res.status(200).send(result);
      })
      .catch(e => {
        console.log(e);
        res.sendStatus(500);
      });
  },

  //   Add House
  addHouse: (req, res) => {
    const dbInstance = req.app.get("db");
    const { name, address, city, state, zip, img, mortgage, rent } = req.body;

    dbInstance
      .ADD_HOUSE([name, address, city, state, zip, img, mortgage, rent])
      .then(result => {
        res.status(200).send(result);
      })
      .catch(e => {
        console.log(e);
        res.sendStatus(500);
      });
  },
  //   Delete House
  deleteHouse: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    dbInstance
      .DELETE_HOUSE([id])
      .then(result => {
        res.status(200).send(result);
      })
      .catch(e => {
        console.log(`Houston we have a problem : ${e}`);
        res.sendStatus(500);
      });
  }
};
