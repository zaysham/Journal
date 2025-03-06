import express from "express";
import cors from "cors";
import axios from "axios";
import pool from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());
let receivedPostal = "";

const weatherAPIKey = '';   //enter your API key for weatherapi.com
const newsAPIKey = '';    //enter your API key for newsapi.org

app.get("/journal/:date", async (req, res)=>{   //reads journal database

const {date} = req.params; 


try {

    const [results] = await pool.query(
        `SELECT entry FROM entries WHERE date = (?)`, 
        [date]
    ); 
    console.log(results); 

    if (results.length > 0){
      res.send(results); 
    }
    else{
      res.status(404).json({ message: "No journal entry found for this date." });
    }

    
}catch(err){
  console.log("ERROR OCCURED"); 
    console.log(err); 
    res.send(err); 
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
  console.log("CALLED TRY"); 
  }catch(err){
    console.log("CALLED CATCH"); 
  console.log("ERROR: " + err); 
  res.send(""); 
  }
})

app.delete("/journal/:date", async(req, res)=>{ //deletes entry in journal database
  const {date} = req.params; 
  
  try{
    await pool.query(
      'DELETE FROM entries WHERE date = (?)', 
      [date]
    ); 
    res.send("Successful deletion"); 
  }catch(err){
    console.log(err); 
    res.send(""); 
  }
})

app.patch("/journal/:date", async (req, res)=>{  //updates entry for journal database
  const {date} = req.params; 
  const {entry} = req.body; 

  console.log(entry); 

  try{
    await pool.query(
      'UPDATE entries SET entry = (?) WHERE date=(?)', 
      [entry, date]
    )
    res.json("Update successful"); 
   
  }catch(error){
    console.log(error); 
    res.json("Update failed");  
  }
})



app.get("/weather", async (req, res) => { //gets weather data from weather API 
  const response = await axios.get(
    `http://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=${receivedPostal}&aqi=no`,
    {
      headers: { Accept: "application/json" },
    }
  );

  res.send(response.data);
});

app.post("/weather", async (req, res) => {  //gets postal code from frontend, saves it into receivedPostal
  const { postal } = req.body;
  receivedPostal = postal;
  res.status(200).json({ message: "Postal code received" });
});

app.get("/news", async (req, res) => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsAPIKey}`,
    {
      headers: { Accept: "applicaton/json" },
    }
  );

  res.send(response.data.articles);
});



app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
