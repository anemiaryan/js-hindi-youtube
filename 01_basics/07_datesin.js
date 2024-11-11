// Dates

let myDate = new Date()
// console.log(myDate.toString());        o/p:Mon Nov 11 2024 13:59:43 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());    o/p:Mon Nov 11 2024
// console.log(myDate.toLocaleString());  o/p:11/11/2024, 2:01:25 PM
// console.log(typeof myDate);            o/p:object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);                 milisec 
// console.log(myCreatedDate.getTime());     to find the time in milisec format
// console.log(Math.floor(Date.now()/1000)); to convert milisec to sec

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
