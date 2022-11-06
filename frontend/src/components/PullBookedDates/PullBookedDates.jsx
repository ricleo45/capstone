import axios from "axios";
import React, { useEffect , useState } from 'react';
import useAuth from "../../hooks/useAuth";



function PullBookedDates() {
    
    const [user,token] = useAuth();
    const [booked, setBooked] = useState([]);

    useEffect(() =>{
        fetchBooked();
    },[]);

    async function fetchBooked(){
        const response = await axios.get('http://127.0.0.1:8000/api/ls',{
            headers: {
                Authorization: "Bearer " + token,
            }
        });
        setBooked(response.data)
        console.log(response.data)
    }
    return(
        <h1>It Works</h1>
        )
        
    }

export default PullBookedDates;