const express = require("express");
const serverless = require("serverless-http");
const app = express()

app.use(express.json())

const userRoute = require("./routes/user")

app.use(userRoute)


app.listen(process.env.PORT || 3000, ()=>{
  console.log("Server Starting...!")
})


module.exports = app;
module.exports.handler = serverless(app);
