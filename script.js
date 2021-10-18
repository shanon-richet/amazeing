const LEVEL_1 = 
  ["S","*","*","*","*","*","*","*","*","*","*",".","*",
   "T","*",".",".",".",".",".","*","*",".","*",".","T",
  "*","*","*","*","*",".",".",".",".",".","*",".","*",
  "*","*","*","*","*",".","*","*","*",".","*",".","*",
  "*","*","*","*","*",".","*","*","*","*","*",".","*",
  "*","*","*","*","*",".","*","*","*","*","*",".","*",
  "*","*","*","*","*",".",".",".",".",".",".",".","*",
  "*","*","*","*","*",".","*","*","*","*","*","*","*",
  "*",".",".",".",".",".",".",".",".",".","*","*","*",
  "*",".","*","*","*","*","*","*",".",".",".","*","*",
  "*",".",".",".",".","*","*","*","*","*","*","*","*",
  "*","*","*","*","*","*","*","*","*","*","*","*","*"]

const lab = document.querySelector('main');

for (const [key, value] of Object.entries(LEVEL_1)) {
  console.log(`${key}: ${value}`);
  let areas = document.createElement('p');
  areas.setAttribute('class', 'areas')
  lab.appendChild(areas) 
  if (value === '.'){
    areas.style.backgroundColor = 'purple'
    areas.id= 'mur'
  }
  if (value === '*'){
    areas.style.backgroundColor = 'black'
    areas.id= 'chemin'
  }
  if (value === 'T'){
    areas.style.backgroundColor= 'yellow'
    areas.id= 'tresor'
  }
  if (value === 'S'){
    var joueur= document.createElement('p')
    joueur.setAttribute('class', 'joueur')
    areas.appendChild(joueur)
  }
}

let index = 0;
let areas= document.querySelectorAll('.areas')
let tresor= document.querySelectorAll('tresor')

document.addEventListener('keydown', function(e) {
  switch (e.keyCode) {
      case 37: //left arrow
        if (areas[index-1].id === 'chemin'){
        areas[index-=1].appendChild(joueur)
        }
          break;
      case 38: //up arrow
      if (areas[index-13].id === 'chemin'){
        areas[index-=13].appendChild(joueur)
      }
          break;
      case 39: //right arrow
      if (areas[index+1].id === 'chemin'){
        areas[index+=1].appendChild(joueur)
      }
          break;
      case 40: //bottom arrow
      if(areas[index+13].id === 'chemin'){
        areas[index+=13].appendChild(joueur)
      }
          break;
  }
});

