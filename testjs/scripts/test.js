// declaration
var someVariable
// write
someVariable = 235; // varname=value
// read  varname
console.log(someVariable);

//shorter variant
var someAnotherVariable = 12;
console.log(someAnotherVariable);

//resign value
var age = 13;
typeof age;
let pame = "max"
typeof pame;
let surname = "N"
typeof surname;
var info = age + "," + pame + "," + surname
someVariable = 123456;
console.log(someVariable);
function tak(){
console.log(info)
}
tak();
const baton = document.querySelectorAll('.active');
console.log(baton);
const block = document.querySelector('.container')
console.log(block);
function myFunction() {
    var element = document.getElementById("cont");
    element.classList.remove("container");
}
myFunction();
const block1 = document.querySelector('.container');
console.log(block1);

        const httpTest = new XMLHttpRequest();
        httpTest.open("get", "https://swapi.dev/api/people/1/");
        httpTest.addEventListener("load", () => {
          console.log(httpTest);
        });
        let p = document.createElement("p")
        p.innerHTML = "<h2>httpTest</h2>"
        document.body.appendChild(p)
      
    
    





