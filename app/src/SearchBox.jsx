import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';
import { red } from '@mui/material/colors';
export default function SearchBox({updateInfo}) {
    let [city,setCity]=useState("");
    let [error,seterror]=useState(false);
    const api_url="https://api.openweathermap.org/data/2.5/weather";
    const api_key="f387cabef08bccb7b9e1f9a1ceebaf33";
    
    let handleCity=(event)=>{
        setCity(event.target.value);
    }
    let handlesubmit=async (event)=>{
        try{
            event.preventDefault();
            setCity("");
            let result=await getWeatherInfo();
            updateInfo(result);
        }
        catch(err){
            seterror(true);
        }
    }
    let getWeatherInfo=async()=>{
        try{
            let response=await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric`);
            let data=await response.json();
            let result={
                city:city.charAt(0).toUpperCase() + city.slice(1),
                temp: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                humidity: data.main.humidity,
                feelslike: data.main.feels_like,
                weather: data.weather[0].description,
            }
            seterror(false);
            return result;
        }
        catch(err){
            throw err;
        }
    }
    return <div className='SearchBox'>
        <h1>Search for Weather Today !</h1>
        <form onSubmit={handlesubmit}>
            <TextField id="city" label="Enter City Name here" variant="outlined" required value={city} onChange={handleCity}/>
            <br /> <br />
            <Button variant="contained" type='submit'>Search</Button>
        </form>
        {error && <p style={{color:"red",fontSize:35}}>No Such Place found</p>}
    </div>
}