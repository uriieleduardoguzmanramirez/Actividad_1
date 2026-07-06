function suma(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    var resultado = parseInt(num1)+parseInt(num2);
    document.getElementById("resultado").innerHTML = "resultado:" + resultado;
    console.log("y si si");
}
function multiplicar(){
    var num1 = document.getElementById("num3").value;
    var num2 = document.getElementById("num4").value;

    var resultado = parseInt(num1)*parseInt(num2);
    document.getElementById("resultado2").innerHTML = "resultado: "+resultado;
}
