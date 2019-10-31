import { displayLog } from './utils';
import { fromEvent } from 'rxjs';
import { map, takeWhile, tap, distinctUntilChanged} from "rxjs/operators";
export default () => {
    /** start coding */
    const grid = document.getElementById('grid');
    const click$ = fromEvent(grid, 'click').pipe(
        map(val => [ 
            Math.floor(val.offsetX/50), 
            Math.floor(val.offsetY/50)
        ]),
        takeWhile(([col, row]) => col != 0),
        tap(val => console.log(`valid in takewhile ${val}`)),
        // distinct(([col ,row]) => `${col} - ${row}`)
        //evitar eventos de forma consecutiva
        distinctUntilChanged((cell1, cell2) => (cell1[0] == cell2[0]) && (cell1[0] == cell2[0]))
    );

    const subscription = click$.subscribe(data => displayLog(data));

    /** end coding */
}