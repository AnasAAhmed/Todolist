// alert("me")
// document.write("this is document write")
// javascript console api
// console.log("hello world",4+6 ,"another log")
// console.assert(4=(6-2))
//   console.warn("this is warning")
//  console.error("404 error")
// javascript variables
var number1 = 34;
var number2 = 56;
//  console.log(number1 +number2);
// data types in java script
// numbers
var number1 = 455;
var number2 = 56.76;
// strings
var str1 = "this is a string";
var str2 = "this is also a string";
// objects
var marks = {
  ravi: 34,
  shaheen: 78,
  harry: 99.977
}
//  console.log(marks)
// boleans   
var a = true
var b = false
// var und = (undefined)
var und =
  console.log(und)
var n = null
console.log(n)
// at a very high level,there are two typs of data type in javascript
// 1.primitive data types:undefined,null,number,string ,boolean,symbol
// 2.references data types:arrays and objects
var arr = [1, 2, 3, 4, 5]
// console.log(arr[2])
//   console.log(arr)
// operatersin javascript
// arthmetic operaters
var a = 100
var b = 10
//  console.log("the value os a+b is", a+b)
//  console.log("the value os a/b is", a/b)
//  console.log("the value os a*b is" ,a*b)
//  console.log("the value os a-b is" ,a-b)
//asignment operaters
var c = b
c += 2
//   console.log(c)
var x = 56
var y = 57
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
//logical and
// console.log(true&&true)
// console.log(false&&false)
// console.log(false&&true)
// console.log(true&&false)
//logical or||
// console.log(true||true);
//  console.log(false||false);
//  console.log(false||true);
//  console.log(true||false);
//logical not
// console.log(!false);
// console.log(!true);
//function in javascript
function avg(a, b, c) {
  // return (a+b+c)/3     
  c = (a + b + c) / 3
  return c;
}
//DRY= do not repeat yourself
c1 = avg(4, 6, 8)
c2 = avg(41, 61, 81)
// console.log(c1 ,c2)
//   conditionals in javascript
var age = (41)
// only if statement
// if (age>18){ 
//     console.log("your an asshole")
// }
// if-else statemnet
if (age > 18) {
  console.log("your an adult")
}
else {

  console.log("your are not an adult")
}
//you can overwritr  var
age = 27;
// if -else ladder
if (age > 32) {
  console.log("your are also adult")
}
else if (age > 26) {

  console.log("your are an adult too")
}
else if (age > 18) {

  console.log("your are an adult ")

  console.log("end of ladder")
}
//loop
var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
for(var i=0;i<arr.length;i++){ 
  if(i==3){ 
    //break; //if you want break loop
    continue; //if you want to skip one num and continue
  }
  // console.log(arr[i])
}

// arr.forEach(function (element) {
//   console.log(element);
// })
// const ac=0;
// ac++;
// ac=ac+1;
// let j = 0;
// while(j<arr.length){ 
//   console.log(arr[j])
//   j++;
// }
// do{ 
//   console.log(arr.length)
//   j++
// }while(j<arr.length)
let myArr = ["fan","camera","34","null","true"]
//array methods
// console.log(myArr.length);
// myArr.pop();
// myArr.push("harry");
//myArr.shift()
// myArr.unshift("harry")
const newlen = myArr.unshift("harry")  //you can add new length with unshift
// console.log(newlen)
// console.log(myArr);
//string method
let boom = "boom is a good bam good,"
// console.log(boom.length)
// console.log(boom.indexOF("good"))
// console.log(boom.lastIndexOf(good))
 
// console.log(boom.slice(0,3))
d= boom.replace("boom","baam")
d = d.replace("good","bad")
console.log(d,boom)

let mydate= new Date();
console.log(mydate);
console.log(mydate.getTime());
console.log(mydate.getFullYear());
console.log(mydate.getDay());
console.log(mydate.getHours());
console.log(mydate.getMinutes());
// dom manipulation
let elem =document.getElementById('click');
console.log(elem);
let elemclass =document.getElementsByClassName('container');
// console.log(elemclass);
// elemclass[0].style.background="yellow"
elemclass[0].classList.add("bg-primary")
elemclass[0].classList.add("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemclass[0].innerHTML);
// console.log(elemclass[0].innerText);
// tn =document.getElementsByTagName('button')
tn =document.getElementsByTagName('div')
console.log(tn)
createdElement =document.createElement('p');
createdElement.innertext = "This is a created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innertext ="This is a created bold";
tn[0].replaceChild(createdElement2,createdElement);
sel = document.querySelector('.container')
console.log(sel)
sel = document.querySelectorAll('.container')
console.log(sel)
// events in javascript
function clicked(){ 
  console.log('the btn was clicked')
}
window.onload = function(){ 
  console.log('the document is loaded')
}
// firstcontainer.addEventListener('click', function(){ 
//   document.querySelectorAll('.container')[1].innerHTML="<u> we have clicked </u>"
//    console.log("clicked")
// })

// firstcontainer.addEventListener("mouseover", function(){ 
//   console.log("click")
// })
// firstcontainer.addEventListener("mouseout", function(){ 
//   console.log("click")
// })
// let prevHTML =document.querySelectorAll('.container')[1].innerHTML;
// firstcontainer.addEventListener("mouseup", function(){ 
//   document.querySelectorAll('.container')[1].innerHTML= prevHTML;
//   console.log("clicked")
// })
// firstcontainer.addEventListener("mousedown", function(){ 
//   document.querySelectorAll('.container')[1].innerHTML="<u> we have clicked </u>"
//   console.log("clickedd")
// })
// arrow function
function sum(){ 
  return 5;
}
summ =(a,b)=>{ 
  return a+b;
}
// settimeout and setinterval
logkaro=()=>{ 
  document.querySelectorAll('.container')[1].innerHTML="<u> set interval clicked </u>"
  console.log("i am the logkaro")
}
clr=setInterval(logkaro,2000);//for repeat //you can also stop with clr (clearintervalin console)
// use clearInterval(clr)/cleartimeout(clr) to cancel setinterval/settiomeout
// setTimeout(logkaro,2000);//for single time//you can stop it clr (cleartimeout) in console
// local storage
// localStorage.getItem('name')
// null
// localStorage.getItem('name','harry')
// null
// localStorage.setItem('name','harry')
// undefined
// localStorage
// Storage {name: 'harry', length: 1}
// localStorage.getItem('name')
// 'harry'
// localStorage.removeItem('name')
// localStorage.clear
//json // ypu can convert string to obj and obj to string
obj = {name:"harry", length:1 ,a :{this: 'tha"t'}}
jso = JSON.stringify(obj)
console.log(typeof jso)//you can show type of also for that you have write these type of lines
console.log(jso)
parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
console.log(parsed)