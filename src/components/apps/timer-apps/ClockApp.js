import React, {useState, useEffect} from 'react';
import { DateTime } from 'luxon';

const getTimeString = () =>{
    const date = new Date(Date.now()).toLocaleTimeString();
    return date;
}
const getTimeString2 = () =>{
    const date = new Date(Date.now()).toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles'});
    return date;
}

const ClockApp = () =>{
    const [time, setTime] = useState(getTimeString());
    const [time2, setTime2] = useState(getTimeString2());

    useEffect(() =>{
        const interval = setInterval(() =>{
            let date = getTimeString();
            setTime(date);
        }, 1000);

        return() => clearInterval(interval)
    }, [])

    useEffect(() =>{
        const interval = setInterval(() =>{
            let date = getTimeString2();
            setTime2(date);
        }, 1000);

        return() => clearInterval(interval)
    }, [])
    return(
        <div>
            <h1 className='section-title'>React Clock</h1>
            <hr className='explanation' />
            <p>Indianapolis: {time}</p>
            <p>Los Angeles: {time2}</p>
        </div>
    );
};

export default ClockApp;