import { displayLog } from './utils';
import { interval, timer } from "rxjs";
export default () => {
    /** start coding */
    const source = interval(500);
    const sub = source.subscribe(val => displayLog(val));
    //timer es el remplazo de setTimeout, crear intervalos de los eventos

    timer(3000).subscribe(() => sub.unsubscribe())

    const sourceTimer = timer(4000, 100);
    const constsubtimer = sourceTimer.subscribe(val => displayLog(`2 - ${val}`));

    timer(600).subscribe(()=> constsubtimer.unsubscribe());
    // setTimeout(() => {
    //     sub.unsubscribe()
    // }, 3000);
    /** end coding */
}