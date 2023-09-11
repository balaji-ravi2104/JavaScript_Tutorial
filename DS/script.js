/* =========================================================
// Datastructures in JS
// ==========================================================
// 	i) Map
// 	ii)WeakMap
// 	iii)Set
// 	iv)WeakSet
	
// Problem with JSON
//  - if we are having key as object for more than one key
//    value pairs, latest value overrides previous value.
//  - to overcome this issue Map() and WeakMap() are used
*/

/*
i) Map()
	- size
	- Map()
	- get()
	- set()
	- has()
	- delete()
	- clear()
	- keys()
	- values()
*/


// let map = new Map();
// console.dir(map);


//Eg01
/*
let key1 = {}
let key2 = {}
let val1 = `balaji_1`
let val2 = `balaji_2`

map.set(key1,val1);
map.set(key2,val2);

console.log(map);
*/

//Eg02
/*
map.set(`key1`,`balaji1`)
    .set(`key2`,`balaji2`)
    .set(`key3`,`balaji3`)
    .set(`key4`,`balaji4`)
    .set(`key5`,`balaji5`)

console.log(map);
console.log(map.size); // 5
console.log(map.keys());
console.log(map.values());
console.log(map.has(`key5`));
console.log(map.get(`key3`));
map.delete(`key1`);
// console.log(map);

for(let[K,V] of map)
    console.log(K,V);

*/    

//Eg03
/*
map.set(`key1`,`balaji1`)
    .set(`key2`,`balaji1`)
console.log(map);

// duplicate keys will override a latest value
map.set(`key3`,`balaji3`)
    .set(`key3`,`balaji4`)

console.log(map);
*/


/*
ii)WeakMap
 - it won't allow primitives as keys
 - WeakMap()
 - delete()
 - get()
 - set()
 - has()
*/

/*
let wm = new WeakMap();
console.log(wm);

let key1 = {}
let key2 = {}
let val1 = `balaji_1`
let val2 = `balaji_2`

wm.set(key1,val1)
   .set(key2,val2)
   .set(`key3`,`balaji3`) // primitives keys are not allowed in weakmap


console.log(wm);
*/

/*
iii)Set:- duplicates are discarded
 - Set()
 - has()
 - add()
 - delete()
 - clear()
 - values()
 - keys()
*/

// let set = new Set()
// console.dir(set);

// Eg01
/*
set.add(10)
    .add(20)
    .add(30)
    .add(10)
    .add(20)

console.log(set);


// Eg02

/*
let arr = [10,20,30,40,20,30,40]
let set = new Set(arr)
console.log(set);
*/

// Eg04
/*
set.add(10)
    .add(20)
    .add(30)
    .add(40)

console.log(set);
console.log(set.keys()); // SetIterator {10, 20, 30, 40}
console.log(set.values()); // SetIterator {10, 20, 30, 40}
set.delete(20)
// console.log(set);
console.log(set.has(40)); // true
set.add(50)

for(let V of set)
    console.log(V);

set.clear()
console.log(set);
*/


    // iv) WeakSet
    // it won't allow primitives as values
        // i)add
        // ii)delete
        // iii)has
        // iv)WeakSet()



/*
let ws = new WeakSet()
// console.log(ws);
// ws.add(1); //TypeError - it won't allow primitives as values

let obj1 = {key1:`balaji1`}
let obj2 = {key2:`balaji2`}
let obj3 = {key3 : 100}

ws.add(obj1)
  .add(obj2)
  .add(obj3)

console.log(ws);

console.log(ws.has(obj1)); // true
ws.delete(obj2)
console.log(ws);
*/


// Map inside a map example

let outerMap = new Map()

let innerMap = new Map()

innerMap.set('key1','value1')
innerMap.set('key2','value2')

console.log(innerMap);

outerMap.set('outerkey1',innerMap)

console.log(outerMap);
console.log(outerMap.get('outerkey1')); // Map(2) {'key1' => 'value1', 'key2' => 'value2'}
console.log(outerMap.get('outerkey1').get('key1')); // value1


// Map inseide weakmap example
