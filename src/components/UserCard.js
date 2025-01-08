import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Avatar from '@mui/material/Avatar';
import '../components/style/common.css';

const UserCard = ({ user }) => {
  return (
    <div className='user-card-body'>
      <Card sx={{ width: 345, height: 100, paddingLeft: 2 }}  >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} className='user-card-avatar'>
            <Avatar alt={user.firstName} src={user.image} />
          </Grid>
          <Grid item xs={6}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {user.firstName} {user.lastName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {user.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {user.phone}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </div>

  );
}

export default UserCard;
