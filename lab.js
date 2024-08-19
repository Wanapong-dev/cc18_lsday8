// lab1
// class Calculator {
//   constructor(init = 0) {
//     this.value = init
//   }

//   add(num) {
//     this.value = this.value + num
//     return this.value
//   }

//   subtract(num) {
//     this.value = this.value - num
//     return this.value
//   }

//   multiply(num) {
//     this.value = this.value * num
//     return this.value
//   }

//   divide(num){
//     this.value = this.value / num
//     return this.value
//   }

//   show() {
//     console.log(`Value = ${this.value}`)
//   }
// }

// lab2
// class Sale {
//   constructor(_name,_amount,_price) {
//   this.name = _name
//   this.amount = _amount
//   this.price = _price
//   }

//   calcPrice () {
//   return this.amount * this.price
    
//   }
// }


// lab3 จงเขียนฟังก์ชัน isArray(input) เพื่อตรวจสอบว่า input เป็น Array หรือไม่ 

// let arr = [1,2,3,4,5]
// let obj = {
//   name: 'Ball'
// }
// let asd = [3,45,6,78,]
// // console.log(Array.isArray(arr))
// // console.log(Array.isArray(obj))


// function isArray(input) {
//   result = Array.isArray(input)
//   return result
// }

// console.log(isArray(asd))

// lab4 ให้คำนวณผลรวมของ salaries ใน object โดยใช้ Object.keys, Object.values

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let key = Object.values(salaries)
// console.log(key)
// let sumSaleries = key.reduce((prev, curr) => {
//   return prev += curr
// },)   

// console.log(sumSaleries)

// lab5 ให้เขียนฟังก์ชัน checkEmptyObj(obj) เพื่อเช็คว่า obj เป็น object ว่างหรือไม่ 

// let obj1 = {}
// let obj2 = {name:'ball', age: 27}

// function checkEmptyObj(obj) {
//   return Object.keys(obj).length === 0;
// }

// console.log(checkEmptyObj(obj1))
// console.log(checkEmptyObj(obj2))



// lab 6 จงเขียนฟังก์ชันหาค่าผลคูณของตัวเลข โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด
// let calMulti = (...nums) => {
//   let sum = 1
//   for (let num of nums) {
//     console.log(num)
//     sum *= num
//   }
//   return sum
// }
// let result = calMulti(1, 2, 3, 4, 5)

// console.log(result)


// lab 7 จงเขียนฟังก์ชัน filterOutOdds โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด
//  และให้ return ค่าเป็น array ของเลขที่เป็นเลขคู่

// function filterOutOdds(...nums) {
//   return nums.filter(num => num % 2 == 0)
// }

// console.log(filterOutOdds(6,7,4,6,7,8,12,14,16))


// lab8 จงเขียนฟังก์ชัน mergeObjects โดยพารามิเตอร์ของฟังก์ชันสามารถรับ Object 
// ได้ไม่จำกัด และให้ return ค่าเป็น Object ที่เกิดจาก Object ในพารามิเตอร์มา merge กัน

// obj = {
//   name: 'ball'
// }

// obj1 = {
//   age: 27
// }

// function mergeObjects(...obj) { 

//   let result = obj.reduce((acc,curr) => Object.assign(acc,curr) ,{})
//   return result
// }

// console.log(mergeObjects(obj,obj1))

// lab9 จงรวม nums1 และ num2 เข้าด้วยกัน
// จงสร้าง array ที่ได้จากการนำ nums1 และ nums2 มารวมกัน 
// แต่ให้เพิ่ม 5 เข้าไปก่อน nums1 และเพิ่ม - 6, -1 เข้าไประหว่าง nums1 กับ nums2
// หาผลรวมของทุก element ใน Array ที่ได้

// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1];

// let num3 = [5, ...nums1, -6, -1, ...nums2]

// console.log(num3)

// lab10 จงเขียนฟังก์ชันที่ใช้คุณสมบัติของ Spread operator เพื่อรับค่า array1
// แล้วคืนค่าเป็น array ที่มีการเปลี่ยนแปลงค่าของ index ที่ 3 ให้มีค่าเท่ากับ ค่าเดิมยกกำลัง 2 
// โดยที่ array1 ไม่เกิดการเปลี่ยนแปลง

// let editArr = (arr) => {
//   let newArr = [...arr]
//   console.log(newArr)
//   // if(newArr.length > 3 ){

//   // }
//   newArr[3] = newArr[3] ** 2
//   return newArr
// }

// let arr = [2, 3, 4, 5, 6]
// let result = editArr(arr)
// console.log(result)


// lab11 จงเขียนฟังก์ชันที่รับค่า ชื่อ นามสกุล และ งานอดิเรก ซึ่งงานอดิเรกอาจมี 1 หรือมากกว่า 1 ก็ได้ 
// แล้วคืนค่าเป็น ชื่อ, นามสกุล, งานอดิเรก และจำนวนงานอดิเรก โดยใช้คุณสมบัติของ spread parameter

// let handlePerson = (fname, lname, ...hobbies) => {
//   console.log(hobbies)
//   return [fname, lname, ...hobbies]
// }

// let result = handlePerson('Phongphat', 'Japhichom', 'js', 'react', 'nodejs')
// console.log(result)

// lab12 จงเขียนฟังก์ชัน doubleAndReturnArgs โดยรับพารามิเตอร์มาเป็น Array และตัวเลขกี่ตัวก็ได้ และ return 
// ค่าเป็น Array ที่ประกอบด้วยค่าเดิมในพารามิเตอร์ที่เป็น Array และค่าพารามิเตอร์ที่เป็นตัวเลขคูณสอง

// doubleAndReturnArgs([1, 2, 3], 4, 4);
// // expexted result: [1, 2, 3, 8, 8]
// doubleAndReturnArgs([2], 10, 4);
// // expexted result: [2, 20, 8]

// let doubleArr = (arr, ...num) => {
//   console.log(arr)
//   console.log(num)
//   let doubleArr = num.map((item) => item * 2)
//   console.log(doubleArr)
//   return arr.concat(...doubleArr)
// }

// let result = doubleArr([1, 2, 3], 4, 4, 5, 6, 7)
// console.log(result)

// lab13 จงเขียนฟังก์ชัน cloneArray โดยรับพารามิเตอร์มาเป็น Array และ return 
// ค่าเป็น Array ที่มี element เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว
// function cloneArray(array) {
//   return [...array];
// }

// const arr = [1, 2, 3, 4];
// const clonedArray = cloneArray(arr);

// console.log(clonedArray); 


// lab14 จงเขียนฟังก์ชัน cloneObject โดยรับพารามิเตอร์มาเป็น Object และ return 
// ค่าเป็น Object ที่มี key - value เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว

// function cloneObject(obj) {
//   return { ...obj };
// }

// const obj = { a: 1, b: 2, c: 3 };
// const clonedObj = cloneObject(obj);

// console.log(clonedObj)



// lab15

// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); // * Maya
// console.log(second); // ** Marisa
// console.log(third); // *** Chi

// lab16 ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',
// ];
// console.log(raindrops); // * 'Raindrops on roses',
// console.log(whiskers); // ** 'whiskers on kittens',
// console.log(aFewOfMyFavoriteThings); 
// // ***(2)[ Bright copper kettles,warm woolen mittens ]
// // เป็น Rest Parameter ซึ่งจะรวบรวมค่าที่เหลือในอาร์เรย์มาใส่ในอาร์เรย์ใหม่

// lab17 ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // * [ 10,30,20 ] ประกาศตัวแปร ในindexที่1ให้เปลี่ยนค่าเป็น indexที่2 เลยทำให้ค่าสลับกัน

// lab18 ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // * 8 เพราะdefault เป็น 8
// console.log(yearNeptuneDiscovered); // ** 1846 เพราะdefault เป็น1846


// lab19 ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears); // * เพราะว่า rest มีค่าตั้งแต่ keyที่indexที่ 1-ไปจนสุดท้าย


// lab 20 ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// function getUserData({ firstName, favoriteColor = 'green' }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// console.log(getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' })); // * Your name is Alejandro and you like purple เพราะเราใส่ค่าให้มัน
// console.log(getUserData({ firstName: 'Melissa' })); // ** Your name is Melissa and you like green gritk เพราะเราไม่ได้ใส่ค่าให้กับ favorite จึงใช้ค่าdefault
// console.log(getUserData({})); // *** Your name is undefined and you like green เพราะใส่ค่าแรกเป็นobjectเปล่า จึงได้undifine และค่าที่2 ไม่ได้ใส่ค่าจึงเป็นการใช้ค่าdefault



// lab21 ให้ใช้ Array destructuring ในการสลับค่าตัวแปร guest กับ admin

// let guest = 'Jane';
// let admin = 'Pete';

// [guest ,admin] = [admin,guest]
// console.log(guest)
// console.log(admin)

// lab22 จงเขียนฟังก์ชันตรวจสอบอายุ โดยรับข้อมูล user ที่อยู่ใน object ที่มี keys 
// เป็น firstName lastName และ age โดยถ้า user มีอายุมากกว่า 18 
// ให้แสดงผลเป็นการทักทายแล้วตามด้วยชื่อ-นามสกุล ในกรณีที่มีอายุน้อยกว่าหรือเท่ากับ 18 
// ให้แสดงผลว่า ไม่มีสิทธิ์เข้าใช้งาน (ใช้ destructuring)


// let User = {
//   fname : 'Wanapong',
//   lname : 'Nopparat',
//   age : 27
// }
// let User1 = {
//   fname : 'Wanapong',
//   lname : 'Nopparat',
//   age : 16
// }

// function checkUser(obj) {
//   let {
//     fname,
//     lname,
//     age
//   } = obj
//   if (age > 18) {
//     console.log('มีสิทธิ์เข้าใช้')
//   } else {
//     console.log('ไม่มีสิทธิ์เข้าใช้งาน')
//   }
// }

// checkUser(User1)


// lab23 จงเขียน Object destructuring โดยกำหนดให้
// ตัวแปร name เก็บค่า name property
// ตัวแปร age เก็บค่า years property
// ตัวแปร isAdmin เก็บค่า isAdmin property หากไม่มีค่าให้ default value เป็น false

// let user = {
//   name: 'John',
//   years: 27
// };

// let {name,years:age, isAdmin = false} = user

// console.log(age)
// console.log(isAdmin)

// lab24 ให้ใช้ Array destructuring โดยให้ a, b, c, d, e และ f 
// มีค่า 1, 2, 3, 4, 5, และ 6 ตามลำดับ

// let arr = [1, [2, [[[3, 4], 5], 6]]];

// let [a,[b,[[[c,d],e],f]]] = arr

// console.log(e)

// lab25 ให้ใช้ Object destructuring โดยให้ a เท่ากับ 5 และ b เท่ากับ 10

// const obj = { prop: 5, prop2: 10 };

// let {prop:a,prop2:b} = obj
// console.log(a)
// console.log(b)


// lab26 a และ b มีค่าเท่าไร
// let a, b;
// { a, b } = { a: 1, b: 2 };

// console.log(a) ** Uncaught SyntaxError: Unexpected token '='

// lab27 a และ b มีค่าเท่าไร

// const [e, f, g, a, b] = [1, 2, 3];

// console.log(a) * undefined

// lab28 ให้ใช้ destructuring โดยให้ x เท่ากับ 5 และ y เท่ากับ 100

// const q = { prop: 5, prop2: [10, 100] };

// let {prop:x, prop2:[,y]} = q

// console.log(y)

// lab29 ให้ใช้ destructuring โดยให้ x เท่ากับ Hello และ y เท่ากับ b

// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };

// let {
//   prop:x ,
//   prop2: {
//     prop2: {
//       nested: [ ,y, ]
//     }
//   }
// } = q

// console.log(y)

// lab 30 ให้ใช้ for … of กับ names(ให้ destructuring object ในแต่ละ iteration)
// ในแต่ละ iteration ให้ console.log ค่า Full name ออกมา

// const names = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jack', lastName: 'Dann' },
//   { firstName: 'Joe', lastName: 'Dunne' }
// ];

// for (const { firstName, lastName } of names) {
//   console.log(`${firstName} ${lastName}`);
// }



// lab31 ให้ใช้ for … of กับ users(ให้ destructuring object ในแต่ละ iteration)
// ในแต่ละ iteration ให้ console.log ค่า user ตามด้วย age หาก age ไม่มีค่าให้ใช้ unknown

// const users = [
//   { user: "Name" },
//   { user: "Name1", age: 2 },
//   { user: "Name2" },
//   { user: "Name3", age: 4 }
// ];

// for (const { user, age = 'unknow' } of users) {
//   console.log(`${user} ${age}`);
// }
// lab 6 จงเขียนฟังก์ชันหาค่าผลคูณของตัวเลข โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด
// let calMulti = (...nums) => {
//   let sum = 1
//   for (let num of nums) {
//     console.log(num)
//     sum *= num
//   }
//   return sum
// }
// let result = calMulti(1, 2, 3, 4, 5)

// console.log(result)


// lab 7 จงเขียนฟังก์ชัน filterOutOdds โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด
//  และให้ return ค่าเป็น array ของเลขที่เป็นเลขคู่

// function filterOutOdds(...nums) {
//   return nums.filter(num => num % 2 == 0)
// }

// console.log(filterOutOdds(6,7,4,6,7,8,12,14,16))


// lab8 จงเขียนฟังก์ชัน mergeObjects โดยพารามิเตอร์ของฟังก์ชันสามารถรับ Object 
// ได้ไม่จำกัด และให้ return ค่าเป็น Object ที่เกิดจาก Object ในพารามิเตอร์มา merge กัน

// obj = {
//   name: 'ball'
// }

// obj1 = {
//   age: 27
// }

// function mergeObjects(...obj) { 

//   let result = obj.reduce((acc,curr) => Object.assign(acc,curr) ,{})
//   return result
// }

// console.log(mergeObjects(obj,obj1))

// lab9 จงรวม nums1 และ num2 เข้าด้วยกัน
// จงสร้าง array ที่ได้จากการนำ nums1 และ nums2 มารวมกัน 
// แต่ให้เพิ่ม 5 เข้าไปก่อน nums1 และเพิ่ม - 6, -1 เข้าไประหว่าง nums1 กับ nums2
// หาผลรวมของทุก element ใน Array ที่ได้

// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1];

// let num3 = [5, ...nums1, -6, -1, ...nums2]

// console.log(num3)

// lab10 จงเขียนฟังก์ชันที่ใช้คุณสมบัติของ Spread operator เพื่อรับค่า array1
// แล้วคืนค่าเป็น array ที่มีการเปลี่ยนแปลงค่าของ index ที่ 3 ให้มีค่าเท่ากับ ค่าเดิมยกกำลัง 2 
// โดยที่ array1 ไม่เกิดการเปลี่ยนแปลง

// let editArr = (arr) => {
//   let newArr = [...arr]
//   console.log(newArr)
//   // if(newArr.length > 3 ){

//   // }
//   newArr[3] = newArr[3] ** 2
//   return newArr
// }

// let arr = [2, 3, 4, 5, 6]
// let result = editArr(arr)
// console.log(result)


// lab11 จงเขียนฟังก์ชันที่รับค่า ชื่อ นามสกุล และ งานอดิเรก ซึ่งงานอดิเรกอาจมี 1 หรือมากกว่า 1 ก็ได้ 
// แล้วคืนค่าเป็น ชื่อ, นามสกุล, งานอดิเรก และจำนวนงานอดิเรก โดยใช้คุณสมบัติของ spread parameter

// let handlePerson = (fname, lname, ...hobbies) => {
//   console.log(hobbies)
//   return [fname, lname, ...hobbies]
// }

// let result = handlePerson('Phongphat', 'Japhichom', 'js', 'react', 'nodejs')
// console.log(result)

// lab12 จงเขียนฟังก์ชัน doubleAndReturnArgs โดยรับพารามิเตอร์มาเป็น Array และตัวเลขกี่ตัวก็ได้ และ return 
// ค่าเป็น Array ที่ประกอบด้วยค่าเดิมในพารามิเตอร์ที่เป็น Array และค่าพารามิเตอร์ที่เป็นตัวเลขคูณสอง

// doubleAndReturnArgs([1, 2, 3], 4, 4);
// // expexted result: [1, 2, 3, 8, 8]
// doubleAndReturnArgs([2], 10, 4);
// // expexted result: [2, 20, 8]

// let doubleArr = (arr, ...num) => {
//   console.log(arr)
//   console.log(num)
//   let doubleArr = num.map((item) => item * 2)
//   console.log(doubleArr)
//   return arr.concat(...doubleArr)
// }

// let result = doubleArr([1, 2, 3], 4, 4, 5, 6, 7)
// console.log(result)

// lab13 จงเขียนฟังก์ชัน cloneArray โดยรับพารามิเตอร์มาเป็น Array และ return 
// ค่าเป็น Array ที่มี element เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว
// function cloneArray(array) {
//   return [...array];
// }

// const arr = [1, 2, 3, 4];
// const clonedArray = cloneArray(arr);

// console.log(clonedArray); 


// lab14 จงเขียนฟังก์ชัน cloneObject โดยรับพารามิเตอร์มาเป็น Object และ return 
// ค่าเป็น Object ที่มี key - value เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว

// function cloneObject(obj) {
//   return { ...obj };
// }

// const obj = { a: 1, b: 2, c: 3 };
// const clonedObj = cloneObject(obj);

// console.log(clonedObj)



// lab15

// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); // * Maya
// console.log(second); // ** Marisa
// console.log(third); // *** Chi

// lab16 ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',
// ];
// console.log(raindrops); // * 'Raindrops on roses',
// console.log(whiskers); // ** 'whiskers on kittens',
// console.log(aFewOfMyFavoriteThings); 
// // ***(2)[ Bright copper kettles,warm woolen mittens ]
// // เป็น Rest Parameter ซึ่งจะรวบรวมค่าที่เหลือในอาร์เรย์มาใส่ในอาร์เรย์ใหม่

// lab17 ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // * [ 10,30,20 ] ประกาศตัวแปร ในindexที่1ให้เปลี่ยนค่าเป็น indexที่2 เลยทำให้ค่าสลับกัน

// lab18 ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // * 8 เพราะdefault เป็น 8
// console.log(yearNeptuneDiscovered); // ** 1846 เพราะdefault เป็น1846


// lab19 ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears); // * เพราะว่า rest มีค่าตั้งแต่ keyที่indexที่ 1-ไปจนสุดท้าย


// lab 20 ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// function getUserData({ firstName, favoriteColor = 'green' }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// console.log(getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' })); // * Your name is Alejandro and you like purple เพราะเราใส่ค่าให้มัน
// console.log(getUserData({ firstName: 'Melissa' })); // ** Your name is Melissa and you like green gritk เพราะเราไม่ได้ใส่ค่าให้กับ favorite จึงใช้ค่าdefault
// console.log(getUserData({})); // *** Your name is undefined and you like green เพราะใส่ค่าแรกเป็นobjectเปล่า จึงได้undifine และค่าที่2 ไม่ได้ใส่ค่าจึงเป็นการใช้ค่าdefault



// lab21 ให้ใช้ Array destructuring ในการสลับค่าตัวแปร guest กับ admin

// let guest = 'Jane';
// let admin = 'Pete';

// [guest ,admin] = [admin,guest]
// console.log(guest)
// console.log(admin)

// lab22 จงเขียนฟังก์ชันตรวจสอบอายุ โดยรับข้อมูล user ที่อยู่ใน object ที่มี keys 
// เป็น firstName lastName และ age โดยถ้า user มีอายุมากกว่า 18 
// ให้แสดงผลเป็นการทักทายแล้วตามด้วยชื่อ-นามสกุล ในกรณีที่มีอายุน้อยกว่าหรือเท่ากับ 18 
// ให้แสดงผลว่า ไม่มีสิทธิ์เข้าใช้งาน (ใช้ destructuring)


// let User = {
//   fname : 'Wanapong',
//   lname : 'Nopparat',
//   age : 27
// }
// let User1 = {
//   fname : 'Wanapong',
//   lname : 'Nopparat',
//   age : 16
// }

// function checkUser(obj) {
//   let {
//     fname,
//     lname,
//     age
//   } = obj
//   if (age > 18) {
//     console.log('มีสิทธิ์เข้าใช้')
//   } else {
//     console.log('ไม่มีสิทธิ์เข้าใช้งาน')
//   }
// }

// checkUser(User1)


// lab23 จงเขียน Object destructuring โดยกำหนดให้
// ตัวแปร name เก็บค่า name property
// ตัวแปร age เก็บค่า years property
// ตัวแปร isAdmin เก็บค่า isAdmin property หากไม่มีค่าให้ default value เป็น false

// let user = {
//   name: 'John',
//   years: 27
// };

// let {name,years:age, isAdmin = false} = user

// console.log(age)
// console.log(isAdmin)

// lab24 ให้ใช้ Array destructuring โดยให้ a, b, c, d, e และ f 
// มีค่า 1, 2, 3, 4, 5, และ 6 ตามลำดับ

// let arr = [1, [2, [[[3, 4], 5], 6]]];

// let [a,[b,[[[c,d],e],f]]] = arr

// console.log(e)

// lab25 ให้ใช้ Object destructuring โดยให้ a เท่ากับ 5 และ b เท่ากับ 10

// const obj = { prop: 5, prop2: 10 };

// let {prop:a,prop2:b} = obj
// console.log(a)
// console.log(b)


// lab26 a และ b มีค่าเท่าไร
// let a, b;
// { a, b } = { a: 1, b: 2 };

// console.log(a) ** Uncaught SyntaxError: Unexpected token '='

// lab27 a และ b มีค่าเท่าไร

// const [e, f, g, a, b] = [1, 2, 3];

// console.log(a) * undefined

// lab28 ให้ใช้ destructuring โดยให้ x เท่ากับ 5 และ y เท่ากับ 100

// const q = { prop: 5, prop2: [10, 100] };

// let {prop:x, prop2:[,y]} = q

// console.log(y)

// lab29 ให้ใช้ destructuring โดยให้ x เท่ากับ Hello และ y เท่ากับ b

// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };

// let {
//   prop:x ,
//   prop2: {
//     prop2: {
//       nested: [ ,y, ]
//     }
//   }
// } = q

// console.log(y)

// lab 30 ให้ใช้ for … of กับ names(ให้ destructuring object ในแต่ละ iteration)
// ในแต่ละ iteration ให้ console.log ค่า Full name ออกมา

// const names = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jack', lastName: 'Dann' },
//   { firstName: 'Joe', lastName: 'Dunne' }
// ];

// for (const { firstName, lastName } of names) {
//   console.log(`${firstName} ${lastName}`);
// }



// lab31 ให้ใช้ for … of กับ users(ให้ destructuring object ในแต่ละ iteration)
// ในแต่ละ iteration ให้ console.log ค่า user ตามด้วย age หาก age ไม่มีค่าให้ใช้ unknown

// const users = [
//   { user: "Name" },
//   { user: "Name1", age: 2 },
//   { user: "Name2" },
//   { user: "Name3", age: 4 }
// ];

// for (const { user, age = 'unknow' } of users) {
//   console.log(`${user} ${age}`);
// }
