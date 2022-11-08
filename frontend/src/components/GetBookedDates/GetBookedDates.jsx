import axios from 'axios';
import react,{useState, useEffect} from 'react'


const [datesbooked, setDates] = useState([])

const GetBookedDates = () => {
    useEffect(async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/ls');
        console.log(response.data)
        setDates(response.data);
    }, []);
    
    return(
        <div>
            <h1>{datesbooked.id[0]}</h1>
        </div>
    );
}
export default GetBookedDates;