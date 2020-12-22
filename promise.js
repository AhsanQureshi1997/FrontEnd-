const p = new Promise(function(resolve, reject){

    
    setTimeout(() =>{

    
    resolve(1);
    });
    // reject(new Error('Broken ass'));
});

p.then(function(result){
    console.log('Result', result);
});