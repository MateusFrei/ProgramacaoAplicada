const calculator = document.getElementById("calculator");

let name = document.getElementById("name");
let height = document.getElementById("height");
let pesa = document.getElementById("peso");

function imc(){

  nome = name.value;
  altura = height.value;
  pe = pesa.value;

  let value = 0;
  value = (pesa/(height * height));
  alert(name);
  alert(height);
  alert(pesa);

  let classify = '';

  if (value < 18.5) {
    classify = 'Lower weight';
    alert("Your IMC is: "+ classify);
    return 0;

  }else if (value < 25) {
    classify = 'You are in a great weight!!';
    alert("Your IMC is: "+ classify);
    return 0;

  }else if (value < 30) {
    classify = 'Little over weight';
    alert("Your IMC is: "+ classify);
    return 0;

  }else if (value < 35) {
    classify = 'Over weight :/ ';
    alert("Your IMC is: "+ classify);
    return 0;

  }else {
    classify = 'You are too much over weight';
    alert("Your IMC is: "+ classify);
    return 0;
  }

}

calculator.addEventListener('click',imc);
