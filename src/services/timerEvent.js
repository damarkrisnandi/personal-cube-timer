import { interval, fromEvent } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { takeUntil } from 'rxjs/operators';
import { RecordData } from './recordData';
import { ScrambleService } from './scramble';

export class TimerEvent {
    TimerObserve = () => {
        let scrambleView = document.getElementById('scramble');
        let start = false; 
        
        let key$ = fromEvent(window, 'touchend').pipe(
            tap(() => {
                start = !start
                console.log('isStarted', start)
            })
        )

        fromEvent(window, 'touchstart').subscribe(() => {
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