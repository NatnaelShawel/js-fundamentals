document.write("<br/>");
function sendCars(day, ...carIds){
carIds.forEach( id => document.write(id+"<br/>"));
}
sendCars('Monday', 1,2,3);

document.write("<br/>");
function sendCars1( ...carIds){
carIds.forEach(id => document.write(id+"<br/>"));
}
sendCars1('Monday', 1,2,3);

document.write("<br/>");
let carIds = [100, 200, 300];
let [car1,car2] = carIds;
document.write("Destructuring Array:"+car1,"&nbsp", car2+"<br/>"); 

document.write("<br/>");
let carId = [100, 200, 300];
let [car3,car4, ...theRest ] = carId;
document.write("Destructuring Array:"+car3,"&nbsp", car4,"&nbsp", theRest+"<br/>"); 

document.write("<br/>");
let car = {id:5000, style:'convertible'};
let {id, style} = car;
document.write("Destructuring Object:"+id,"&nbsp", style+"<br/>"); 

document.write("<br/>");
function startCars(car1, car2, car3){
    document.write("Spread Syntax:"+car1,"&nbsp",car2,"&nbsp",car3+"<br/>");
}
let carIdss = [1,2,3];
startCars(...carIdss);

document.write("<br/>");
function startCarss(car1, car2, car3, ...rest){
    document.write("Spread Syntax and Rest element :"+rest+"<br/>");
}
let carsIds = [1,2,3,4,5,6,7];
startCarss(...carsIds);

document.write("<br/>");
document.write("Typeof:"+typeof(Number.parseInt('55'))+"<br/>")

document.write("<br/>");
document.write("Typeof:"+typeof(String('Hello'))+"<br/>")

document.write("<br/>");
document.write("Typeof:"+(Number.parseFloat('abc55.44abc'))+"<br/>")

document.write("<br/>");

for (let i=0; i<5; i++){
    
    document.write("Break Statement:"+i+"<br/>");
    if(i===3)
    break;
}

document.write("<br/>");

for (let i=0; i<5; i++){
    if(i===3)
    continue;
   
    document.write("Continue Statement:"+i+"<br/>");
  
}

document.write("<br/>");
let year = 1967;
document.write("Increment Operator:",++year+"<br/>");

document.write("<br/>");
let year1 = 1967;
document.write("Number:"+year1+"<br/>");
document.write("Decrement Operator:"+--year1+"<br/>");

document.write("Increment Operator:",++year1+"<br/>");

document.write("<br/>");
let year2 = "1967";
document.write("Typeof:",typeof (year2)+"<br/>");

document.write("<br/>");
let year3 = 1967;
document.write("Typeof:",typeof (year3)+"<br/>");

document.write("<br/>");
document.write((5>4)? 'Yes' : 'No'+"<br/>");

document.write("<br/>");
document.write(+[5>66] ? 'Yes' : 'No'+"<br/>");


document.write("<br/>");
function startsCar(carId){
    let message = 'Starting...';
    let startFn = function turekey() {
        document.write("Function scope:"+message+"<br/>");
    };
    startFn ();
}
startsCar(123);


document.write("<br/>");
if (5===5){
    var message = 'Equal';
}
document.write("Block scope:"+message+"<br/>");


document.write("<br/>");
let app = (function (){
    let carrId = 123;
    document.write("IIFE'S:"+'in function'+"<br/>");
    return {};
})();
document.write(app+"<br/>");

document.write("<br/>");
let app1 = (function(){
    let carrId1 = 123;
    let getId = function(){
        return carrId1;
    };
    return {
        getId:getId
    };
})();
document.write("Closures:"+app1.getId() +"<br/>");

document.write("<br/>");
let o ={
    carrId2: 123,
    getId: function(){
        document.write("Keyword:"+this);
        return this.carrId2;
    }
};
document.write( o.getId()+ "<br/>" );

document.write("<br/>");
let l = {
    carrId3:123,
    getId:function(prefix){
        return prefix + this.carrId3;
    }
};
let newCar = { carrId3:456};
document.write("Call and Apply=>"+l.getId.apply(newCar,['ID:'])+"<br/>");

document.write("<br/>");
let P = {
    carrId4:123,
    getId:function() {
        return this.carrId4;
    }
};
let newcar1 = {carrId4:654};
let newFn = P.getId.bind(newcar1);
document.write("Bind:"+newFn()+"<br/>");

document.write("<br/>");
let getId = (prefix,suffix) => {
    return prefix + 789 + suffix;
};
document.write(getId("Arrow Functions=>"+'ID: ' , '!')+"<br/>");

/*document.write("<br/>");
let trackcar = function(carId, city='AA'){
    document.write('Tracking ${carId} in ${city}');

};
document.write(trackcar(321) );
document.write(trackcar(321,'DZ'));*/

document.write("<br/>");
function CAR(id) {
    this.carId=id;
    this.start= function() {
        document.write("Constructor Function=>"+'start:'+ this.carId+"<br/>");
    };
}
let vehicle = new CAR(123);
vehicle.start();

document.write("<br/>");
let jsonIn=
`
[
  {"carId" : 123},
  {"carId" : 456},
  {"carId" : 789}
]
`;
let carIds12 = JSON.parse(jsonIn);
document.write("JSON Object:"+JSON.stringify(carIds12)+"<br/>");

document.write("<br/>");
let carIds13 = [
    {carId:123, style: 'sedan'},
    {carId:456, style: 'convertable'},
    {carId:789, style: 'sedan'}
];
carIds13.forEach(carId => console.log(car));
carIds13.forEach(carId => document.write("Array Iteration:"+car));
carIds13.forEach(
    (car,index) => console.log(car,index));
    (car,index) => document.write("Array Iteration:"+car,index+"<br/>")
;

document.write("<br/>");
let carIds14 = [
    {carId:123, style: 'sedan'},
    {carId:456, style: 'convertible'},
    {carId:789, style: 'sedan'}
];
let convertibles = carIds14.filter(
car => car.style === 'convertible'
);
console.log(convertibles);
document.write("Array Iteration:"+convertibles+"<br/>");

document.write("<br/>");
let carIds15 = [
    {carId:123, style: 'sedan'},
    {carId:456, style: 'convertible'},
    {carId:789, style: 'sedan'}
];
let result = carIds15.every(
car => car.carId > 0
);
document.write("Testing the entire array:"+result+"<br/>");

document.write("<br/>");
let carIds16 = [
    {carId:123, style: 'sedan'},
    {carId:null, style: 'convertible'},
    {carId:789, style: 'sedan'}
];
let results = carIds16.every(
car => car.carId > 0
);
document.write("Testing the entire array:"+results+"<br/>");

document.write("<br/>");
let carIds17 = [
    {carId:123, style: 'sedan'},
    {carId:null, style: 'convertible'},
    {carId:789, style: 'sedan'}
];
let carS = carIds17.find(
carS => carS.carId >500
);
console.log(carS);
document.write("Array Iteration:"+carS+"<br/>");

document.write("<br/>");
class Toy {

}
let toy = new Toy();
console.log(toy);
document.write("Class Basics:"+toy+"<br/>");

document.write("<br/>");
class Toy1 {
    constructor(id){
        this.id = id;
    }
}
 let toy1 = new Toy1(123);
 document.write("Constructor:"+toy1.id+"<br/>");

 document.write("<br/>");
class Toy2 {
    constructor(id){
        this.id = id;
    }
}
 let toy2 = new Toy2(123);
toy2.id = 456;
 document.write("Change constructor property:"+toy2.id+"<br/>");

document.write("<br/>");
class Shop {
    constructor(id){
        this.id = id;
    }
    identify(suffix){
        return `Shop Id: ${this.id} ${suffix}`;
    }
}
let shop = new Shop(123);
document.write("Methods=>"+shop.identify('!!!')+"<br/>");

document.write("<br/>");
class vehicles {
   constructor(){
    this.type ='plan';
   }
   start() {
    return`Starting: ${this.type}`;
   }
}

class Plan extends vehicles {
    start(){
        return 'in Plan start' + super.start();
    }
}
let plan = new Plan();
document.write("Inheritance=>"+plan.start()+"<br/>");

document.write("<br/>");
year5 = 1996;
document.write("Window Obejct:"+window.year5+"<br/>");

document.write("<br/>");
//year5 = 1996;
document.write("refer to Window global obejct:"+innerWidth+"<br/>");

document.write("<br/>");
let intervalId = setInterval(function(){
console.log('1 second passed');
},1000);

document.write("<br/>");
console.log(location.href);

document.write("<br/>");
let  els = document.getElementsByClassName('h1');
console.log(els);
document.write("slecting DOM Elements:"+els+"<br/>");

/*document.write("<br/>");
let toy3 = newToy3;
console.log('continuing...'); */

document.write("<br/>");
try {
    let toy4=newToy4;
}
catch(error) {
    console.log('error:', error);
}
console.log('continuing...');

document.write("<br/>");
try {
    let toy5=null;
}
catch(error) {
   document.write('error:', error);
}
finally{

document.write("finally:"+'this always executes'+"<br/>");
}
document.write("<br/>");
let promise = new Promise(
    function(resolve,reject){
        setTimeout(resolve,100,'somevalue');
    }
);
console.log(promise);