import { displayLog } from './utils';
import { fromEvent } from 'rxjs';
import { map, takeLast, takeWhile, tap, reduce, scan} from "rxjs/operators";
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
        //aplica un acomulador y emite el resultado al cerrar el stream 
        /*reduce((accumulated, current) => {
            return {
                clicks: accumulated.clicks +1,
                cells: [... accumulated.cells, current]
            }
        }, {clicks:0, cells:[]}),*/
        //scan emite un evento con el valor acomulado (total acomulado, evento actual)
        scan((accumulated, current) => {
            return {
                clicks: accumulated.clicks +1,
                cells: [... accumulated.cells, current]
            }
        }, {clicks:0, cells:[]}) 
    );

    const subscription = click$.subscribe(data => displayLog(data.clicks));

    /** end coding */
}