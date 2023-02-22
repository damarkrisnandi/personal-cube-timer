import { interval, fromEvent } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { takeUntil } from 'rxjs/operators';
import { RecordData } from './recordData';
import { ScrambleService } from './scramble';

export class TimerEvent {
    TimerObserve = () => {
        let scrambleView = document.getElementById('scramble');
        let listView = document.getElementById('timelist')
        let start = false; 
        
        const timePad = document.getElementById('timepad');

        let key$ = fromEvent(timePad, 'touchend').pipe(
            tap(() => {
                start = !start
                console.log('isStarted', start)
            })
        )

        fromEvent(timePad, 'touchstart').subscribe(() => {
            if (!start) {
                let timerView = document.getElementById('app-timer');
                timerView.className = 'transform transition text-green-400 text-9xl ease-in-out';
            }
        })
    
        let tenthSecond$ = interval(10).pipe(takeUntil(key$));
        
        key$.subscribe(() => {
            const subscription = tenthSecond$.subscribe(num => {
                this.setNumber(`${(num/100).toFixed(2)}`)
            });
    
            if (!start) {
                subscription.unsubscribe();
                let timerView = document.getElementById('app-timer');
                scrambleView = document.getElementById('scramble');
                (new RecordData()).createRecord({
                    time: parseFloat(timerView.innerText),
                    scramble: scrambleView.innerText
                });

                let listView = document.getElementById('timelist')
                listView.innerText = (new RecordData()).getRecords().map(o => o.time).slice(-50).join(', ')

                start = true;
                (new ScrambleService()).getScramble();

                

                
            } else {
                this.setNumber((0).toFixed(0));
            }
        })
        
    }
    
    setNumber = (num) => {
        let timerView = document.getElementById('app-timer')
        timerView.className = 'text-white text-8xl';
        timerView.innerText = num;
    }
}