
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json()); 
app.use(cors());

const dbadd = require("./db.add.user");


app.post("/adduser", async (req, res) => {
    try {
        res.json({ message: "success post" });
        const input = req.body; // before doing this

       await dbadd.addUser(input);

         } catch (err) {
            res.sendStatus(500);
    }
});

app.post("/validuser", async (req, res)=> {
    try {
        const input = req.body; 

       await dbadd.validuser(input);
       res.json({ opr: true });

         } catch (err) {
            res.json({ opr: false });
    }
});

app.listen(3000);
