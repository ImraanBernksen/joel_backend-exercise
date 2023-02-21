const express = require("express");
const cors = require("cors");
const {message} = require('./app/middleware/message.js');
const { errorHandling } = require("./app/middleware/ErrorHandling.js");
  
const app = express();

var corsOptions = {
  origin: "http://localhost:3019"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(errorHandling);

app.get("/",message, (req, res) => {
  res.send((`<h2>Welcome Mogamad Imraan Bernksen</h2>`));
});

require("./app/routes/user.routes.js")(app);
require("./app/routes/product.routes.js")(app);

const PORT = process.env.PORT || 3019;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});