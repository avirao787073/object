alert("learning about the objects")

let user={
    name:"Avnish",
    age:23
}

user.lastName="Kumar Rao"

console.log(user.age);
console.log(user.name);
console.log(user.lastName)

let namee=new Object();

namee.password=Number(1234)
console.log(namee.password)
console.log("type of password " + typeof(namee.password))

namee.isAdmin=confirm("are you a admin")
var pass=Number(prompt("Enter password"))
console.log(pass)
console.log("type of pass "+ typeof(pass))
let cone=(namee.isAdmin==pass)
console.log(cone);

var pass=Number

if(namee.isAdmin && namee.password == pass){
    console.log("you are a admin")
}
else{
    console.log("nope")
}

//multiple word object property

let jyoti={
    "name of":"jyoti"
}

console.log(jyoti["name of"])


let obj={
    name:"Avnish",
    lname:"rao",
    fullNme:function fullname(){
        return this.name+this.lname;
    }
}

// console.log(obj.fullName())
//anoter way of creating object
emp={name:"avnish rao",batch:"alpha",mobileNumber:9111918450}
console.log(emp.mobileNumber)


//key in object

let userr={age:30}

let key="age";

console.log(key in userr)


// in and for in for object

const rao={
    name:"Avnish",
    lname:"rao",
    age:22,
    college:"LNCT"
}

for(let key in rao){
    console.log(key);
    console.log(rao[key])
}

vivek={
    name:"vivek",
    college:"lnct"
}

vivek.age=20;

for(let key in vivek){
    console.log(vivek[key])

}

delete vivek.age;

for(let key in vivek){
    console.log(vivek[key])
}

let student={
    name:"jhon",
    surname:"smith",
}

for(let i in student){
    console.log(student[i])
}

student.name="pete"
console.log(student.name)

student.age=50;
delete student.name;

for(let key in student){
    console.log(student[key])
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

var sum=0;
for(let i in salaries){
    sum+=salaries[i]
}

console.log(sum)

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

const foo=(menu)=>{
    for(let i in menu){
        if(typeof menu[i] =='Number')
        {
            menu[i]*=menu[i];
        }
    }
}

foo(menu);

for(let i in menu){
    console.log(menu[i])
}


// some basic things about the object it's about the object refrences and copying

var message="hello";
var parse=message;
console.log(message===parse)

// as the above the object doesnt behave like this A variable assigned to an
// object stores not the object itself, but its “address in memory” – in other words “a reference” to it.

let avni={
    name:"avnis"
}

let admin=avni;
//acopying refrences
admin.name="rahul";
console.log(avni.name)

//comparion of object 
//two object are only when equal if they are same object or copyin its refrences like

var ab={};
var bc=ab;
console.log(ab===bc)//true

//now see after APLYING two independent objects like below;

let ans={};
let ques={}
console.log(ans==ques)//it will print false

//cloning and merging objectas object.assign

//as we done with copying refrences of object obiusly we an print the data with the same 
//now copying it now and make it two diffrent object

const asd={
    user:"Avnish",
    age:20,
    college:"LNCT"
};

const qwe={};

for(let i in asd){
    qwe[i]=asd[i]
}

qwe.user="vivek";

for(let i in asd){
    console.log(asd[i]);
}

//for doing the above game we should use assign method to do
//Object.assign(dest, [src1, src2, src3...])
//The first argument dest is a target object

let zx={
    name:"aksh",
    age:"20",
    college:'LNCT'
}

let permission1={canView:true};
let permission2={canEdit:true};

Object.assign(zx,permission1,permission2);

for(let i in zx){
    console.log(zx[i])
}

for(let i in asd){
    console.log(qwe[i]);
}

//We also can use Object.assign to replace for..in loop for simple cloning:

let merge={
    user:"avnish"
}

let clone=Object.assign({},merge)

console.log(clone.user);

let bihar={
    bihar:"patna",
    mp:"bhopal",
    jk:"ranchi",
    up:"lucknow",
    delhi:"delhi"
}

let capital={};

capital={...bihar};

for(let i in capital){
    console.log(capital[i])
}