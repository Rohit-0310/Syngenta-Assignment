const express = require("express");

const connect = require("./configs/db")

const port = 3001;


const restaurantcontroller = require("./controllers/restaurant.controller");


const categoryController = require("./controllers/category.controller");
const locationController = require("./controllers/location.controller");
const disheController = require("./controllers/dishe.controller");


const app = express();

app.use(express.json());


app.use("/restaurants", restaurantcontroller);


app.use("/category", categoryController);
app.use("/location", locationController);
app.use("/dishe", disheController);




app.listen(port, async function(){
    await connect();
    console.log(`listening on port ${port}`)
});