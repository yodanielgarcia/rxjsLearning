import { displayLog } from './utils';
import { Observable } from "rxjs";
export default () => {
    /** start coding */
    const hello = Observable.create((observer) => {
        //metodp next para hacer push de valores
        observer.next("hello");
        setTimeout(() => {
            observer.next("world");   
            //cuando ya esta completo el observable      
            observer.complete();
        }, 2000);
    });
    //secuencia de objetos asincorona
    const observer = {
        next: evt => displayLog(evt),
        error: err => console.error('err[]-',err),
        complete: () => displayLog('[DONE]')        
    }

    const subscribe = hello.subscribe(observer);
    //Subcribe crea una nueva ejecucuon de flujo de datos
    const subscribeTwo = hello.subscribe(observer);
    //Cancelar la subcripcion al observable
    subscribe.unsubscribe();
    /** end coding */
}