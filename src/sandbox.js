import { displayLog } from './utils';
import { fromEvent } from 'rxjs';
import { map, takeLast, takeWhile, tap, last, skip} from "rxjs/operators";
export default () => {
    /** start coding */
    const grid = document.getElementById('grid');
    const click$ = fromEvent(grid, 'click').pipe(
        map(val => [ 
            Math.floor(val.offsetX/50), 
            Math.floor(val.offsetY/50)
        ]),
        //mientras pase x
        //takeWhile(([col, row]) => col > 3),
        tap(val => console.log(`valid in takewhile ${val}`),
        //omitir los eventos inicialeso tomar los finales
        skip(5)
        //ultimo evento
        //last()
        //Las ultimas por parametro
        //takeLast(3)
        )
    );

    const subscription = click$.subscribe(data => displayLog(data));

    /** end coding */
}