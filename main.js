const LEVEL1 =
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
    '.', "S", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", ".", "*", '.',
    '.', "*", "*", ".", ".", ".", ".", ".", "*", "*", ".", "*", ".", "T", '.',
    '.', "*", "*", "*", "*", "*", ".", ".", ".", ".", ".", "*", ".", "*", '.',
    '.', "*", "*", "*", "*", "*", ".", "*", "*", "*", ".", "*", ".", "*", '.',
    '.', "*", "*", "*", "*", "*", ".", "*", "*", "*", "*", "*", ".", "*", '.',
    '.', "*", "*", "*", "*", "*", ".", "*", "*", "*", "*", "*", ".", "*", '.',
    '.', "*", "*", "*", "*", "*", ".", ".", ".", ".", ".", ".", ".", "*", '.',
    '.', "*", "*", "*", "*", "*", ".", "*", "*", "*", "*", "*", "*", "*", '.',
    '.', "*", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*", "*", "*", '.',
    '.', "*", ".", "*", "*", "*", "*", "*", "*", ".", ".", ".", "*", "*", '.',
    '.', "*", ".", ".", ".", ".", "*", "*", "*", "*", "*", "*", "*", "*", '.',
    '.', "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", '.',
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'
  ]

const LEVEL2 = [
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", ".", ".", "S", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", ".", "*"],
  ["*", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*"],
  ["*", ".", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "T"],
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]
]

const LEVEL3 = [
  ["*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "S", "*", "*", "*"],
  ["*", "*", "*", "*", ".", "*", "*", "*"],
  ["*", "*", "*", "*", ".", "*", "*", "*"],
  ["*", "*", "*", "*", ".", "*", "*", "*"],
  ["*", ".", ".", ".", ".", ".", ".", "*"],
  ["*", ".", "*", "*", "*", "*", ".", "*"],
  ["*", ".", ".", "*", "*", "*", ".", "*"],
  ["*", ".", ".", "*", "*", "*", ".", "*"],
  ["*", "*", ".", "*", "*", "*", "*", "*"],
  ["*", "T", ".", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*"]
]

const lab = document.querySelector('main')
for (const [key, value] of Object.entries(LEVEL1)) {
  var section1 = document.createElement('section')
  section1.setAttribute('class', "section_1")

  let areas = document.createElement('p');
  areas.setAttribute('class', 'areas')
  lab.appendChild(section1)
  section1.appendChild(areas)

  if (value === '.') {
    areas.style.backgroundColor = 'purple'
    areas.id = 'mur'
  }
  if (value === '*') {
    areas.style.backgroundColor = 'black'
    areas.id = 'chemin'
  }
  if (value === 'T') {
    var tresor = document.createElement('img')
    tresor.setAttribute('class', 'tresor')
    tresor.setAttribute('src', 'bonbons.png')
    areas.appendChild(tresor)
  }
  if (value === 'S') {
    var joueur = document.createElement('img')
    joueur.setAttribute('class', 'joueur')
    joueur.setAttribute('src', 'pumpkin.png')
    areas.appendChild(joueur)
  }
}

let index = 16
let areas = document.querySelectorAll('.areas')
const gif = document.querySelector('object')

document.addEventListener('keydown', function (e) {
  switch (e.keyCode) {
    case 37: //left arrow
      if (areas[index - 1].id != 'mur') {
        areas[index -= 1].appendChild(joueur)
      }
      break;
    case 38: //up arrow
      if (areas[index - 15].id != 'mur') {
        areas[index -= 15].appendChild(joueur)
      }
      break;
    case 39: //right arrow
      if (areas[index + 1].id != 'mur') {
        areas[index += 1].appendChild(joueur)
      }
      break;
    case 40: //bottom arrow
      if (areas[index + 15].id != 'mur') {
        areas[index += 15].appendChild(joueur)
      }
      break;
  }
  if (tresor.nextSibling === joueur) {
    alert('you got the treasure !')
    gif.style.display = 'block';
    setTimeout(function () {
      gif.style.display = 'none'
    }, 2000)
  }
})
