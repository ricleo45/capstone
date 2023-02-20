import axios from 'axios';
import { useEffect , useState } from 'react';

const GetBookedDates = () => {
const [calResponce, setCustomer] = useState([]);
  useEffect(() => {
    const fetchCustomer = async () => {
      let response = await axios.get('http://127.0.0.1:8000/api/ls');
        setCustomer(response.data);
        // used to view what react it pulling from backend!!!
        console.log(response.data)
        // 
    };
    fetchCustomer();
  });
  return (console.log(calResponce))
};
export default GetBookedDates;