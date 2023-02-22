import { useEffect } from 'react';
import { TimerEvent } from '../services/timerEvent';

function AppTimer() {    
    useEffect(() => {
        (new TimerEvent()).TimerObserve();
    })

    return ( 
        <div>
            <h1 id='app-timer' className='text-8xl text-white'>0.00</h1>
        </div> 
    );
}

export default AppTimer;