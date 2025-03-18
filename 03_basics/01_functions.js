function abhi (){
    console.log("D");
    console.log("O");
    console.log("G");
    console.log("R");
    console.log("A");
}
abhi(); //wihtout pararnthesis its just the refrence of the functions and its answers nothing

function add(num1 , num2){
    // let result = num1+num2
    console.log("abhi");
    return num1+num2; //nothing is executed after the return  statement;
    

}
const result = add(4 , 7);
console.log("result :" ,  result);


function logging(username){
    if(!username){
        console.log("please enter the username first")
    }
    return `${username} , logged in`
}
console.log(logging("abhi")); //if nothing is send as the argument in the function cal then it gives the u derfinesd result