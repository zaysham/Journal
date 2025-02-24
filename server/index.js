const express = require('express');
const cors = require('cors');  
const axios = require('axios'); 

const app = express(); 
app.use(cors()); 
app.use(express.json());

let receivedPostal = ''; 

app.get('/joke', async (req, res) => {

    const response = await axios.get('https://icanhazdadjoke.com/', {
        headers: { 'Accept': 'application/json' }
      })
    
    console.log(response.data.joke); 
    res.send(response.data.joke); 

})

app.get('/weather', async(req, res)=> {

    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=a62f3149c6954134ba6220638252102&q=${receivedPostal}&aqi=no`, {
        headers: {'Accept': 'application/json'}
    })

    res.send(response.data); 
})

app.post('/weather', async(req, res)=>{
    const {postal} = req.body;
    receivedPostal = postal; 
    res.status(200).json({message: 'Postal code received'}); 
   
})




app.listen(3000, () => {
    console.log('Listening on Port 3000'); 
});
