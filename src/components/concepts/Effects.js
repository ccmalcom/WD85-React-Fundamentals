import {useState, useEffect} from 'react';

const Effects = () =>{
    return(
        <div className='main'>
            <div className='mainDiv'>
                <h2>Below are some important points regarding effects</h2>
                <ul>
                    <li>They are triggered with state and props updates, as well as after initial render to the DOM</li>
                    <li>Effects are used to trigger certain actions based upon changes to a component</li>
                    <li>Effects can return cleanup functions, which can clean up timers using memory, listeners to outside API's, and other functions which may use system resources</li>
                </ul>
                <SampleEffect />
                <br />
                <SampleEffect />
            </div>
        </div>
    );
};

export default Effects;

const SampleEffect = () =>{
    const [timerRunning, setTimerRunning] = useState(false);
    
    useEffect(()=>{
        let timer;
        if (timerRunning) {
            timer = window.setTimeout(()=>{
                console.log(`the timer expired`, Date.now()/1000);
                setTimerRunning(false);
            }, 2000)
        };
        return () => {window.clearTimeout(timer); console.log(`the timer was cleaned up`, Date.now()/1000)};
    });

    useEffect(()=>{
        console.log(`this painting needs some happy trees`);
    }, [])

    let buttonHandler = () =>{
        if (!timerRunning) {
            setTimerRunning(true);
        }
    };

    return(
        <div style={{border: '1px dashed black'}}>
            <h2>This component demos an effect</h2>
            <button onClick={buttonHandler}>Click me to start an effect in the console</button>
        </div>
    )
}