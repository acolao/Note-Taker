const express = require("express");
const notesRoute = require("./routes/notes");
const apiRoute = require("./routes/app");

const app = express();
const PORT = process.env.PORT || 3001;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoute);
app.use('/', notesRoute);

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`)});