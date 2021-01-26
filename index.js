const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 3000;

const parametersConnection = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// to connect through mongoose by the URL and parameters
mongoose.connect(keys.mongoURI, parametersConnection)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Error connection with the database!", err);
    process.exit();
  });

const app = express();
var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//principal route
app.get("/", function (req, res) {
  res.json({ message: "Welcome to the API in NodeJS/MongoDB" });
});

require("./routes/product.routes")(app);

//calling to run the server
app.listen(PORT, () => {
  console.log("Node server is running in port: " + PORT);
});
