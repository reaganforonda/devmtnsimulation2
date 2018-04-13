const axios = require("axios");

module.exports = {
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
  }
};
