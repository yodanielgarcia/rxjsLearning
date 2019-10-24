import { displayLog } from './utils';
import { fromEvent } from "rxjs";
import { map, first, take, takeWhile } from "rxjs/operators";

export default () => {
    /** start coding */
   const grid = document.getElementById('grid');
   const Click = fromEvent(grid, 'click').pipe(
       map(val => [
           Math.floor(val.offsetX / 50),
           Math.floor(val.offsetY / 50)
        ]),
        //operador first sirve para quedarse con la primer accion ejecutada
        //la validacion se manda por medio del parametro creando una funcion de predicado
        // first(val => val[0] > 3),
        //operador take toma los primeros N eventos q se manden como parametro
        // take(4)
        //emitir eventos mientras se compla una condicion
        takeWhile(([col, row]) => col > 3)
   );

   //MapTo para emitir
   const sub = Click.subscribe(data => console.log(data));
    /** end coding */
}