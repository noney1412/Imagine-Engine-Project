import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.send("Hello World 5555");
});

const port = process.env.PORT || 1337;

app.listen(port);

console.log("http://localhost:1337")