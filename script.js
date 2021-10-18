const LEVEL_1 = 
  ["*","*","*","*","*","*","*","*","*","*","*",".","*",
   "*","S",".",".",".",".",".","*","*",".","*",".","T",
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
const areas= document.querySelectorAll('.areas')
const route= document.querySelector('.route')
const mur= document.querySelector('.mur');


for (const [key, value] of Object.entries(LEVEL_1)) {
  console.log(`${key}: ${value}`);
  let areas = document.createElement('p');
  areas.setAttribute('class', 'areas')
  lab.appendChild(areas) 
  if (value === '*'){
    areas.style.backgroundColor = 'black'
    areas.id= 'mur'
  }
  if (value === 'T'){
    areas.style.backgroundColor= 'yellow'
    areas.id= 'tresor'
  }
  if (value === 'S'){
    areas.style.backgroundColor= 'green'
    areas.id= 'joueur'
  }
}
