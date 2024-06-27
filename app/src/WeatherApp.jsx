import { useState } from 'react';
import Infobox from './InfoBox'
import SearchBox from './SearchBox'
function WeatherApp() {
    const [info,setInfo]=useState({
        city: "Delhi",
        feelslike: 24,
        temp: 24,
        tempMin: 48,
        tempMax: 69,
        humidity: 47,
        weather: "cold",
    });
    
    let updateInfo=(result)=>{
        setInfo(result);
    }
    return <>
        <SearchBox updateInfo={updateInfo} />
        <Infobox info={info}/>
    </>
}
export {WeatherApp};