const express = require("express");
const cors = require("cors");
const axios = require("axios");
const path = require("path");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "client/build", "index.html"));
    });
}

//-- Runs server
app.listen(port, (error) => {
    if (error) throw error;
    console.log(`Server runnning on port ${port}`);
});
