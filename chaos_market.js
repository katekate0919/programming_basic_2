function getRandom(min, max){
  let random = Math.floor(Math.random() * (max + 1 - min));

  return random * 100;
}

function randomPrice(n){
  let price = n.querySelectorAll('.important');
  for(let i = 0; i < price.length; i++){
    price[i].innerText = "\xA5" + getRandom(1, 1000).toLocaleString() + "　";
  }
}

randomPrice(document.body);