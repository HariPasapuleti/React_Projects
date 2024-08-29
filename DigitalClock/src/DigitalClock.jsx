import React, { useEffect, useState } from 'react'

const DigitalClock = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)
        // setInterval(callback, 1000) // setInterval repeatedly executes a function at every given delay interval.

        // Like if and else
        return () => {
            clearInterval(intervalId);
        }

    }, []);

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM"

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`

        // return `${hours.toString().padStart(2, '0')}: ${minutes.toString().padStart(2, '0') } : ${seconds.toString().padStart(2, '0') }`

    }

    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }


  return (
    <div className='clock-container'>
        <div className="clock">
            <span> {formatTime()} </span>
        </div>
      
    </div>
  )
}

export default DigitalClock
