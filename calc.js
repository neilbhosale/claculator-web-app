
  
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
    let op = 0;
    let a = "";
    let b = "";
    let p = document.getElementById("answer").innerHTML;

    let x = p.split("");
    for (let i=0; i<x.length; i++){
        if (x[i] == "+" || x[i] == "-" || x[i] == "*" || x[i] == "/" || x[i] == "R"){
            op = i-1;
        }
    }

    if (op != 0 || op != 1){
    for (let j=0; j<=op; j++){
        a += x[j];
    } 
}
    for (let k=(op+2); k<x.length; k++){
        b += x[k];
    }

    a = parseFloat(a);
    b = parseFloat(b);

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
    else if(x[op+1] == "R"){
        ans = b**(0.5);
    }

    document.getElementById("answer").innerHTML = ans;
}