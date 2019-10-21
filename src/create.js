import { displayLog } from './utils';
import { from } from "rxjs";
export default () => {
    /** start coding */
    const myArray = [1,2,3,4,5,6,7];

    const myString = "Hello world";
    const myPromise = new Promise(resolve => setTimeout(() => {
        resolve('hello world');
    }, 2000));

    const observableArray = from(myArray);
    const observableString = from(myString);
    const observablePromise = from(myPromise);

    const subscribeArray = observableArray.subscribe( val => displayLog(val));
    const subscribeString = observableString.subscribe( val => displayLog(val));
    const subscribePromise = observablePromise.subscribe( val => displayLog(val));

   //From para convertir promises en observables--------secuencias obserbables a partir de arrays
    /** end coding */
}