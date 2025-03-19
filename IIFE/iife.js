//Immediately invoked function expression
(function chai(){         //this is named iife
    console.log("DB CONNEDCTED")

})();
//we use the iffe for Global scope ka pollution hatane ka liye

//in this () this is for the function and () this if for the function call and the first one is wrapped inside the paranthesis
((subject)=>{                      //this is unnamed iffe .Also the normal iffe
    console.log(`abhi and code ${subject}`)
})("maths")
