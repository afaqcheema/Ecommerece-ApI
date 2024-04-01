const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 8080;
const products_routes = require("./routes/product");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use("/api/products", products_routes);


app.listen(PORT, () => {
    console.log('${PORT} YES I am Live')
});