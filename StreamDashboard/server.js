const express = require('express')

const app = express()

app.use(express.text());
app.use(express.static("../"));


let lastPower = 0;

app.post('/sendUserData', async (req, res) => {
    let data = JSON.parse(req.body);
    lastPower = data.drivePower;
    console.log(lastPower);
    res.send({success: "Success"}); 
});


app.listen(3000, ()=> {
    console.log("Node Server Started")
})