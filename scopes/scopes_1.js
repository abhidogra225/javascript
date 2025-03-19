function one() {
    const username = "abhi";
    
    function two() {
        const website = "youtube";
        console.log(username); 
    }
    
    two();
    // console.log(website); // ❌ ReferenceError: website is not defined
}

one();

function addone(num){      //this is function
    return num+1
}
addone(5);

const addtwo = function(num){         //this is called the expression
    return num+2;
}
 const add = addtwo(8);
console.log(add)