import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { DayClickEventHandler, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const HomePage = () => {
  const [user, token] = useAuth();
  const [customer, setCustomer] = useState([]);
  const bookedDays = customer.map((number) => number = new Date(number.schedule_date));
  const bookedStyle = { border: '1px dotted blue' };
  const [booked, setBooked] = useState();
  const handleDayClick: DayClickEventHandler = (day, modifiers) => {
    setBooked(day && modifiers.booked);
    
  };
  const footer = booked
  ? 'This day is already booked!'
  : 'schedule this day?';
  console.log(bookedDays)
  

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
        // 
      } catch (error) {
      console.log(error.response.data);
      
      }
    
    };
    fetchCustomer();
  }, [token]);
  return (
    <div className="container">
      <h1>Welcome {user.first_name}!</h1>
      <br></br>
      {customer.map((customer) => (
        <table key={customer.id}>
            
              service type: {customer.service_type}
              
            <br></br>
            payment: ${customer.payment_ammount}
            payment type: {customer.payment_form} on {customer.schedule_date} - {customer.transaction_id}
          </table>
        ))}
        <DayPicker
          defaultMonth={new Date()}
          modifiers={{ booked: bookedDays }}
          modifiersStyles={{ booked: bookedStyle }}
          onDayClick={handleDayClick}
          footer={footer}
      />
    </div>
  );
};
export default HomePage;
