let unknownValue : unknown;

unknownValue = true;
unknownValue = 42;
unknownValue = "Hello world";
unknownValue = [];
unknownValue= {};
unknownValue = Math.random;
unknownValue = undefined;
unknownValue = new TypeError();

let anotherUnknown: unknown= "A value I know"

function stringify(data:unknown):string{
    if(typeof(data) === 'number'){
        return data.toString();
    }
    if(data instanceof Date){
        return data.toDateString();
    }

    return String(data)
}

stringify(anotherUnknown);
stringify(46);
stringify(new Date(Date.UTC(2020,4,4,0,0,0)));