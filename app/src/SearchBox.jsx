import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';
export default function SearchBox() {
    let [city,setCity]=useState("");
    const api_url="https://api.openweathermap.org/data/2.5/weather";
    const api_key="f387cabef08bccb7b9e1f9a1ceebaf33";
    
    let handleCity=(event)=>{
        setCity(event.target.value);
    }
    let handlesubmit=(event)=>{
        event.preventDefault();
        setCity("");
        getWeatherInfo();
    }
    let getWeatherInfo=async()=>{
        let response=await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric`);
        let data=await response.json();
        let result={
            city:city,
            temp: data.main.temp,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            humidity: data.main.humidity,
            feelslike: data.main.feels_like,
            weather: data.weather[0].description,
        }
        console.log(result);
    }
    return <div className='SearchBox'>
        <h1>Search for Weather Today !</h1>
        <form onSubmit={handlesubmit}>
            <TextField id="city" label="Enter City Name here" variant="outlined" required value={city} onChange={handleCity}/>
            <br /> <br />
            <Button variant="contained" type='submit'>Search</Button>
        </form>
    </div>
}