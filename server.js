const express = require("express");
const cors = require("cors");

const carsRouter = require('./app/routes/car.routes');

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const db = require("./app/models");

db.sequelize.sync();
// drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
   console.log("Drop and re-sync db.");
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to miksah-dev application." });
});

require("./app/routes/car.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
