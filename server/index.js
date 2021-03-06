const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./controller");
const cors = require("cors");
const port = 4000;
const app = express();
const massive = require("massive");
const dotenv = require("dotenv");
dotenv.config();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static("../build"));

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(e => console.log(`Error: ${e}`));

// ##### ENDPOINTS ######
app.get("/api/houses", controller.getHouses);
app.post("/api/houses", controller.addHouse);
app.delete("/api/houses/:id", controller.deleteHouse);

app.listen(port, () => {
  console.log(`Creeping on Port: ${port}`);
});
