/*==============================================ES6============================================/
1- 
   Var -> Function Scope, Can Be Redeclare,
         Undefined When Accessing Before It's Be Declared,  Create Property In The Window Ob.

   Let -> Block Scope, Can't be redeclare, Can Be Reassigned,
         The Same Variables = Different Variables In Deferent Scopes, 
         Can't Access Before Declaration, Variable doesn't Exist In Window Ob.

   Const -> Block Scope, Must Be Assigned, Can't Be Reassigned, Can't be redeclare, 
         The Same Variables = Different Variables In Deferent Scopes, 
         Can't Access Before Declaration, Variable doesn't Exist In Window Ob.
______________________________________________________________________________
         
2-  Arrow Function /
   ---------------
   let arrowFunc = () => {return 'done'; }
   let arrowFunc = () => 'done';
   let arrowFunc = _ => 'done';
   let arrowFunc = (i,m) => i/m;
   let arrowFunc = i => i/2;
   --
   (This) -> Regular Func .... Get The Object That Called It
         -> Arrow Func .... Get The Object That Defined It
______________________________________________________________________________

3- Template Literals /
   -----------------
   -> 'hello \n' + 'World' = `hello
      world`
   -> 'hello' + x = `hello ${x}`
   -> 'hello' + (name === male ? 'mr' : 'msc') = `hello ${name === male ? 'mr' : 'msc'}`
   -> Important In Js Frameworks
______________________________________________________________________________

4- Spread Operator /
   ----------------
   -> arr1 = ['one'], arr2 = ['two'], arr3 = [...arr1, arr2] = ['one', 'two']
   -> func(...arr1, arr2)
   -> arr1 = ['one'], arr2 = arr1; arr2.push('two'); arr1 -> ['one', 'two']
      arr1 = ['one'], arr2 = [...arr1]; arr2.push('two'); arr1 -> ['one']
   -> Math.min(...arr4)   
______________________________________________________________________________

5- Default Parameter /
   ----------------
   -> let func = (x = 1, y = 2) => x + y;         // Only If Parameter Not Exist
______________________________________________________________________________

6- Rest Parameter /
   -------------
   -> function test(x, y, ...rest) {return rest}; console.log(test('a', 'b', 'c', 'd'));
             // ['c', 'd']
   -> function sumAll(...myParams) {
      let total = 0;
      for (const i of myParams) total += i;
      return total;
      };
      console.log(sumAll(2, 4, 6))
   -> For Of loop ... for ant iterable objects (string, array, Arguments, function)
______________________________________________________________________________ 

7- New String Methods /
   ------------------
   -> StartsWith, EndsWith
      - s.StartsWith(Search String, StartPosition)
      - s.endsWith(Search String, EndPosition)
      - Return True, False
   -> Includes
        - s.includes(Search String, Position = 0) // 0 'Default'
      - Return True, False
   -> Repeat
      - s.repeat(repeat num)
        - let s = 'h'; s.repeat(3); // hhh
______________________________________________________________________________

8 - Destructuring /
   -------------
   (Object)
   .......
   -> let user = {name: 'ahmed', gender: 'male'};
      let {name, gender} = user; / {name, gender} = user;
       console.log(name); // ahmed
      
   -> {name = 'Default', gender = 'Default'} = user; 

   -> {name:n, gender:g} = user;   
        console.log(n) //ahmed

   -> let user = {name: 'ahmed', langs: {
            html: '80%',
            css: '90%'
      }};
      {name, langs:{html, css}} = user;
        console.log(html); // 90%  
   -----------------   
   (Array)
   ......
   -> let user = ['ahmed', 'male'];
      [one, two] = user;
       console.log(one); // ahmed

   -> Skipping 
      let user = ['ahmed', 'male', '20y'];
      [one, , three] = user;
       console.log(three); // 20y

   -> let user = ['ahmed', 'male', ['mom', 'dad', 'sis']];
      [one, two, [fav1, fav2, fav3]] = user;
       console.log(fav3); // sis

   -> Rest Operator
      let user = ['ahmed', 'male', '21y'];
      [one, ...others] = user;
       console.log(others); // ['male', '21y']
   ---------------------
   (Swapping)
   ..........
   -> let book = 'Science', video = 'Maths';
      [book, video] = [video, book];
       console.log(book); // Maths

   -> let book = 'Science', video = 'Maths', attr = [book, video];
      [video, book] = attr;
       console.log(book); // Maths
   ---------------------
   (Destructuring Function Parameters)
   ....................................
   -> const user = {name: 'ahmed', age: 20};
      function test({user, age}) {
         console.log(user, age);
      };
       test(user); // ahmed, 20

______________________________________________________________________________

9- Enhanced Object Literals /
   ------------------------
   
   -> const name = 'ahmed', age = 20;
      const user = {
      name, age
      };
      console.log(user);  // {name: 'ahmed', age: 20}

   -> const user = { myMethod: function (p1) {return p;} }   // ES5
      const user = { myMethod (p1) {return p1;} }            // ES6

   -> const x = 'key',
      myOb = {
         prob : 'value',
         x : x,
         [x] : 'value'
      };
      console.log(myOb);      // {prob: "value", x: "key", key: "value"}
______________________________________________________________________________

10- Set /
   ----
   -> new Set(Iterable) // String, Array.... Not Number
   -> new Set([1,2,3]) // Set(3) {1,2,3}
   -> new Set([1,2,3,1]) // Set(3) {1,2,3} - Remove Repeated
   -> Not Be Accessed Like Array
   -> let x = new Set('123')
         x.add('4');
         x.delete('4');
         x.has('1');
         x.size;

______________________________________________________________________________ 

11- ForEach /
   ---------

   (Array)
   .......
   -> forEach(currentValue, index, array)
   -> Skip Empty
   -> const x = [a,b,c,];
       x.forEach( (el, index) => console.log(`${el} => ${index}`) );   // a => 1 b => 2 c => 3

   ------------------------------

   (Set)
   .......
   -> forEach(currentKey, currentValue, Set)
   -> const x = new Set([1,2,1,3, ,4]);
       x.forEach( (item1, item2) => console.log(`${item1} => ${item2}`) );   // 1 => 1 2 => 2 3 => 3 4 => 4
   ------------------------------

   (Map)
   .......
   -> forEach(value, key, Map)
   -> const x = new Map([ ['a', 1], ['b', 2] ]);
       x.forEach( (v, k) => console.log(`${k} => ${v}`) );   // a => 1 b => 2 

______________________________________________________________________________

12- Set vs weakSet & GarbageCollection /
   ------------------------------------

   (Set)
   .....
   -> Contains Any Type Of Values
   -> Get Elements Count Size
   -> For Each Available To Iterate
   -> You Can Get It's Keys            // x.keys()
   -> let x = new Set ([ {a: 1} ]),
         ob1 = {b: 2},
         ob2 = {c: 3};

      x.add(ob1);   
      x.add(ob2);
      console.log(x);    // Set(3) {{…}, {…}, {…}}
      ob1 = null;
      console.log(x.has(ob1)); 
      console.log(x);    // Set(3) {{…}, {…}, {…}}    // ob1 Still Stored

   ----------------------------------------------------

   (weakSet)
   .....
   -> Contains Only Object
   -> You Can't Get Elements Count Size
   -> For Each Not Available To Iterate
   -> You Can't Get It's Keys            // x.keys()
   -> let ob = {a: '1'}, ob2 = {b: '2'}, ob3 = {c: '3'};
      let x = new WeakSet ([ ob ]);
         x.add(ob2)
         x.add(ob3)
         console.log(x);          // WeakSet {{…}, {…}, {…}}

      ob = null;
        console.log(x.has(ob));  // false
        console.log(x);          // WeakSet {{…}, {…}}
        x.add('s')               // Error
        x.size;                  // Error
        x.forEach()              // Error

______________________________________________________________________________

13- Map vs weakMap /
   ---------------

   (Map)
   .....
   -> Contains Any Type Of Values
   -> Get Elements Count Size
   -> For Each Available To Iterate
   -> You Can Get It's Keys            // x.keys()
   -> let testMap = new Map(),
      ob = { one: "1" };
      testMap.set(ob, "test");
      testMap.set("a", "A");
      testMap.set(1, 5);
      console.log(testMap.get(ob));    // test
      console.log(testMap.get("a"));   // A
      console.log(testMap.get(1));     // 5
      console.log(testMap.has(1));     // true
      console.log(testMap.delete(1));
      console.log(testMap.has(1));     // false
      ob = null;
      console.log(testMap.has(ob));    // false
      console.log(testMap);            // Map(2) {{…} => "test", "a" => "A"}
      console.log(testMap.size);       // 2

   ----------------------------------------------------

   (weakMap)
   .....
   -> Contains Only Object
   -> You Can't Get Elements Count Size
   -> For Each Not Available To Iterate
   -> You Can't Get It's Keys            // x.keys()
   -> let testMap = new WeakMap(),
      ob = { one: "1" }, ob2 = { two: "2" };
      testMap.set(ob, "test");
      testMap.set(ob2, "test2");       -> Only Object
      console.log(testMap.get(ob));    // test
      console.log(testMap.has(ob));     // true
      console.log(testMap.delete(ob));
      console.log(testMap.has(ob));     // false
      ob2 = null;
      console.log(testMap.has(ob2));    // false
      console.log(testMap);            // Map(2) {{…} => "test2"}  Deleted when Garbage Collection Starts
      console.log(testMap.size);       // Undefined


______________________________________________________________________________

14- Symbol Iterator & For..Of Loop /
    ------------------------------

    (Iterable) -> Object has Symbol iterator
               -> Object with interface designed for iteration
               -> All iterators has Next() method that returns result object
               -> The result object has 2 prop :
                     [1] value - The next value
                     [2] Done - Boolean value to tell if the next value exists or not
               -> ( String - Array ) Accept Iteration /  (Number - Object) Not Accept

   ........................
   
   -> Object.entries(x); - x.entries()        // Convert to Map
          let ob = {}, arr = [];  
          for (const [key, val] of Object.entries(ob)) {};
          for (const [key, val] of arr.entries()) {};
   ........................

   -> let arr = [1, 2, 3],
      txt = "hello",
      num = 123,
      ob = { one: 1 };
      console.log(typeof arr[Symbol.iterator]);     // Function
      console.log(typeof txt[Symbol.iterator]);     // Function
      console.log(typeof num[Symbol.iterator]);     // Undefined
      console.log(typeof ob[Symbol.iterator]);      // Undefined

   -> let theIterator = arr[Symbol.iterator]();
      console.log(theIterator);                     // Array Iterator {}      
      console.log(theIterator.next());              // {value: 1, done: false}
      console.log(theIterator.next());              // {value: 2, done: false}
      console.log(theIterator.next());              // {value: 3, done: false}
      console.log(theIterator.next());              // {value: undefined, done: true}

   -> for (const char of txt) {console.log(char)}   // h e l(2) a

   -> let myMap = new Map([
      ["one", "1"],
      ["two", "2"],
      ]);
      for (const [key, val] of myMap) {
      console.log(`This is key => ${key} & This is Value ${val}`); 
      }
      // This is key => one & This is Value 1
      // This is key => Two & This is Value 2

   -> let arr = ["one", "two"];
      for (const [index, val] of arr.entries()) {
      console.log(`This is Index => ${index} & This is Value ${val}`);
      }
      // This is Index => 0 & This is Value one
      // This is Index => 1 & This is Value two

______________________________________________________________________________

15- Custom Iterable Object /
.........................

-> let ob = {
      name: "ahmed",
      age: 19,
      [Symbol.iterator]() {
         let step = 0,
         properties = Object.keys(this);
         //  console.log(properties);
         return {
            next() {
               return {
                  value: properties[step],
                  done: step++ === properties.length,
               };
            },
         ;
      },
   };
   for (const prop of ob) {console.log(prop)}
   // name age

______________________________________________________________________________

16- Generators /
..............

-> to generate data.

-> Create Iterator.

-> Function stop execution after each yield.

-> Function gives you the control to yield.

-> function* generateData() {
      yield 1;
      yield 2;
      yield 3;
      yield 4;
   }
   let iterator = generateData();
   console.log(typeof iterator);    // object
   console.log(iterator.next());    // {value: 1, done: false}
   console.log(iterator.next());    // {value: 2, done: false}
   console.log(iterator.next());    // {value: 3, done: false}
   console.log(iterator.next());    // {value: 4, done: false}
   console.log(iterator.next());    // {value: undefined, done: true}

-> let Numbers = [1, 2, 3, 4];
   function* loopNumbers(number) {
      for (let i = 0; i < number.length; i++) {
         yield number[i];
      }
   }   

-> function* loopNumbers(number) {
      yield *[1,2,3,4];
      yield 5;
   }   
-> Ordinary Function execute at the moment you call it even in a Variable.   

-> Generator Function store data and give it one by one when requested.  

-> Loop the iterator
   .................
      function* loopIterator() {
         yield "html";
         yield "css";
      }
      let iterator = loopIterator();
      for (let skill of iterator) {console.log(skill)};     // html   //css

-> Return
   ......
      function* loopIterator() {
         yield "html";
         yield "css";
         return "js";                      ** Unreachable code detected.ts(7027) **
         yield "php";
      }
      let iterator = loopIterator();    
      console.log(iterator.next());        // {value: "html", done: false}
      console.log(iterator.next());        // {value: "css", done: false}
      console.log(iterator.next());        // {value: "js", done: true}
      console.log(iterator.next());        // {value: "undefined", done: true}

-> Create infinite Numbers      
   .......................
      function* infiniteNumbers() {
         let i = 0;
         while (true) {
            yield i++;
         }
      }
      let iterator = infiniteNumbers();
      console.log(iterator.next());        // {value: 0, done: false}  
      console.log(iterator.next());        // {value: 1, done: false}
      console.log(iterator.next());        // {value: 2, done: false}
      console.log(iterator.next());        // {value: 3, done: false}
      for (let number of iterator) {
      if (number > 20) {
         break;
      } else {
         console.log(number);              // 4 ... 20
      }
      }
      for (let number of infiniteNumbers()) {
      if (number > 20) {
         break;
      } else {
         console.log(number);              // 0 ... 20
      }
      }

-> Delegating Generators
   .....................
      function* generateAges() {
         yield 19;
         yield 20;
         yield 21;
      }
      function* generateNames() {
         yield "mohamed";
         yield "ahmed";
         yield "ali";
      }
      function* generateAll() {
         yield* generateNames();
         yield* generateAges();
      }
      let all = generateAll();
      console.log(all.next().value);            // mohamed
      console.log(all.next().value);            // ahmed
      console.log(all.next().value);            // ali
      console.log(all.next().value);            // 19
      console.log(all.next().value);            // 20
      console.log(all.next().value);            // 21
      console.log(all.next().value);            // undefined  
______________________________________________________________________________

17- New Array Methods /
______________________

1- Array.of(Elements to create the Array)
........................................
-> let oldArray = new Array(100);
   let oldArray2 = new Array(100, 200);
   console.log(oldArray);                 // (100) [empty × 100]
   console.log(oldArray2);                // (2) [100, 200]

   let newArray = Array.of(100);
   console.log(newArray);                 // [100]

2- Array.from(Iterable, Mapfn, This)
....................................
-> let name = "mohamed",
   arrayFromName = name.split();
   arrayFromName2 = Array.from(name);
   console.log(arrayFromName);           // ["mohamed"]
   console.log(arrayFromName2);          // (7) ["m", "o", "h", "a", "m", "e", "d"]

   let numbers = [10, 20, 30, 40];
   let numberMinusTen = Array.from(numbers, (num) => num - 5);
   console.log(numbers);                // (4) [10, 20, 30, 40]
   console.log(numberMinusTen);         // (4) [5, 15, 25, 35]
   
2- arrayName.fill(Value to fill, Start (Default: 0), End (Default: Array.length))
.............................................................................
-> let x = [10, 25, 30],
   m = [10, 25, 30];
   let filledAll = x.fill("filled");
   let filledSome = m.fill("filled", 1, 2);
   console.log(filledAll);                    // (3) ["filled", "filled", "filled"]
   console.log(filledSome);                   // (3) [10, "filled", 30]

3- arrayName.find()      *Not return all values*
..................        ......................
-> let x = [10, 25, 30];
   let findElement = x.find((num) => num > 10);
   console.log(findElement);                     // 25

3- arrayName.findIndex()      *Not return all values*
..................        ......................
-> let x = [10, 25, 30];
   let findElement = x.findIndex((num) => num > 10);
   console.log(findElement);                     // 1

4- arrayName.copyWithin(Target, Start, End)
...........................................
-> let x = ["a", "b", "c", "d", "e", "f"];
   let m = ["a", "b", "c", "d", "e", "f"];
   let testCopy = x.copyWithin(0);                
   let testCopy2 = m.copyWithin(1, 2, 4);        
   console.log(testCopy);                         // (6) ["a", "b", "c", "d", "e", "f"]
   console.log(testCopy2);                        // (6) ["a", "c", "d", "d", "e", "f"] 

______________________________________________________________________________

17- Modules /
____________

-> Important in Js Frameworks

1- (Import & Export)
....................

-> (Html)
   ......
      <script src="app.js" type="module"></script>
      <script src="main.js" type="module"></script>

-> (app.js)
   ......
      export const i = 0;
      export let numbers = [10, 25, 150];
      export function sayHello(name) {
         return `Hello ${name}`
      }
      // OR - export {i, numbers, sayHello}

-> (main.js)
   ......
      import { sayHello, i, numbers } from "./app.js";    * [ (/) -> OR (./) OR (../) ] *
      console.log(i);                                     // 0
      console.log(numbers);                               // [10, 25, 150]
      console.log(sayHello("mohamed"));                   // Hello mohamed

..............................................................

2- (Import All & Aliases)
.........................
-> export { i as test, numbers, sayHello }; // (test) is an alias for (i)

-> import * as all from "./app.js";
   console.log(all);                     // Module {Symbol(Symbol.toStringTag): "Module"} *object has our exported data*
   console.log(all.numbers);             // (3) [10, 25, 150]
   console.log(sayHello("mohamed"));     // Hello mohamed

-> What you exported will only be imported

..............................................................

2- (Named vs Default Export)
............................
-> There is only onf Default for the module

-> const i = 0;
   let numbers = [10, 25, 150];
   export default function sayHello() {
      return `Hello`;
   }
   export { i, numbers };

-> import { i, numbers } from "./app.js";             *{} for Named*
   import blabla from "./app.js";                     *Without {} for Default*
   // (OR) import blabla, { i, numbers } from "./app.js";
   console.log(i);
   console.log(numbers);
   console.log(blabla());
__________________________________________________________________________________

18- Classes

******************************* JavaScript Object Constructors ********************

-> function Person(first, last, age, eye) {
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.eyeColor = eye;
   }
   var myFather = new Person("John", "Doe", 50, "blue");
   var myMother = new Person("Sally", "Rally", 48, "green");

 -> creating many objects of the same "type".

 -> The way to create an "object type", is to use an object constructor function.

 -> Objects of the same type are created by calling the constructor function with the new keyword.

 -> You cannot add a new property to an object constructor the same way you add a new property to
   an existing object.

 -> To add a new property to a constructor, you must add it to the constructor function.

 -> Your constructor function can also define methods.

 -> function Person(first, last, age, eyeColor) {
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.eyeColor = eyeColor;
      this.name = function() {return this.firstName + " " + this.lastName;};
   }
   console.log(new Person("Mohamed", "Said", 20, "Blue").name())   // Mohamed Said

 -> function thisFunc() {
      return this;
   }
   console.log(thisFunc());     // Window {}

 -> function thisFunc() {
      return this;
   }
   console.log(new thisFunc());     // thisFunc {} ....... * Create an object *

 -> In ordinary function, (this) refers to the global object.

 -> In a function, in strict mode, (this) is undefined.

 -> Alone, (this) refers to the global object.

 -> In an object method, (this) refers to the "owner" of the method.

----------------------------------------------------------------------------------------

/******************************* Built-in JavaScript Constructors ********************

 -> JavaScript has built-in constructors for native objects

 -> var x1 = new Object();          // A new Object object
   var x2 = new String("test");    // A new String object
   var x3 = new Number();          // A new Number object
   var x4 = new Boolean();         // A new Boolean object
   var x5 = new Array();           // A new Array object
   var x6 = new RegExp();          // A new RegExp object
   var x7 = new Function();        // A new Function object
   var x8 = new Date();            // A new Date object

 -> Usually we use Primitives instead of Objects. "test" not new String("test"), 123 not new Number(123)

 -> var x3 = new Boolean(10 > 5)    // >Boolean {false}
   ........ (10 > 5) or 10 > 5
   -> Everything With a "Value" is True
   -> Everything Without a "Value" is False
   -> (0, -0, "", undefined, null, false, NaN) value is false

----------------------------------------------------------------------------------------

******************************* JavaScript Object Prototypes ********************
 
 -> All JavaScript objects inherit properties and methods from a prototype.
      . Date objects inherit from Date.prototype
      . Array objects inherit from Array.prototype
      . Person objects inherit from Person.prototype

 -> The (Object.prototype) is on the top of the prototype inheritance chain.

 -> Date objects, Array objects, and Person objects inherit from (Object.prototype).

 -> Sometimes you want to add new properties (or methods) to all existing objects of a given type.

 -> Sometimes you want to add new properties (or methods) to an object constructor. 

 -> The JavaScript prototype property allows you to add new properties to object constructors.

 -> function Person(first, last, age, eyeColor) {
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.eyeColor = eyeColor;
   }
   Person.prototype.nationality = "English";
   let person = new Person("mohamed", "selem", 21, "brown");
   console.log(person);                                      // __proto__: nationality: "English"
   console.log(person.nationality);                          // English

 -> Or Methods
    ..........
      function Person(first, last, age, eyecolor) {
         this.firstName = first;
         this.lastName = last;
         this.age = age;
         this.eyeColor = eyecolor;
      }
      Person.prototype.name = function() {
      return this.firstName + " " + this.lastName;
      };

----------------------------------------------------------------------------------------

******************************* Object Constructors with Classes ********************

-> class Product {
   constructor(type, price) {
      this.productType = type;
      this.productPrice = price;
   }
   priceAfterDeal() {
      return parseInt(this.productPrice) / 10;
   }
   }
   let product1 = new Product("Fruit", "35$");
   console.log(product1);                       // Product {productType: "Fruit", productPrice: "35$"}
   console.log(product1.priceAfterDeal());      // 3.5

----------------------------------------------------------------------------------------

******************************* Extends Class from Module ********************
(app.js)
........
   class User {
   constructor(name, email) {
      this.userName = name;
      this.userEmail = email;
   }
   getInfo() {
      console.log(this.userName + "/ " + this.userEmail);
   }
   }
   export default User;

(main.js)
........   
   import User from "./app.js";
   console.log("-".repeat(50));
   class Admin extends User {           *Admin extends from User*
   constructor(name, email) {
      super(name, email);               *Super() get these data from User*  
   }
   }
   let newAdmin = new Admin("ahmed", "t@s.s");
   newAdmin.getInfo();                            // ahmed/ t@s.s

__________________________________________________________________________________

19- Call Stack, Web API, Event Loop, Callback Queue /
----------------------------------------------------

(Call Stack)
...........
-> Mechanism to make interpreter track tour calls
-> When you call a function it's added to the stack
-> When function executed it's removed from the stack
-> The interpreter continue calling from the last point reached
-> Call stack detect web API & leave it to the browser to handle it

(Web API)
--------
-> Methods available from environment => Browser
-> When complete it add the callback to the callback queue

(Event Loop)
------------
-> Wait the call stack to finish
-> Get callback from callback queue
-> Add callback to call stack
-------------------------------------------
->
   function one() {
   console.log("one");
   }
   function two() {
   one();
   console.log("two");
   } 
   two();                                             //one //two

->
   console.log("one");
   window.setTimeout(() => console.log("two"), 0);
   console.log("three");                              //one //three //two
   
->
   window.setTimeout(() => console.log(x), 0);        // hey
   let x ='hey';                             


__________________________________________________________________________________

*************************** 20- Promises **********************************

-> Promise is one of the best features in ES6
-> Promise make it easy to support Asynchronous programming
-> Promise in JS is like promise in life
-> Promise is something that will happen in the future
-> Promise is a placeholder for a future value
-> You booked a cinema ticket, you have a promise from cinema owner to have a seat
-> You ordered food from restaurant 
      [Promise] is the order record
      [the future value] is the food you will receive
-> Promise is an Object
-> Promise is the event completion or failure of Async operation & its resulting value 
-> JS use callbacks for Async programming 
      [1] Function be called & do the task
      [2] Action complete
      [3] Another function be called
      [4] Action complete
      [5] Another function be called
-> In complex cases => every call add nesting value
-> http://callbackhell.com/
-> Promise avoiding callback hell or pyramid of Doom
-> Promise is one of these states
       [Pending] => Not Fulfilled or Rejected
       [Fulfilled] => Operation succeed
       [Rejected] => Operation failed
-----------------------------------------------------------------------
->   
      const myPromise = new Promise((resolve, reject) => {
         const connected = true;
         connected ? resolve("connected") : reject("Connection Error");       // reject(Error("Connection Error"))
      }).then((value) => {console.log(value)}, (reason) => {console.log(reason)});   //Chain
   });     

   * In Promise => Asynchronous operation
   * Fulfilled => resolve
   * Rejected => reject
   * value => connected
   * reason => Connection Error

   * Constructor Promise
   * Executor Fn
   * Resolve: Promise is achieved
   * Reject: Promise isn't achieved

   const onfulfilled = (value) => {
    console.log(value);
   },
   onrejected = (reason) => {
      console.log(reason);
   };
   myPromise.then(onfulfilled, onrejected);

-----------------------------------------------------------------------

(Then & Catch)
..............

-> (Catch)- For rejected only

-> const newPromise = new Promise((resolve, reject) => {
      Math.random() * 100 < 50 ? resolve("success") : reject("Bad");
   })
  .then((resolved) => {
    console.log(resolved);
  })
  .catch((rejected) => {
    console.log(rejected);
  });

   *   
      .then(null, (rejected) => {
         console.log(rejected);
      })
   *

-----------------------------------------------------------------------

-> You can achieve results from performing async operations using the callback
      approach or by using promises

-> Call back      
...........
      firstRequest(function (response) {
         secondRequest(
            response,
            function (nextResponse) {
               thirdRequest(
               nextResponse,
               function (finalResponse) {
                  console.log("final response : " + finalResponse);
               },
               failureCallback
               );
            },
            failureCallback
         );
      }, failureCallback);

      //////////////////////////////////////////////////////

      function getMoneyBack(money, callback) {
         if (typeof money !== "number") {
            callback(null, new Error("money is not a number"));
         } else {
            callback(money);
         }
      }
      const money = getMoneyBack(1200);
      console.log(money);


-> Promise     
...........
      firstRequest()
      .then((response) => secondRequest(response))
      .then((nextResponse) => thirdRequest(nextResponse))
      .then((finalResponse) => console.log("final response : " + finalResponse))
      .catch(failureCallback);

      //////////////////////////////////////////////////////

      function getMoneyBack(money) {
      return new Promise((resolve, reject) => {
         if (typeof money !== "number") {
            reject(new Error("money is not a number"));
         } else {
            resolve(money);
         }
      });
      }
      getMoneyBack(1200).then((money) => {
      console.log(money);
      });

-----------------------------------------------------------------------

(XHTMLHttps Requests)
.....................

-> (Ready State) ... The status of the request
   [0] .... Request not initialized
   [1] .... Server connection established
   [0] .... Request received
   [0] .... Processing request
   [0] .... Request not initialized

-> let myRequest = new XMLHttpRequest();
   myRequest.onreadystatechange = function () {
   if (this.readyState === 4 && this.status === 200) {
      //  console.log(this.responseText);
      console.log(JSON.parse(this.responseText));
   }
   };
   myRequest.open("GET", "https://api.github.com/users/OsamaElzero/repos", true);
   myRequest.send();


-> function getTheFirstRepoName(API) {
   let myRequest = new XMLHttpRequest();
   myRequest.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
         console.log(JSON.parse(this.responseText)[0].name);
      }
   };
   myRequest.open("GET", API, true);
   myRequest.send();
   }
   getTheFirstRepoName("https://api.github.com/users/OsamaElzero/repos"); 

-> let getFirstRepoName = (API) => {
   return new Promise((resolve, reject) => {
      let myRequest = new XMLHttpRequest();
      myRequest.onload = function () {
         if (this.readyState === 4 && this.status === 200) {
         resolve(JSON.parse(this.responseText)[0].name);
         } else {
         reject(new Error(this.statusText));
         }
      };
      myRequest.open("GET", API, true);
      myRequest.send();
   });
   };
   getFirstRepoName("https://api.github.com/users/OsamaElzero/repos").then(
   (passed) => {
      let newDiv = document.createElement("div"),
         newTextNode = document.createTextNode(passed);
      newDiv.append(newTextNode);
      document.body.append(newDiv);
   },
   (error) => console.log(error)
   );

-----------------------------------------------------------------------

(Ignoring Pyramid of Doom)
..........................
-> const myPromise = new Promise((resolve) => {
   let posts = ["a", "b", "c", "d", "e", "f"];
   resolve(posts);
   })
   .then((result) => {
      console.log(`Total number of posts is ${result.length}`);
      return result;
   })
   .then((result) => {
      console.log("#".repeat(20));
      console.log(`First Post is ${result[0]}`);
      return result;
   })
   .then((result) => {
      console.log("#".repeat(20));
      console.log(`Last Post is ${result[result.length - 1]}`);
      return result;
   })
   .then((result) => {
      console.log("#".repeat(20));
      console.log(`Every page has 2 posts`);
      console.log(`Pages number is ${result.length / 2}`);
      return result;
   });

-> Result should be returned every time

-----------------------------------------------------------------------

(Fetch)
......

-> fetch("https://api.quran.sutanlab.id")
  .then((result) => {
    let thePromise = result.json();    
    console.log(thePromise);                // Promise {<pending>}
    return thePromise;       
  })
  .then((result) => {
    console.log(result.surah.spesificSurah.example);
    fetch(result.surah.spesificSurah.example)
      .then((surah) => {
        let surahPromise = surah.json();
        return surahPromise;
      })
      .then((surah) => {
        console.log(surah.data.verses[0].text.arab);
      });
    return result;
  });

  ** .json() -> Used to read & parse data **

-----------------------------------------------------------------------

(All & Race)
............

( Promise.all([]) ) .. All promises must be done
( Promise.race([]) ) .. Fastest promise only will be done

-> const firstPromise = new Promise((resolve, reject) => {
   let connect = false;
   connect ? resolve("First is resolved") : reject("First is rejected");
   });
   const secondPromise = new Promise((resolve, reject) => {
   let setting = true;
   setting ? resolve("second is resolved") : reject("second is rejected");
   });

   // firstPromise.then((result) => {
   //   console.log(result);                   // Uncaught (in promise) First is rejected
   // });
   // secondPromise.then((result) => {
   //   console.log(result);                   // second is resolved
   // });                                   

   Promise.all([firstPromise, secondPromise]).then((result) => {
      console.log(result);                     // Uncaught (in promise) First is rejected
   });                                         // (if all resolved) (2) ["First is resolved", "second is resolved"]

-> const firstPromise = new Promise((resolve) => {
   window.setTimeout(() => {
      resolve("First Resolved");
   }, 500);
   });

   const secondPromise = new Promise((resolve) => {
   window.setTimeout(() => {
      resolve("Second Resolved");
   }, 100);
   });

   // firstPromise.then((result) => {
   //    console.log(result); 
   // });
   // secondPromise.then((result) => {
   //    console.log(result);
   // });

   // Second Resolved
   // First Resolved

   Promise.race([firstPromise, secondPromise]).then((result) => {
      console.log(result);         // Second Resolved
   });

__________________________________________________________________________________

******************** End & Ref ***************************
-> Understanding EcmaScript-6 book
-> es6-features.org
-> MDN

*/
