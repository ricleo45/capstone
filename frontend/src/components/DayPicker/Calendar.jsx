import React,{useState} from 'react';
import { DayClickEventHandler, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


function Calendar() {
    const bookedDates = response.map((number) => number = new Date(number));
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
        defaultMonth={new Date('11-1-2022')}
        modifiers={{ booked: bookedDates }}
        modifiersStyles={{ booked: bookedStyle }}
        onDayClick={handleDayClick}
        footer={footer}
    />
    );
}
export default Calendar;