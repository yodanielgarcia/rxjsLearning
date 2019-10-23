import { displayLog } from './utils';
import { fromEvent } from "rxjs";
import { mapTo, filter } from "rxjs/operators";
import { map, tap } from "rxjs/operators";

export default () => {
    /** start coding */
   const grid = document.getElementById('grid');
   const Click = fromEvent(grid, 'click').pipe(
       //mapTo('CLICK')
       tap(val => console.log('before', val)),
       map(val => [
           Math.floor(val.offsetX / 50),
           Math.floor(val.offsetY / 50)]),
           tap(val => console.log('after', val))
       //filter( val => (val[0] + val[1]) %2 != 0),
   );

   //MapTo para emitir
   const sub = Click.subscribe(data => console.log(data));
    /** end coding */
}