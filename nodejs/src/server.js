const express = require("express");

const connect = require("./configs/db")
const port = 2345;


const app = express();

app.use(express.json());




app.listen(port, async function(){
    await connect();
    console.log(`listening on port ${port}`)
});