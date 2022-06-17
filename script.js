const main = document.querySelector('main')
const gif = document.querySelector('.illusion')
const message = document.querySelector('.win')

const LEVEL1 =[
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
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
  '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
  '.', "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", '.',
  '.', "*", ".", ".", "S", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*", '.',
  '.', "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", ".", "*", '.',
  '.', "*", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*", '.',
  '.', "*", ".", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", '.',
  '.', "*", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "T", '.',
  '.', "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", '.',
  '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'

]
const LEVEL3 = [
  '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',
  '.', "*", "*", "*", "*", "*", "*", "*", "*", '.',
  '.', "*", "*", "*", "*", "S", "*", "*", "*", '.',
  '.', "*", "*", "*", "*", ".", "*", "*", "*", '.',
  '.', "*", "*", "*", "*", ".", "*", "*", "*", '.',
  '.', "*", "*", "*", "*", ".", "*", "*", "*", '.',
  '.', "*", ".", ".", ".", ".", ".", ".", "*", '.',
  '.', "*", ".", "*", "*", "*", "*", ".", "*", '.',
  '.', "*", ".", ".", "*", "*", "*", ".", "*", '.',
  '.', "*", ".", ".", "*", "*", "*", ".", "*", '.',
  '.', "*", "*", ".", "*", "*", "*", "*", "*", '.',
  '.', "*", "T", ".", "*", "*", "*", "*", "*", '.',
  '.', "*", "*", "*", "*", "*", "*", "*", "*", '.',
  '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'
]
const levels = [LEVEL1, LEVEL2, LEVEL3]

var index_level = 0

for (let i = 0; i < 3; i++) {
  var sections = document.createElement('section')
  sections.id = `level${i}`
  main.append(sections)
  for (const [key, value] of Object.entries(levels[i])) {
    const areas = document.createElement('p');
    areas.setAttribute('class', 'areas')
    sections.append(areas)
    if (value === '.') {
      areas.style.backgroundColor = '#36213E'
      areas.id = 'mur'
    }
    if (value === '*') {
      areas.style.backgroundColor = '#554971'
      areas.id = 'chemin'
    }
    if (value === 'T') {
      areas.style.backgroundColor = '#554971'
      var tresor = document.createElement('img')
      tresor.setAttribute('class', 'tresor')
      tresor.setAttribute('src', 'bonbons.png')
      areas.append(tresor)
    }
    if (value === 'S') {
      areas.style.backgroundColor = '#554971'
      var joueur = document.createElement('img')
      joueur.setAttribute('class', 'joueur')
      joueur.setAttribute('src', 'pumpkin.png')
      areas.append(joueur)
    }
  }
}

const level_0 = document.getElementById('level0')
const level_1= document.getElementById('level1')
const level_2 = document.getElementById('level2')

level_1.style.display = "none"
level_2.style.display = "none"

var areas = document.querySelectorAll('#level0 > .areas')
var joueur = document.querySelector('#level0 .joueur')
var tresor = document.querySelector('#level0 .tresor')

function findIndex(level, elem) {
  return level.indexOf(elem)
}
var index = findIndex(LEVEL1, "S")
var height = 15

document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
      case 37: //left arrow
        if (areas[index - 1].id != 'mur') {
          areas[index -= 1].append(joueur)
        }
        break;
      case 38: //up arrow
        if (areas[index - height].id != 'mur') {
          areas[index -= height].append(joueur)
        }
        break;
      case 39: //right arrow
        if (areas[index + 1].id != 'mur') {
          areas[index += 1].append(joueur)
        }
        break;
      case 40: //bottom arrow
        if (areas[index + height].id != 'mur') {
          areas[index += height].append(joueur)
        }
        break;
    }
    if (tresor.nextSibling == joueur) {
        win()
    }
})

function win() {
    gif.style.display = "block"
    message.style.display = "block"
    var timeout = setTimeout(function () {
      gif.style.display = "none"
      message.style.display = "none"
    }, 2000)

    if (index_level == 0) {
      index_level = 1
      index = findIndex(LEVEL2, "S")
      height = 24
      areas = document.querySelectorAll('#level1 > .areas')
      joueur = document.querySelector('#level1 .joueur')
      tresor = document.querySelector('#level1 .tresor')
      level_0.style.display = "none"
      level_1.style.display = "flex"
      return
    }
    if (index_level == 1) {
      index = findIndex(LEVEL3, "S")
      height = 10
      index_level = 2
      areas = document.querySelectorAll('#level2 > .areas')
      joueur = document.querySelector('#level2 .joueur')
      tresor = document.querySelector('#level2 .tresor')
      level_1.style.display = "none"
      level_2.style.display = "flex"
      return
    }
    if (index_level == 2) {
      clearTimeout(timeout)
      gif.style.display = "block"
      message.style.display = "block"
    }
}