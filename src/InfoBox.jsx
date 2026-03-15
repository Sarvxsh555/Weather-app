import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
export default function InfoBox({info}){

    const initalUrl = "https://plus.unsplash.com/premium_photo-1697644693242-db5adf79b390?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1435777940218-be0b632d06db?q=80&w=2231&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1558920778-a82b686f0521?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="InfoBox">

            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>

                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                    title="weather image"
                />

                <CardContent>

                    <Typography gutterBottom variant="h5">
                        {info.city}
                    </Typography>

                    <Typography variant="body2">
                        Temperature = {info.temp}°C
                    </Typography>

                    <Typography variant="body2">
                        Min Temp = {info.tempMin}°C
                    </Typography>

                    <Typography variant="body2">
                        Max Temp = {info.tempMax}°C
                    </Typography>
                    <Typography variant="body2">
                        The Weather can be Described as <i>{info.weather}</i> and feels Like = {info.feelsLike}°C ;
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    );
}