//Getting elements
let inputBox = document.querySelector(".inputfield input");
let addBtn = document.querySelector(".inputfield button");
let Lista = document.querySelector(".Lista");
let dellBtn = document.querySelector(".footer");

addBtn.onclick = ()=>{
  let userData = inputBox.value;
  let getLocalStorage = localStorage.getItem("info");

  if (!userData.trim())
  {
    alert("Erro!");
    inputBox.value = null;
    return 0;
  }

  if (getLocalStorage == null) {
    listArr = [];
  }else {
    listArr = JSON.parse(getLocalStorage);
  }
  listArr.push(userData);
  localStorage.setItem("info", JSON.stringify(listArr));
  show();
}

function show(){
  let getLocalStorage = localStorage.getItem("info");

  if (getLocalStorage == null) {
    listArr = [];
  }else {
    listArr = JSON.parse(getLocalStorage);
  }

  const pendingnum = document.querySelector(".pendingnum");
  pendingnum.textContent = listArr.length;

  let newLiTag = '';
  listArr.forEach((element, index) => {
    newLiTag += `<li> ${element} <span onclick="deletetasktask(${index})"; ><i class="fas fa-trash"></i></span></li>`
  });
  Lista.innerHTML = newLiTag;
  inputBox.value = "";
}

function deletetasktask(index){
  let getLocalStorage = localStorage.getItem("info");
  listArr = JSON.parse(getLocalStorage);

  listArr.splice(index, 1);
  localStorage.setItem("info", JSON.stringify(listArr));
  show();
}

dellBtn.onclick = ()=>{
  listArr = [];
  localStorage.setItem("info", JSON.stringify(listArr));
  show();
}
