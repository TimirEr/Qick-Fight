//COPIED FROM TW 

export default function resolvePromise(prms, promiseState){

    promiseState.promise = prms;
    promiseState.data = null;
    promiseState.error = null;


    function sucessACB(result){
        if(promiseState.promise === prms){
            promiseState.data = result;
        }
    }

    function failureACB(error){
        if(promiseState.promise === prms){
            promiseState.error = error;
        }
        
    }

    if(prms !== null){
        prms.then(sucessACB).catch(failureACB)
    }

}