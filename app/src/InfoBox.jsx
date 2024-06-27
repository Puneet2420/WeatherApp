import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { WbSunny, AcUnit, Opacity } from '@mui/icons-material';
import './InfoBox.css'

export default function Infobox({info}) {
    const cold = "https://images.unsplash.com/photo-1546708623-6e5671915b91?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const hot = "https://images.unsplash.com/photo-1586902197503-e71026292412?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D";
    const rainy = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const getWeatherIcon = () => {
        if (info.humidity > 80) {
            return <Opacity />;
        } else if (info.temp > 35) {
            return <WbSunny />;
        } else {
            return <AcUnit />;
        }
    };

    return (
        <div className="cardContainer">
            <div>
                <h1>Weather Info</h1>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="weather image"
                        height="140"
                        image={info.humidity > 80 ? rainy : info.temp > 35 ? hot : cold}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {getWeatherIcon()}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="span">
                            <p>Temperature={info.temp}&deg;C</p>
                            <p>Feels Like={info.feelslike}&deg;C</p>
                            <p>Min Temp={info.tempMin}&deg;C</p>
                            <p>Max Temp={info.tempMax}&deg;C</p>
                            <p>Humidity={info.humidity}</p>
                            <p>Weather can be described as <i>{info.weather.toUpperCase()}</i> and feels like <i>{info.feelslike}</i></p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
