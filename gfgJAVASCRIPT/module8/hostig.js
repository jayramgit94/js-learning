console.log(age);//calling variable before declaration of variable
//variable declaration
//output: undefined because variable is hoisted at the top of the code

var age = 100;
// console.log(age);//100



showname();//calling function before declaration of function
//function declaration
//output: jayram sangawat

console.log(showname);


function showname(){
    console.log("jayram sangawat");
    
}



//hosting in function scope 



var getuser = function(){
    console.log("jayram sangawat");
};

function showname(){
    console.log("jayram sangawat");
};

getuser();//calling function before declaration of function
showname();//calling function before declaration of function



