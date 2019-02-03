document.addEventListener('DOMContentLoaded', function() {

function l(x) {
  return console.log(x)
}

// Fade in animation
// El = element in page
// Time = animation time in ms
function fadein(el,time) {

  opacity = 0

  // 100 tics until full animation
  opacitytic = 0.01
  timetic = time * opacitytic

  var animation = setInterval(function(){
    opacity += 0.01
    el.style.opacity = opacity

    if (el.style.opacity > 1) {
      clearInterval(animation);
    }
  }, timetic);
}

function slidefromleft(array,time,delay,posini) {
  var i;
  pos = new Array(array.length).fill(0);

  for (i = 0; i < array.length; i++) {
    pos[i] = posini
  }

  arrayIni = 0
  arrayEnd = 0

  // 100 tics until full animation
  tics = 100
  postic = -posini / tics
  timetic = time / tics
  ticCount = 0
  ticAdd = tics * (delay / time)

  var animation = setInterval(function(){
    ticCount += 1

    for (i = 0; i <= arrayEnd; i++) {
      pos[i] += postic
    }

    for (i = arrayIni; i < arrayEnd; i++) {
      array[i].style.right = pos[i] + 'px'

      if (pos[i] === 0) {
        arrayIni += 1
      }
    }

    if (ticCount === ticAdd) {
      arrayEnd += 1
      ticCount = 0
    }

    if (arrayEnd === array.length + 1) {
      clearInterval(animation);
    }

  }, timetic);
}

// Page title animation
bannerTitle = document.getElementsByClassName('title-banner-title')[0]

if (bannerTitle) {
  bannerTitle.style.opacity = 0
  fadein(bannerTitle,200)
}

// Slide in accordeon projects
projects = document.getElementsByClassName('accordeon-project')

if (projects) {
  numberOfProjects = projects.length

  Array.prototype.forEach.call(projects, function(project) {
    project.style.right = '2000px'
  });

  slidefromleft(projects,200,100,2000)
}

















});
