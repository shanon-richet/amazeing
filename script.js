const lab = document.querySelector('main');
const route= document.querySelector('.route')
const mur= document.querySelector('.mur');

var i = 0;
for (; i<100 ; i++){
    let mur = document.createElement('p');
    mur.setAttribute('class', 'mur')
    lab.appendChild(mur) 
}
let murs = document.querySelectorAll('.mur')

do{
  i += 1;
  murs[1].setAttribute('class','route')
  murs[11].setAttribute('class','route')
  murs[13].setAttribute('class','route')
  murs[14].setAttribute('class','route')
  murs[15].setAttribute('class','route')
  murs[16].setAttribute('class','route')
  murs[21].setAttribute('class','route')
  murs[23].setAttribute('class','route')
  murs[26].setAttribute('class','route')
  murs[31].setAttribute('class','route')
  murs[33].setAttribute('class','route')
  murs[35].setAttribute('class','route')
  murs[36].setAttribute('class','route')
  murs[43].setAttribute('class','route')
  murs[50].setAttribute('class','route')
  murs[51].setAttribute('class','route')
  murs[52].setAttribute('class','route')
  murs[53].setAttribute('class','route')
}
while(i < 5)

let tresor = document.createElement('p') 
tresor.setAttribute('class', 'tresor')
murs[25].innerHTML= '&#128176;'
murs[25].appendChild(tresor)

let joueur = document.createElement('p')
joueur.setAttribute('class', 'joueur')
let index = 0;

murs[index].appendChild(joueur)

document.body.addEventListener("keydown", keyEvent);
function keyEvent(event) {
  var x = event.keyCode;
  if(x === 40){  
murs[index+=10].appendChild(joueur)
  }
  if(x === 39){  
  murs[index+=1].appendChild(joueur)
  }
  if(x === 38){  
  murs[index-=10].appendChild(joueur)
  }  
if (x === 37) {  
murs[index-=1].appendChild(joueur)
  }
}
