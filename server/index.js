import express from "express";
import cors from "cors";
import axios from "axios";
import pool from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());
let receivedPostal = "";

app.get("/journal", async (req, res)=>{   //reads journal database

try {
    const [results] = await pool.query(
        'SELECT * FROM entries'
    ); 
    res.send(results); 
   
}   catch(err){
    console.log(err); 
    res.send("ERROR"); 
}

})

app.post("/journal", async (req, res)=>{ //creates entries for journal database
  const { date, jEntry } = req.body;

  try{
    await pool.query(
    'INSERT INTO entries (date, entry) VALUES (?, ?)',
    [date, jEntry]
  ); 
  res.status(200).json({ message: "Entry Received" });
  }catch(err){
  console.log("ERROR: " + err); 
  }
})

app.delete("/journal/:date", async(req, res)=>{ //deletes entry in journal database
  const {date} = req.params; 
  console.log(date); 
  
  try{
    await pool.query(
      'DELETE FROM entries WHERE date = (?)', 
      [date]
    ); 
  }catch(err){
    console.log(err); 
  }
})

app.patch("/journal/:date", async (req, res)=>{  //updates entry for journal database
  const {date} = req.params; 
  const {entry} = req.body; 


  try{
    await pool.query(
      'UPDATE entries SET entry = (?) WHERE date=(?)', 
      [entry, date]
    )
  }catch(error){
    console.log(error); 
  }
})



app.get("/weather", async (req, res) => {
  const response = await axios.get(
    `http://api.weatherapi.com/v1/current.json?key=a62f3149c6954134ba6220638252102&q=${receivedPostal}&aqi=no`,
    {
      headers: { Accept: "application/json" },
    }
  );

  res.send(response.data);
});

app.post("/weather", async (req, res) => {
  const { postal } = req.body;
  receivedPostal = postal;
  res.status(200).json({ message: "Postal code received" });
});

app.get("/news", async (req, res) => {
  const response = await axios.get(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=431a85edfb674ced887ff1006fc4da87",
    {
      headers: { Accept: "applicaton/json" },
    }
  );

  res.send(response.data.articles);
});



app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
