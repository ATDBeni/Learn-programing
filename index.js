
 console.log("Codul este executat");

var myName = "Alex"
let secondName = "Marius"
const age = 30
/** daca declaram o variabila cu var putem so=a o modificam de oriunde dar daca decalram o variabila cu let aceasta va putea fi modificata doar in bloku lui  */

//Primitiva
// tipuri de date
//primitive si obiecet

//boleam
let Boleam = true
//null
let n = null
//undefined
let undf = undefined
//NUMBER
let num = 123
//String
let str = 'string'
console.log(typeof(n))

//Obiect
let pers = {
    age : 20,
    name: 'bogdan',
    par : 'Blond'
}
console.log(pers)
//Array
const hobby = ['reding','writing','runing']
const prices = [12.4,13,67,75,65]

const price = prices[3]
console.log(price)


//Operatori

// 1. Aritmetici

let sum = 1 + 2; console.log(sum)
const diff = 4 - 1; console.log(diff)
const imp = 4 /2 ; console.log(imp)
const inm = 4 * 3; console.log(inm)
sum++
console.log(sum)

// 2. Logici && || !

//&& - si
// || ori/sau
// ! negatie 


// 3. Compararatie 

// == - egalitate
// != - diferite
// === verifica egalitatea nu doar a numerelor dar si a tipului de date

const number1 = 12
const number2 = 33

console.log(number1 == number2)
console.log(number1 != number2)


//Control flow //if-else
const agee = 14;
if(agee < 18){
    console.log("Tu esti minor")
}else {
    console.log('TU esti major')
}
//for loop
const oamnei = ["Bogdan","Mihai",'ALex','Cristi']
for(i=0; i < oamnei.length;i++){
console.log(oamnei[i])

}
let number = 2 
//while(number<6){
   // console.log(number)
    //number++}
    //do{
//console.log(number)
//number++

    //}while(number<=10)
     

  /* switch(number){
case 1:
    console.log('numarul este 1')
    break
    case 2:
        console.log('numarul este 2')
        break
        default:
            console.log('numarul este default '+_number)
    }*/
    //gestionare erori
    try{
        if(all=== 1){
            console.log('NUmber are valoare 1')
        }

}catch(error){
    console.log('number trebuie sa fie diferit de 0')
   
    
}finally{
console.log('finally a fost executat')
}

//function
/*
function personDetails(name,age,email){

    console.log('my name is :'+name)
    console.log('my age is :'+age)
    console.log('my emails is :'+email)

}
personDetails("mihai",23,'test@test.ro')

function function1(callback){
    console.log('procesing....')
callback()
}
function1 (() => console.log('fct a fost preodcesata'))
  

class person{
    constructor(firstname,lastname,ageee){
    this.firstname = firstname
    this.lastname = lastname
    this.ageee = ageee
}
calculatorage(){
    return new Date().getFullYear() - this.ageee.getFullYear()
}
}
var p = new person("Alex",'Miahi',new Date('11-09-1999'))
console.log(p.calculatorage())

var mode = document.getElementById("title")
mode.append('lololo')

console.log(mode.innerText)
var holle = document.getElementById('title')
holle.style.color = "red"*/

var buttonSubmit = document.getElementById('button')
buttonSubmit.addEventListener('click',btnCliked)

function btnCliked (e){
    alert('buton has been clicked')
}