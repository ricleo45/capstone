import React from 'react';
import { DayClickEventHandler, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import axios from 'axios';




const bookedDays = [new Date(2022,11,25)];
const bookedStyle = { border: '2px solid currentColor' };
const hiddenDays = [new Date(2022,11,25)];

export default function Calendar() {
const [booked, setBooked] = React.useState(true);


const handleDayClick: DayClickEventHandler = (day, modifiers) => {
setBooked(day && modifiers.booked);
};

const footer = booked
? 'This day is already booked!'
: 'choose a day to book.';

return (
<DayPicker
    defaultMonth={new Date(2022,11,13)}
    modifiers={{ booked: bookedDays }}
    modifiersStyles={{ booked: bookedStyle }}
    onDayClick={handleDayClick}
    footer={footer}
    hidden={hiddenDays}
/>
);
}