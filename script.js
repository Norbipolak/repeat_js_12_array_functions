/*
toString();
join();
concat();
splice();
slice();
indexOf();
lastIndexOf();
forEach();
map();
filter();
reduce();
some();
every();
flat();
find();
findIndex();
sort();
*/ 

let names = ["Danny", "Joe", "Sarah", "Molly"];

//toString()
let stringNames = names.toString();
console.log(stringNames);
/*
és akkor visszaad ebből egy stringet -> Danny,Joe,Sarah,Molly szóval egy string ami el van választva vesszőkkel 
************************************************************************************************************************************************
*/ 

//join();
/*
Ez nagyon hasonló metódus, csak itt meg tudjuk határozni, hogy mivel legyen elválasztva, mert a toString()-nél ott mindig vesszővel lesznek
egymástól elválasztva az értékek 
*/
let stringNames2 = names.join(",");
console.log(stringNames2); //teljesen ugyanazt kaptuk, mint a toString()-nél Danny,Joe,Sarah,Molly
/*
de a gyakoribb az, hogy nem csak (",") hanem szóköz vesszővel (", ") választjuk el egymástól -> Danny, Joe, Sarah, Molly
*/
// de el tudjuk választani így is 
let stringNames3 = names.join(" and ");
console.log(stringNames3); //Danny and Joe and Sarah and Molly
/*
Szóval ez mindig egy string lesz csak meg tudjuk határozni, hogy mivel tudjuk elválasztani, ami bármi lehet szinte
***********************************************************************************************************************************************
*/

//concat();
/*
concat() az arra jó tömb-öknél, hogy összekössünk vele még egyet, ezért csinálunk egy új tömböt, de azt is megcsinálhatnánk 
hogy az eredetihez adnánk hozza ugyanazt és akkor az új tömb, amit visszakapunk, abban kétszer szerepelnek ugyazok az értékek 
*/
let names2 = ["John", "Tom"];
let concated = names.concat(names2);
console.log(concated); //['Danny', 'Joe', 'Sarah', 'Molly', 'John', 'Tom']
//visszakaptuk a két tömb értékeit egy tömbben 

/*
de mi van ha ezeket az értékeket amik vannak egy tömbben nem csak kétszer, hanem többször szeretnénk multiplikálni vagy mi van akkor hogyha 
több tömböt szereténk concat-olni 
-> 
*/
//ugyanazt a tömböt többször szeretnénk concat-olni!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let arr = [1, 2, 3];
let repeatedArr = arr.concat(arr, arr);
console.log(repeatedArr); // Output: [1, 2, 3, 1, 2, 3, 1, 2, 3]

//több tömböt szeretnénk concat-olni 
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];
let combinedArr = arr1.concat(arr2, arr3);
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]
/******************************************************************************************************************************************/ 

//splice();
/*
Arra használjuk, hogy töröljünk elemeket a tömbböl de arra is lehet, hogy újjakat adjunk hozzá 
2. paraméter
1. az index ahonnan kezd
2. hogy hányat vegyen ki (lehet ez a szám nulla is és akkor nem vesz ki semmit)
    ha meg egy akkor azt fogja kivenni amelyiket megadtunk a kezdőindex-nek!!!! 
lehet azt is, hogy nem adunk meg második paramétert és akkor kiveszi az összeset az index-től!!! 
*/

// let splicedNames = names.splice(1, 1);
// console.log(splicedNames); //['Joe']
// console.log(names); // eredeti tömb már a splice() után ['Danny', 'Sarah', 'Molly']
/*
Visszakaptunk egy tömböt azzal, hogy "Joe", mert ez volt az első indexen és egyet szedtünk ki 
nagyon fontos, hogy a splice() az megváltoztatja az eredeti tömböt, ezért most abban nem lesz benne a "Joe"!!!!!!!!!!!!!!!!!!!!!!!!
*/ 

/*
mivel a splice() megváltoztatja az eredeti tömböt és ez nem jó, mert ezt a tömböt több helyen is fel szeretnénk használni és nem szeretnénk 
hogy a splice() utána megváltozzon
-> 
ezért csinálunk egy másolatot a names tömbből és azon fogunk splice()-olni!!!!!!!!!!!!!!!!!!
itt jön a spread operator, amit majd a React-ben sokat fogunk használni!!! 
*/ 
let namesCopy = [...names];
console.log(namesCopy); //['Danny', 'Joe', 'Sarah', 'Molly'] ugyanaz, mint az eredeti tömb 

namesCopy.splice(1, 1);//fontos, hogyha ez egy változóban lenne akkor ezt adná vissza ['Joe'] így meg ['Danny', 'Sarah', 'Molly']!!
console.log(names); // ['Danny', 'Joe', 'Sarah', 'Molly']
console.log(namesCopy); //['Danny', 'Sarah', 'Molly']
//names eredeti tömb ugyanaz maradt a másoltból viszont kivettük a "Joe"-t 

/*
hogy adjunk hozzá új elemeket a tömbhöz 
Eltüntetjük a "Joe"-t meg a "Sarah"-t és kicseréljük őket "Bill"-re és "Bob"-ra 
*/
//names.splice(1, 2, "Bill", "Bob"); //['Danny', 'Bill', 'Bob', 'Molly']
//console.log(names);

// names.splice(2);
// console.log(names); -> 2-indextől mindegyiket kiszedi, azt is beleéertve!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*****************************************************************************************************************************************/

//slice() 
/*
nagyon könnyű összekeverni a splice()-val, itt viszont nem tudunk hozzáadni és ez is két paramétert vár 
1. hogy melyik index-től szedje ki 
2. hányadik index-ig, de ez már nem lesz benne és mivel ez nem befolyásolja az eredeti tömböt ezért létre kell hozni egy változót 
amiben visszakapjuk a módosított tömböt és az eredeti ugyanaz marad
*/ 

//ki akarjuk szedni a "Joe"-t és "Sarah"-t 1 és a 2-dik indexen lévőket, mármint, hogy azok legyenek az új tömbbe, amit visszakapunk 
let sliced = names.slice(1, 3);
console.log(sliced); // ['Joe', 'Sarah']
console.log(names); //eredeti tömb nem változik -> ['Danny', 'Joe', 'Sarah', 'Molly']

/*
Ennél is lehet, hogy nem adunk meg második paramétert és ilyenkor kiszedi sz összeset az adott index-től 
*/
let sliced2 = names.slice(1);
console.log(sliced2); //['Joe', 'Sarah', 'Molly']
/******************************************************************************************************************************************/

//indexOf() 

/*
Megtalálja egy adott elemnek az index-ét egy tömbben, ugyanaz, mint a findIndex, de fontos, hogy itt nem használunk callback-et!!! 
*/ 

//"Joe"-nak az indexét szeretnénk megatalálni!

const indexJoe = names.indexOf("Joe");
console.log(indexJoe); //1
/*
Nagyon fontos, hogy mindegy, hogy hány "Joe" van a tömbben, ez akkor is egy lesz, mert az elsőt találja meg és akkor annak az index-e!!!! 
*/

const indexJoe2 = names.findIndex((i)=> i === "Joe");
console.log(indexJoe2); //1

const notJoe = names.findIndex((i)=> i !== "Joe");
console.log(notJoe); //0 mert az elsőt adja vissza ami nem "Joe" az meg a nulladik index-en van a Danny
/**********************************************************************************************************************************/

//lastIndexOf() 

/*
Az indexOf() mindig az első megtalálásnak a indexét fogja visszaadni, de ha mi az utolsóra vagyunk kiváncsiak, akkor a lastIndexOf-ot 
használjuk  
*/

names2 = ["Joe","Joe","Joe","Joe","Joe",]
let lastIndexJoe = names2.lastIndexOf("Joe");
console.log(lastIndexJoe);//4 -> mindig az utolsó egyezésnek az indexét fogja visszaadni!!! 

let lastIndexJoe2 = names.lastIndexOf("Joe");
console.log(lastIndexJoe2); //1 
//ha egy van benne, mint a names tömbbe, akkor ugyanazt fogja vissza az indexOf() és a lastIndexOf() is 
/****************************************************************************************************************************************/

//flat() 

//ehhez csinálunk egy tömböt számokkal 
let nums = [1,2,3,4,[5,6],7];// ebben van egy nested tömb is 
console.log(nums);//(6) [1, 2, 3, 4, Array(2), 7] van egy tömb amiben vannak számok és van benne egy tömb

/*
Azt csinálja a flat(), hogy eltünik a belső tömb és az értékei a külső tömbben lesznek 
*/
let flated = nums.flat();
console.log(flated); //[1, 2, 3, 4, 5, 6, 7] és akkor az a nested tömb az eltünik 

//fontos, hogy csak egy tömböt tud eltávolítani 
let nums2 = [1,2,3,4,[5,6,[7,8]],9]
let flated2 = nums2.flat();
console.log(flated2); //[1, 2, 3, 4, 5, 6, Array(2), 9]

/*
ha több mint egy tömböt akarunk flat()-elni, a default az, hogy csak egyet megy 
->
de meg tudjuk adni, hogy flat(2); és akkor kettőig megy 
*/
let flated3 = nums2.flat(2);
console.log(flated3); //  [1, 2, 3, 4, 5, 6, 7, 8, 9] és akkor a második nested tömb is eltünik

/******************************************************************************************************************************************/7

//higher-order metódsuk 

/*
Amiknél kell egy függvény!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Ezek függvények amik függvényekkel müködnek!!! 
*/

//forEach 

/*
Végigiterál a tömb minden elemén 
Megadunk neki egy callback function-t és kikonzolozzuk 

Különbség a map és a forEach között 
- forEach-vel végigmegyünk az eredeti tömbön és azon végezhetünk el valami müveletet (minden elemen), update-elhetünk vagy csak konzolozunk, nagyon fontos 
hogy itt ez nem csinál nekünk egy új tömböt hanem az eredetin megy a változás ha van!!! (return value undefined)

const array = [1, 2, 3, 4, 5];
array.forEach(element => {
  console.log(element); // Prints each element
});

- map visszaad egy új tömböt a megváltoztatott elemekkel, ezért kell hogy legyen egy változó, amiben elmentjük az új tömböt, amíg ez a 
forEach-nél nem vagyis undefined lesz!!! 

const array = [1, 2, 3, 4, 5];
const doubledArray = array.map(element => element * 2);
console.log(doubledArray); // [2, 4, 6, 8, 10]

map-val is megcsinálhatjuk azt, hogy konzolozuk az eredeti tömb elemeit, de nem ez a funkciója, amiért csinálták 
const array = [1, 2, 3, 4, 5];
array.map(element => {
  console.log(element); // This will work but is not the intended use of map
});
*/

//minden egyes iterációnál meg lesz hivva ez a callback function és ki lesz log-olva 
names.forEach((n)=> {
    console.log(n);
});
/*
Danny
Joe
Sarah
Molly
*/

/*
ez teljesen azt csinálja, mint a for 
*/
for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//vagy
for(const name of names) {
    console.log(name);
}

for(let i = 1; i < names.length; i += 2) { //i += 2 ugyanaz, mint i = i + 2, egyesével meg az i++ az ugyanaz, mint az i = i + 1
    console.log(names[i]);
}
//Joe Molly mert egyes index-ről indulunk és kettesével megyünk 


//erre is lehet használni, hogy megtudjuk, hogy mi a length-je a tömbnek 
let count = 0;

names.forEach(()=> {
    count++;
});
console.log(count); //4

/*
fontos, hogy mindegyik a forEach() és a map() is vissza tud adni egy elem-en (érték), kivül index-et és magát a tömböt is 
*/ 
const array = [10, 20, 30];
array.forEach((element, index, arr) => {
  console.log(`Element at index ${index} is ${element}`);
});
/*
Element at index 0 is 10
Element at index 1 is 20
Element at index 2 is 30
*/ 

const newArray = array.map((element, index, arr) => {
  console.log(`Element at index ${index} is ${element}`);
  /*
  Element at index 0 is 10
  Element at index 1 is 20
  Element at index 2 is 30
  ugye ez még az eredeti tömb, mert itt még nem történt semmi változás, vagyis az eredeti tömb értékei egy új tömbben 
  */
  return element * 2;//itt megtörténik a változás, kell a return, mert van {}!!!! 
});
console.log(newArray); // [20, 40, 60]

/*******************************************************************************************************************************************/

//map() 

/*
csinálunk map-ra egy tömböt számokkal
*/ 
let numbers = [1,2,3,4,5,6];

//ennek az elemeit * 2 és az lesz az új tömbbe!! (kell egy változó az új tömbnek -> const newNumbers!)

const newNumbers = numbers.map((n)=> n * 2);
console.log(newNumbers); //[2, 4, 6, 8, 10, 12]

//vagy lehet a {} de ott kell return!!! 

const newNumbers2 = numbers.map((n)=> {return n * 3});
console.log(newNumbers2); //[3, 6, 9, 12, 15, 18]

//Ha vissza akarunk adni egy új tömböt és nem azt akarjuk, hogy a változtatások az eredetin legyenek, akkor kell a map()!! 
/*********************************************************************************************************************************************/

//filter()

let posts = [
    {title: "post1", author: "Dan"},
    {title: "post2", author: "Dan"},
    {title: "post3", author: "Sarah"}
]

//filter() is visszaad egy új tömböt 

//azt szeretnénk, hogy azokat adja vissza ahol a "Dan" az author 

//végigmegy az objektumokon és azt (objektumot) rakja bele a tömbbe, ahol az author "Dan"
const newFilter = posts.filter((n) => n.author === "Dan");
for(keyValues of newFilter) {
    console.log(keyValues);
    /*
    {title: 'post1', author: 'Dan'}
    {title: 'post2', author: 'Dan'}
    */
}
console.log(newFilter);
/*
mert ez nem adta vissza teljesen csak így 
(2) [{…}, {…}]
0: {title: 'post1', author: 'Dan'}
1: 
{title: 'post2', author: 'Dan'}
length: 2
[[Prototype]]: Array(0)
*/ 

/*
ez csak arra jó, hogyha az értékpárok egy tömbben vannak, nem úgy mint itt, hogy egy objektum-ban és abból lehet objektumot így csinálni!! 
const newFilter = [
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3']

  modnjuk abba az esetben ha 
];

*/
// const newObject = {}

// function createObjects() {
//     for(keyvalues of newFilter) {
//         newObject[keyvalues[0]] = keyvalues[1];
//     }
//     return newObject;
// }

/*
ez egy jobb megoldás, hogy kér a createObjects egy tömböt, mert akkor másikakra is fel lehet használni, nem csak erre 

function createObjects(filterArray) {
    const obj = {};
    for (const keyvalues of filterArray) {
        obj[keyvalues[0]] = keyvalues[1];
    }
    return obj;
}

// Call the function with newFilter as the argument
const newObject = createObjects(newFilter);

// Print the newObject after it has been populated
console.log(newObject);
*/

// createObjects();
// console.log(newObject);

/*
nagyon fontos, hogy az entries() add vissza nekünk egy tömböt tömbökkel és abban vannak az értékpárok 
és akkor meg lehet csinálni egy függénnyel is, hogy ne tömbök legyenek értékpárokkal a tömbben, hanem 
csak az értékpárok egy objektumban -> { key1: 'value1', key2: 'value2', key3: 'value3' }

de ezt lehet egyszerübben is csinálni, hogy használjuk az Object.fromEntries metódust 
->
const newFilter = [
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3']
];

const newFilterObject = Object.fromEntries(newFilter);

console.log(newFilterObject);
// Output: { key1: 'value1', key2: 'value2', key3: 'value3' }

vissza a filter-re!!! 
*/

let notDanFilter = posts.filter((p)=> p.author !== "Dan");
console.log(notDanFilter);
/*
[{…}]
0: {title: 'post3', author: 'Sarah'}
length: 1
[[Prototype]]: Array(0)
*/

let existing = posts.filter((p)=> p.author !== undefined) 
console.log(existing);
/*
0: {title: 'post1', author: 'Dan'}
1: {title: 'post2', author: 'Dan'}
2: {title: 'post3', author: 'Sarah'}
length: 3
[[Prototype]]: Array(0)
*/

let length = posts.filter((p)=> p.author.length > 4)
console.log(length); //Ez már csak a Sarah 
/*
[{…}]
0: {title: 'post3', author: 'Sarah'}
length: 1
[[Prototype]]: Array(0)
*/

let firstLetterD = posts.filter((p)=> p.author[0] === "D")
console.log(firstLetterD);
/*

(2) [{…}, {…}]
0: {title: 'post1', author: 'Dan'}
1: {title: 'post2', author: 'Dan'}
length: 2
[[Prototype]]: Array(0)
************************************************************************************************************************************************
*/

//Reduce 

/*
Összeadja az értéket, lesz egy total, amihez minden körben hozzáadja az aktuális értéket, fontos megahtározni, hogy mennyiről kezdünk!!! 
*/

let nums3 = [1,2,3,4,5,6,7,8,9,10];

let reduced = nums3.reduce((total, element)=> total += element,0);//0, hogy mennyi a total mielőtt elkezdjük hozzáadogatni 
console.log(reduced); //55 

/*
vagy lehet a {} de akkor kell a return
*/ 

let reduced2 = nums3.reduce((total, subTotal)=> {
    return total += subTotal;
}, 0);
console.log(reduced2); //55
/*
a tömb visszad egy single value-t értéket, ami egy szám lesz!! 
*/

let reduced3 = nums3.reduce((total, subTotal)=> total += subTotal, 100);
console.log(reduced3); //155

//reduce, hogy megtaláljuk a max-ot egy függvényben 
let maximum = Math.max(nums3);
console.log(maximum); //NaN
//nem jó fontos, hogy ki kell bontani a tömböt és a Math.max() csak úgy fogja megtalálni!!! 

let maximum2 = Math.max(...nums3);//itt nagyon fontos, hogy nem kell egy array hanem csak simán kibontjuk és nem tesszük bele egy másik tömbbe 
console.log(maximum2); //10

//fontos, hogy reduce-val is meg lehet találni 

let maximum3 = nums3.reduce((max, current) => (current > max ? current : max), -Infinity);
console.log(maximum3); //10
/*
(current > max ? current : max)
ha current az nagyobb, mint a max, akkor legyen a current, amugy meg legyen max, ami eddig is volt 

let max = -Infinity;

for(let i = 0; i < nums3.length; i++) {
    if(nums3[i] > max) 
        max = nums3[i]
}

console.log(max);
*/

let maximum4 = nums3.reduce((a, b)=> Math.max(a, b), -Infinity);
console.log(maximum4);
/*
A kezdőérték az -Infinity az lesz a 
a b meg a kezdő érték a tömbben, tehát a nullás index-en lévő 1 
és akkor itt jön a Math.max(), ami megtalálja ezek közük a nagyobbat 

következő körben az 1 lesz az a és b meg a 2, itt is megnézi, hogy mi lesz a nagyobb 

Az a lényeg, hogy az első paraméter az indul onnan amit megadtunk, hogy 0 vagy -Infinity a második meg a tömb első elemétől és akkor tolódik 
*/

let maxx = Math.max(3, 23);
console.log(maxx);
/*
Math.max() az csinálja, hogyha megadunk neki értékeket min 2 de lehet több is akkor az kiválasztja a legnagyobbat 
**********************************************************************************************************************************************
*/

//some()

/*
ez egy olyan, mint egy test 
nagyon fontos megjegyezni a some() és az every-nél, hogy a visszatérési értékük az mindig true-false 
mikor true 
    some() -> ha valamelyik elem teljesíti a feltételt akkor true lesz 
    every() -> csak akkor lesz true, ha mindegyik elem teljesíti a feltételt!!! 
*/

let isGreaterThan5 = nums3.some((a)=> a > 5);
console.log(isGreaterThan5); //true

/*******************************************************************************************************************************************/
//every()

let allGreaterThan0 = nums3.every((a)=> a > 0);
console.log(allGreaterThan0); //true, mert mindegyik nagyobb, mint 0 

/********************************************************************************************************************************************/
//find() 

/*
hogy megtaláljunk egy bizonyos dolgot a tömbben 
*/ 

let stock = [
    {item: "ketchup", quantity: 32},
    {item: "mayo", quantity: 9},
    {item: "hot sauce", quantity: 12}
]


let found = stock.find((a)=> a.item === "ketchup");
console.log(found); //{item: 'ketchup', quantity: 32}

/*
filter és a find nagyon hasonló csak 
a filter visszaadja az összes elemet ahol egyezőséget talált 
find csak az első elemet fogja visszaadni 

nagyon fontos különbség
filter visszaad egy új tömböt, ha nincsen egyezőség akkor egy üres tömböt fog visszaadni 
find visszaadja azt az elemet, ahol egyezőség van (csak az első elemet) és ha nincs ilyen elem akkor az értéke undefined lesz!! 
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/ 

let mayo = stock.find((a)=> {
    return a.item === "mayo"; 
});
console.log(mayo); //{item: 'mayo', quantity: 9}

//ha meg akarjuk szerezni a quantity -> 
console.log(mayo.quantity); //9

//ehhez nagyon hasonló a findIndex, csak ott az indexét adja vissza, nem az egészet, mint a find-nál az objektumot 

let mayo2 = stock.findIndex((a)=> a.item === "mayo");
console.log(mayo2); //1

/******************************************************************************************************************************************/

//sort() 

let namesAgain = ["Joe", "Danny", "Molly", "Sarah"];

/*
ha ezeket alfabetikus sorrendbe akarjuk rendezni
*/

let alph = namesAgain.sort();
console.log(alph);
/*
['Danny', 'Joe', 'Molly', 'Sarah']
Visszakaptunk egy tömböt, ahol abc sorrendben vannak az elemek 

sort az stringeken dolgozni ha pl.itt number-ek lennének, az nem lenne jó, de van rá megoldás 
*/

let numbersAgain = [2,4,1,8,5];

let sorted = numbersAgain.sort();
console.log(sorted); // [1, 2, 4, 5, 8]

/*
Jó lett, de csak azért, mert ezek egyjegyű számok és a JavaScript tudja, hogy az 1 kisebb mint a 2 
de ebben az esetben 
*/

let numbersAgain2 = [2,4,11,8,5];
let sorted2 = numbersAgain2.sort();
console.log(sorted2); //[11, 2, 4, 5, 8]
/*
Ha van kétjegyű akkor ez már így nem müködik, mert JavaScript csak az első digit-et nézi!!! 
*/

//itt kell egy callback function 
let sorted3 = numbersAgain2.sort((a, b)=> a - b);
console.log(sorted3);

/*
a lesz az első elem, ami 2 
b lesz a második elem, ami 4 

így müködik a reduce is csak ott meg lehet adni egy második paraméterben, hogy az a az onnan induljon és akkor a b meg az elsőtől 

-> 
tehát 2 - 4 az minusz 2 és tudja, hogyha ez egy negatív akkor a kell, hogy elöbb jöjjön, mint az b
*/

//ha meg fordított sorrendben akarjuk, akkor b - a 
let sorted4 = numbersAgain2.sort((a, b)=> b - a);
console.log(sorted4);
/*
[11, 8, 5, 4, 2]
*/

