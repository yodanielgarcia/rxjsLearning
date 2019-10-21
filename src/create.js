import { displayLog } from './utils';
import { of, range } from "rxjs";
export default () => {
    /** start coding */
    const source = of(1,2,3,4,5,6,7);
    const sourceTwo = of(
        [1,2,3,4,5,6,7],
        "hello world",
        {foo:"bar"},
        function sayHello() {
            return "hi!";
        }
    );
    const sourceTree = range(3,10);//secuencia ordenada desde el valor
    const subscriptionSec = source.subscribe( data => displayLog(data));
    const subscriptionObj = sourceTwo.subscribe( data => displayLog(data));
    const subscriptionRange = sourceTree.subscribe( data => displayLog(data));

    //OF crear secuencias de observables
    /** end coding */
}