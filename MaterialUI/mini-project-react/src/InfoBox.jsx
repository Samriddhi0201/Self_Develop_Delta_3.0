import "./InfoBox.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({info}) {
     const INIT_URL ="https://images.unsplash.com/photo-1733164845914-5facd00128f4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    // let info={
    //     city:"delhi",
    //     feelsLike: 17.56,
    //     humidity: 63,
    //     temp:18.05,
    //     tempMax: 18.05,
    //     tempMin: 18.05,
    //     weather:"smoke",
    // }
    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1638253910847-b98cac8387c1?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/19/drops.JPG?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhaW58ZW58MHx8MHx8fDA%3D";

    return (
        <div className="InfoBox">
          {/* <h1>WeatherInfo: {info.weather}</h1> */}
          <div className='cardContainer'>
          <Card sx={{ maxWidth: 345 }}>
                <CardMedia sx={{ height: 200}} image={info.humidity >80 ? RAIN_URL : info.temp >15 ? HOT_URL :COLD_URL} title="green iguana" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{info.city }{info.humidity >80 ? <ThunderstormIcon/> : info.temp >15 ? <WbSunnyIcon/> :<AcUnitIcon/>
                    } </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary'  }} component="span">
                        <p>Temperature ={info.temp}&deg;C</p>
                        <p>Max Temp ={info.tempMax}&deg;C</p>
                        <p>Min Temp ={info.tempMin}&deg;C</p>
                        <p>Humidity ={info.humidity}</p>
                        <p>The Weather can be described as <i>{info. weather} </i>and feels like {info. feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
          </div>
        
        </div>
    )
}