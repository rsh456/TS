/* For running the project not allowing null values:
    tsc NullUndefined.ts --strictNullChecks
*/
const makeMeNull: null =  null;
const MakeMeUndefined: undefined = undefined;

let makeMeNumeric: number;
makeMeNumeric = 10;
makeMeNumeric = makeMeNull;
makeMeNumeric = MakeMeUndefined;

let makeMeAny: any;

makeMeAny = makeMeNull;
makeMeAny = MakeMeUndefined;

let makeMeVoid: void;
makeMeVoid = makeMeNull;
makeMeVoid = MakeMeUndefined;
