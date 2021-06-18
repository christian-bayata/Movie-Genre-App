const express = require('express');
const genres = require("./routes/genres")


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

//Routes
app.use("/genres", genres); 

app.listen(port, () => console.log(`Server is running on ${port}...`))

