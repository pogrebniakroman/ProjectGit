/* const products = [
{ id:1, title: 'Notebook', price: 1000},
{ id:2, title: 'Mouse', price: 1000},
{ id:3, title: 'Keyboard', price: 1000},
{ id:4, title: 'Gamepad', price: 1000},
{ id:5, title: 'Notebook', price: 1000},
];

const renderProduct = (item, img = 'E:\Рабочий стол\texnobot.com.ua\img\22')=> `<div class="product-item">
<img src="${img}" alt="Some img">
        <h3>${item.title}</h3>
        <p>${item.price}</p>
        <button class="by-btn">Add</button>
    </div>`;


const renderProducts = list => 
 document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
renderProducts(products); */

/* 
function Person(name, yearOfBirth){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
}
   Person.prototype.calcAge = function () {
console.log(new Date().getFullYear()-this.yearOfBirth);
   };
   function Teacher(name, yearOfBirth, subject){
    Person.call(this, name, yearOfBirth);
    this.subject = subject;

   }
   Teacher.prototype = Object.create(Person.prototype);
    

var John = new Person('John',1990);
var Ana = new Teacher('Anna',1995, 'Math'); */

class Person{
    constructor(name, yearOfBirth){
        this.name = name;
        this.yearOfBirth = yearOfBirth;

    }
    calcAge(){
        console.log(new Date().getFullYear()-this.yearOfBirth);
    }
}
class Teacher extends Person{
    constructor(name, yearOfBirth, subject){
        super(name, yearOfBirth);
        this.subject = subject;
    }

    static triaple(x){
        if(x=== undefined){
            x = 2;
        }
        return x*3;
    }

}
const joihn = new Person('Joihn', 1990);
const ann = new Teacher('Ann', 1998, 'Math');
