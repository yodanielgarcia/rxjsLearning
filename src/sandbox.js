import { displayLog } from './utils';
import { fromEvent } from "rxjs";
import { mapTo, filter } from "rxjs/operators";
import { map } from "rxjs/operators";

export default () => {
    /** start coding */
   const grid = document.getElementById('grid');
   const Click = fromEvent(grid, 'click').pipe(
       //mapTo('CLICK')
       map(val => [
           Math.floor(val.offsetX / 50),
           Math.floor(val.offsetY / 50)]),
       filter( val => (val[0] + val[1]) %2 != 0)
   );

   //MapTo para emitir
   const sub = Click.subscribe(data => console.log(data));
    /** end coding */
}