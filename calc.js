// let ans = 5;

// document.forms["calculation"]["answer"].value = ans;


// {/* <input type="text" name="name" id="uniqueID" value="value" /> */}
var isadd = 0, issub=0, ismult = 0, isdiv = 0;
  
function fval(val){
    document.getElementById("answer").innerHTML+=val;
}
function fadd(val){
    document.getElementById("answer").innerHTML+=val;
}
function fsub(val){
    document.getElementById("answer").innerHTML+=val;
}
function fmult(val){
    document.getElementById("answer").innerHTML+=val;
}
function fdiv(val){
    document.getElementById("answer").innerHTML+=val;
}
function cancel(){
    let xi = document.getElementById("answer").innerHTML;
    let arr = xi.split("");
    let xo = arr.pop();
    let ne = "";
    for (i=0; i<arr.length; i++){
        ne+= arr[i];
    }
    document.getElementById("answer").innerHTML = ne;
}
function clea(){
    document.getElementById("answer").innerHTML = " ";   
}


function calc(){
    let ans;
    let op;
    let a = "";
    let b = "";
    let p = document.getElementById("answer").innerHTML;

    let x = p.split("");
    for (let i=0; i<x.length; i++){
        if (x[i] == "+" || x[i] == "-" || x[i] == "*" || x[i] == "/"){
            op = i-1;
        }
    }
    for (let j=0; j<=op; j++){
        a += x[j];
    } 
    for (let k=(op+2); k<x.length; k++){
        b += x[k];
    }
    a = parseInt(a);
    b = parseInt(b);
    if (x[op+1] == "+"){
        ans = a+b;
    }
    else if (x[op+1] == "-"){
        ans = a-b;
    }
    else if (x[op+1] == "*"){
        ans = a*b;
    }
    else if (x[op+1] == "/"){
        ans = a/b;
    }
    else if (x[op+1] == "%"){
        ans = a%b;
    }

    document.getElementById("answer").innerHTML = ans;
}