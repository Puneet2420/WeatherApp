import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
export default function Infobox() {
    let info = {
        city: "Delhi",
        feelslike: 24,
        temp: 24,
        tempMin: 48,
        tempMax: 69,
        humidity: 47,
        weather: "cold",
    };
    const image = "https://images.unsplash.com/photo-1546708623-6e5671915b91?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return <>
    <div className="cardContainer">
        <div>
        <h1>Weather Info</h1>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature={info.temp}&deg;C</p>
                        <p>Feels Like={info.feelslike}&deg;C</p>
                        <p>Min Temp={info.tempMin}&deg;C</p>
                        <p>Max Temp={info.tempMax}&deg;C</p>
                        <p>Humidity={info.humidity}</p>
                        <p>Weather can be described as <i>{info.weather.toUpperCase()}</i> and feels line <i>{info.feelslike}</i></p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    </div></>
};