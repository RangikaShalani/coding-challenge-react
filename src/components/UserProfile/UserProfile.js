// User single page

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../style/common.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const UserProfile = () => {

    const { userId } = useParams();
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUserDetails = async () => {
            console.log(userId);
            try {
                const response = await axios.get(`https://dummyjson.com/users/${userId}`);
                console.log(response);
                setUser(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        getUserDetails();
    }, [userId]);

    if (loading) return <p className="user-msg-tsx">Loading user details...</p>;
    if (!user) return <p className="user-msg-tsx">User not found...</p>;

    return (
        <div className="userProfile-main-cmp">
            <Card sx={{ maxWidth: 800 }} className="userProfile-first-card card-mrg">
                <div>
                    <Typography gutterBottom variant="h4" component="div" className="userProfile-first-header">
                        {user.firstName} {user.lastName}
                    </Typography>
                    <CardMedia
                        sx={{ height: 300, width: 300 }}
                        image={user.image}
                        title="green iguana"
                    />
                </div>

                <CardContent>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 2 }}>
                        <FiberManualRecordIcon fontSize="inherit" />
                        <span className="userProfile-main-tex-title">User Name :</span> {user.username}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 2 }}>
                        <FiberManualRecordIcon fontSize="inherit" />
                        <span className="userProfile-main-tex-title">Email : </span> {user.email}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 2 }}>
                        <FiberManualRecordIcon fontSize="inherit" />
                        <span className="userProfile-main-tex-title">Phone:</span>  {user.phone}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 2 }}>
                        <FiberManualRecordIcon fontSize="inherit" />
                        <span className="userProfile-main-tex-title">Address:</span>  {user.address.address}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 2 }}>
                        <FiberManualRecordIcon fontSize="inherit" />
                        <span className="userProfile-main-tex-title">Gender:</span>  {user.gender}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 2 }}>
                        <FiberManualRecordIcon fontSize="inherit" />
                        <span className="userProfile-main-tex-title">Age:</span>  {user.age}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 2 }}>
                        <FiberManualRecordIcon fontSize="inherit" />
                        <span className="userProfile-main-tex-title">University: </span> {user.university}
                    </Typography>
                </CardContent>
            </Card>

            <div className="userProfile-second-card ">
                <Card sx={{ maxWidth: 410 }} className="card-mrg">
                    <Typography gutterBottom variant="h6" component="div">
                        Company Details
                    </Typography>

                    <CardContent>
                        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 2 }}>
                            <FiberManualRecordIcon fontSize="inherit" />
                            <span className="userProfile-main-tex-title">Company Name: </span> {user.company.name}
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 2 }}>
                            <FiberManualRecordIcon fontSize="inherit" />
                            <span className="userProfile-main-tex-title">Department: </span> {user.company.department}
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 2 }}>
                            <FiberManualRecordIcon fontSize="inherit" />
                            <span className="userProfile-main-tex-title">Job Title:</span>  {user.company.title}
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 2 }}>
                            <FiberManualRecordIcon fontSize="inherit" />
                            <span className="userProfile-main-tex-title"> Address: </span>{user.company.address.address}
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: 410 }} className="card-mrg">
                    <Typography gutterBottom variant="h6" component="div">
                        General Details
                    </Typography>

                    <CardContent className="userProfile-second-card-general-cont">
                        <div className="card-general-item">
                            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 2 }}>
                                <FiberManualRecordIcon fontSize="inherit" />
                                <span className="userProfile-main-tex-title">Weight: </span> {user.weight}
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 2 }}>
                                <FiberManualRecordIcon fontSize="inherit" />
                                <span className="userProfile-main-tex-title">Height: </span> {user.height}
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 2 }}>
                                <FiberManualRecordIcon fontSize="inherit" />
                                <span className="userProfile-main-tex-title">Blood Group:</span>  {user.bloodGroup}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 2 }}>
                                <FiberManualRecordIcon fontSize="inherit" />
                                <span className="userProfile-main-tex-title">Eye Color: </span> {user.eyeColor}
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 2 }}>
                                <FiberManualRecordIcon fontSize="inherit" />
                                <span className="userProfile-main-tex-title">Hair Color: </span> {user.hair.color}
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 2 }}>
                                <FiberManualRecordIcon fontSize="inherit" />
                                <span className="userProfile-main-tex-title">Hair Type:</span>  {user.hair.type}
                            </Typography>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default UserProfile;