let length;
let width;

function calculateArea(){
    length= parseFloat(document.getElementById("length").value);
    width= parseFloat(document.getElementById('width').value);

    let area= length * width;
    document.getElementById('result').innerHTML=`The area of the rectangle is: ${area}`;
}

function addThreeNumbers(a,b,c){
    return a+b+c;
}

let first;
let second;
let third;

function groceryTracker() {

    first= parseFloat(document.getElementById("amountOne").value);
    second=parseFloat(document.getElementById("amountTwo").value);
    third= parseFloat(document.getElementById("amountThree").value);
    document.getElementById("resultOne").innerHTML=`The total amount is : \$ ${addThreeNumbers(first,second,third)}`;
}