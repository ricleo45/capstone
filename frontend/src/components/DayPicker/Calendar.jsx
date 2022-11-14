import React,{useState} from 'react';
import { DayClickEventHandler, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


function Calendar(customer) {
    const bookedDates = customer.map((number) => number = new Date(number));
    console.log(bookedDates);
    const bookedDays = bookedDates;
    const bookedStyle = { border: '0.3px solid red' };
    const [booked, setBooked] = useState(false);
    const handleDayClick: DayClickEventHandler = (day, modifiers) => {
    setBooked(day && modifiers.booked);
    };

    const footer = booked
    ? 'This day is already booked!'
    : 'schedule this day?';

    return (
    <DayPicker
        defaultMonth={new Date()}
        modifiers={{ booked: bookedDays }}
        modifiersStyles={{ booked: bookedStyle }}
        onDayClick={handleDayClick}
        footer={footer}
    />
    );
}
export default Calendar