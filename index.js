import express from "express";
const app = express();
const port = 3002;


app.use(express.static("build"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/fulldetails",(req,res)=>{
  res.send(`
  <div style="width:100%;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center">
  <h1 style="font-size:4rem">Opps!</h1>
  <h2 style="font-size:2rem">Error 404,Page not found.</h2>
  <a href="http://localhost:3002">Go Back</a>
  </div>
  `)
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
