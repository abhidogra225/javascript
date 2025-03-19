//"this keyword" gives us the context of the current element
const user = {
    username : "abhi",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} , Welcome to the website`) //this keyword is used to acess the element pr attribute of this scope
    }

    
}
//user.welcomeMessage();
//console.log(this) //this shows the context

const abhi=() =>{
    let username = "Rishav"
    console.log(this);
}

const add=(num1 , num2) =>  num1+num2;   ///this is implicit declaration
console.log(add(3 , 6))

//in the {} the "return" statement is necessary called the explicit return


const score=(num1 , num2) => ({username:"abhi"}) //object username should be stored inside the paranthesis
console.log(add(3 , 6))