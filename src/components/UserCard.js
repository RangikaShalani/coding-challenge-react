import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Avatar from '@mui/material/Avatar';

export default function UserCard() {
  return (
    <Card sx={{ maxWidth: 345 }} className='user-card-body'>
      

<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid size={6}>
    
  <Avatar alt="Remy Sharp" src="/src/instructions/start.jpg" />
   
  </Grid>
  <Grid size={6}>
    
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards 
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards 
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards 
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    
  </Grid>
  </Grid>
      
    </Card>
  );
}
