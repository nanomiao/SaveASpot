const express = require('express')
const session=require("express-session")
const app = express()
const port = 3000

app.use(express.json())
app.use(session())

app.get('/', (req, res) => {
  res.sendFile("login.html",{
    root:"./"
  })
})

app.get('/register', (req, res) => {
  res.sendFile("test.html",{
    root:"./"
  })
})

app.post('/login', (request,response) =>{
  console.log(request.body);
  if (request.body.email === "abc" && request.body.password ==="123") {
    response.status(200).json({ result:"success" });
    } 
  else {
    response.status(403).json({ result: "wrong email or password" });
    }

})

app.post('/logintest', (request,response) =>{
  console.log(request.body);
  response.status(200).json({ result:"success" });
})

app.post('/register', (req,res) => {
  console.log(req.body);
  if (req.body.email === "abc" && req.body.password ==="123"&&req.body.username==="test") {
    res.status(200).json({ "result":"success" });
    } 
  else {
    res.status(403).json({ "message": "wrong email or password" });
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  console.log("hello");
})