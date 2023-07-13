// use interface
interface Cases {
    n: string,
    g: "male" | "female"
}

let cases: Cases[] = [
    {n: "Mr. Foo", g: "male"},
    {n: "Mr. Doo", g: "male"},
    {n: "Miss. Lara", g: "female"},
];

// use an inline type
let cases_2: {n: string, g: "male" | "female"}[] = [
    {n: "Tom", g: "male"},
    {n: "Miss. Jeny", g: "female"},
];

// use the built in Array<T> 
let cases_3: Array<{n: string, g: "male"|"female"}> = [
    {n: "Mr. John", g: "male"},
    {n: "Miss. Hena", g: "female"},
];

function printText(name: string, gender: "male" | "female"): void {
    console.log(`User Name : ${name} & Gender is ${gender}`);
}

cases.map((item) => {
    printText(item.n, item.g);
});

cases_2.map((item) => {
    printText(item.n, item.g);
});

cases_3.map((item) => {
    printText(item.n, item.g);
});

/**
 * @output
 * 
 *  "User Name : Mr. Foo & Gender is male" 
 *  "User Name : Mr. Doo & Gender is male" 
 *  "User Name : Miss. Lara & Gender is female" 
 *  "User Name : Tom & Gender is male" 
 *  "User Name : Miss. Jeny & Gender is female" 
 *  "User Name : Mr. John & Gender is male" 
 *  "User Name : Miss. Hena & Gender is female" 
 * 
 */