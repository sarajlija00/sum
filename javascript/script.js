function sum (){
    let numberOne = document.getElementById ('broj1').value;
    let numberTwo = document.getElementById ('broj2').value;
    document.getElementById ('broj1').value ="";
    document.getElementById ('broj2').value ="";
    let a = JSON.parse (numberOne);
    let b = JSON.parse (numberTwo);
    document.getElementById ('result').innerText = a+b;



    
}