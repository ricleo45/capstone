import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import GetBookedDates from "../../components/GetBookedDates/GetBookedDates";



const HomePage = () => {
  const [user, token] = useAuth();
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        let response = await axios.get('http://127.0.0.1:8000/api/core', {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCustomer(response.data);
        // used to view what react it pulling from backend!!!
        // console.log(response.data)
        
        
      } catch (error) {
      console.log(error.response.data);
      
    }
  };
  fetchCustomer();
}, [token]);
return (
    <div className='container'>
      

      <h1>Welcome {user.first_name}!</h1>
      
      {customer.map((customer) => (
        <table  key={customer.id}>
            
            <tr>
            service type: {customer.service_type}
            </tr>
            <tr>
            payment: ${customer.payment_ammount}
            </tr>
            <tr>
            payment type: {customer.payment_form} on {customer.schedule_date} - {customer.transaction_id}
            </tr>
          </table>
        ))}
        
    </div>
  );
};
export default HomePage;
