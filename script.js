const user = {
    id: 215,
    name: "Juan",
    surname: "Pérez",
}
const colours = ["red", "blue", "green", "black", "gray"];
const cities = ["Zaragoza", "Burgos", "Almería", "Madrid", "Avila"];

//---------------------------------- Functions

const hasId = obj => obj.hasOwnProperty("id");
console.log(hasId(user));

//----------------------------------

const head = ([first]) => first;
console.log(head(colours));

//----------------------------------

const tail = ([, ...allButFirst]) => allButFirst;
console.log(tail(colours));

//----------------------------------

const swapFirstToLast = arr => {
    const [first] = arr;
    const [, ...allButFirst] = arr;
    return allButFirst + "," + first;
};
console.log(swapFirstToLast(colours));

//----------------------------------

const excludeId = obj => {
    const { id, ...allButId } = obj;
    return allButId;
}
console.log(excludeId(user));

//----------------------------------

const wordsStartingWithA = arr =>
    arr.filter(word => word[0] === "A" || word[0] === "a");
console.log(wordsStartingWithA(cities));

//----------------------------------

const concat = (...arr) => arr.join(" | ");
console.log(concat("casa", "cueva", "piscina", "viajar"));

//----------------------------------

const multArray = (arr, x) => arr.map(num => num * x);
console.log(multArray([1, 2, 3, 4, 5, 6], 10));

//----------------------------------

const calcMult = (...arr) => arr.reduce((acc, num) => acc * num, 1)
console.log(calcMult(1, 2, 3, 4, 5));

//---------------------------------- Ejercicios Extra

const swapFirstSecond = arr => {
    const [first, second, ...allButFirstSecond] = arr;
    return second + "," + first + "," + allButFirstSecond;
};
console.log(swapFirstSecond(colours));

//----------------------------------

const longest = (char, ...str) => str.every(word => word.substring(0, 1) === char);
console.log(longest("c", "casa", "coche", "carro"));

//----------------------------------

const searchInStringV1 = (str, char) => {
    return Array.from(str).reduce((acc, letter) => {
        if (letter === char) acc++;
        return acc;
    }, 0);
}
console.log(searchInStringV1("cadena de pruebas", "a"));

//----------------------------------

const searchInStringV2 = (str, char) => {
    let result = 0;
    Array.from(str).forEach(letter => {
        if (letter === char) result++;
    });
    return result;
}
console.log(searchInStringV2("cadena de pruebas", "a"));

//----------------------------------

const sortCharacters = str => Array.from(str).sort((a, b) => a > b ? 1 : -1);
console.log(sortCharacters("ibacedfhg"));

//----------------------------------

const shout = (...str) => str.map(word => word.toUpperCase() + "!").join(" ");
console.log(shout("Buenos", "días", "esto", "es", "un", "texto", "de", "Prueba"));

//----------------------------------

const shoppingCart = [
    { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
];

const shoppingCart2 = shoppingCart.map(list => ({ ...list, IVA: 0.21 }));
console.log(shoppingCart2);

shoppingCart2.sort((a, b) => a.units < b.units ? 1 : -1);
console.log(shoppingCart2);

const subtotal = (cart,category) => {
    let result = 0;
    cart.forEach(list => {
        if (list.category === category) {
            result += list.price * list.units * (1 + list.IVA);
        }
    })
    return result;
}
console.log(subtotal(shoppingCart2, "Droguería"));

const showList = cart =>{
   const sortedList = cart.sort((a, b) => a.category > b.category ? 1 : -1);
   sortedList.forEach(list => console.log(list.product, "-->", list.units*list.price, "€"))
}
showList(shoppingCart);