function createGreeting(name: string = 'You', favNum:number|string, optional?:{phrase1:string, phrase2?:string}):string{
    let initialPhrase = `Helo, ${name}, your favouritee number is ${favNum}`;
    optional?.phrase1 ? initialPhrase += ` ${optional.phrase1}`:null;
    optional?.phrase2 ? initialPhrase += ` ${optional.phrase2}`:null;

    return "a"
}

//Arrow functions can be declares as a type on a variable
const arrowFunctionCreateGreeting: (name:string, favNum: number | string, optional?:{phrase1:string, phrase2?:string})
=> string =(name:string = `You`, favNum:number|string, optional?:{phrase1:string, phrase2?:string}) => {
        let initialPhrase=`Hello, ${name}, your favourite numer is ${favNum}`;
        optional?.phrase1 ? initialPhrase += ` ${optional.phrase1}`:null;
        optional?.phrase2 ? initialPhrase += ` ${optional.phrase2}`:null;

        return initialPhrase;
    };

    createGreeting("Jhon", 42);
    console.log(arrowFunctionCreateGreeting("Bob",45,{phrase1:`Awesome`}));