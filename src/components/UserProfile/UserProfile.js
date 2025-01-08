import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserProfile = () =>{

    const { userId } = useParams();
    const [user , setUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const getUserDetails = async() =>{
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
    },[userId])

    if (loading) return <p>Loading user details...</p>;
    if (!user) return <p>User not found.</p>;

    return (
        <div>
            <div style={{ padding: "20px" }}>
            <h1>{user.firstName} {user.lastName}</h1>
            <img src={user.image} alt={`${user.firstName} ${user.lastName}`} style={{ width: "150px", borderRadius: "50%" }} />
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Address:</strong> {user.address.city}, {user.address.state}</p>
        </div>

        </div>
    )

}

export default UserProfile;