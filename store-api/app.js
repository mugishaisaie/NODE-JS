require("dotenv").config();

const express = require("express");

const app = express();

// error handler
const notFound = require("./middleware/not-found")
const errorHandler = require("./middleware/error-handler")

// middlewares
app.use(express.json());

const connectDB = require("./db/connect");
const productRouter = require("./routes/products");

app.use("/api/v1/products",productRouter)

app.get("/", (req, res) => {
    res.send("<h1>Store API</h1><a href='/api/v1/products'>Products route</a>");
})


// 

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const start = async()=>{
    try {
      await  connectDB(process.env.MONGO_URL)

        app.listen(PORT,console.log(`Server is Listening on Port ${PORT}...`))
        
    } catch (error) {
        console.log(error)
    }
}

start();