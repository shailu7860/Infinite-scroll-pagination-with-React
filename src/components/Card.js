import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Contact.css'

export default function MediaCard(props) {
    return (
        <Card className='Card' sx={{ maxWidth: 345, paddingTop:"60px" }}>
            <CardMedia
                component="img"
                height="140"
                image={props.image}
                alt="green iguana"
                style={{width: "fit-content"}}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                   {props.tilte} 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.desc}
                    
                </Typography>

                <Typography variant="body2" color="black">
                    {props.type}
                    
                </Typography>

                <Typography style={{display:'flex', justifyContent:'center'}} color="text.secondary" >
                    {props.type2}
                    
                </Typography>

                <Typography variant="body2" color="black">
                    {props.tools}
               
                </Typography>

                <Typography style={{display:'inline-flex',justifyContent:'center'}}  color="text.secondary">
                {props.tools2}
                   
                </Typography>


            </CardContent>

         
        </Card>
    );
}