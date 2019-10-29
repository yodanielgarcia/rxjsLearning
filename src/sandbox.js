import { displayLog } from './utils';
import { fromEvent } from 'rxjs';
import { map, startWith, takeWhile, tap, endWith} from "rxjs/operators";
export default () => {
    /** start coding */
    const grid = document.getElementById('grid');
    const click$ = fromEvent(grid, 'click').pipe(
        map(val => [ 
            Math.floor(val.offsetX/50), 
            Math.floor(val.offsetY/50)
        ]),
        //mientras pase x
        takeWhile(([col, row]) => col != 0),
        tap(val => console.log(`valid in takewhile ${val}`)),
        startWith("grid dimensions: ", "10*10"),
        endWith("game fin", "bye")
    );

    const subscription = click$.subscribe(data => displayLog(data));

    /** end coding */
}