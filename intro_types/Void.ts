function returnAnObjectOfAParticularShape(){
    return {key1:1, key2:2};
}

function functionNoReturnValue(): void{
    console.log(`I don't return a value`);
}

const arrowFunctionWithVoidReturn : ()=>void=():void=>{
    return console.log(`Returning a function that has a void return`);
}