
function imc(){
  let name = document.getElementById("name").value;
  let height = document.getElementById("height").value;
  let peso = document.getElementById("peso").value;

  let value = 0;
  value = (peso/(height * height));

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
