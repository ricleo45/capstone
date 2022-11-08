import React,{useState} from 'react';
import { DayClickEventHandler, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import GetBookedDates from '../GetBookedDates/GetBookedDates';

function Calendar() {

    <GetBookedDates/>
    const bookedDays = [new Date('2022,11,17')];
    const bookedStyle = { border: '0.3px solid red' };
    const [booked, setBooked] = useState(false);
    const handleDayClick: DayClickEventHandler = (day, modifiers) => {
    
    setBooked(day && modifiers.booked);
    };

    const footer = booked
    ? 'This day is already booked!'
    : 'pick a day.';

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