document.addEventListener('DOMContentLoaded', function() {

function l(x) {
  return console.log(x)
}

// On mobile, project details are shown differently
// On desktop, they are shown via css effects on hover
// On mobile, user will click on project card once to show details
// Then click again to open link

// Support functions

// Get card and make opacity changes on click
// Make the description of the project appear
// Make the project image disappear
function opacityChanges(card) {
  cardDescription = card.getElementsByClassName('projects-description')[0]
  cardImage = card.getElementsByClassName('projects-image')[0]

  cardDescription.style.opacity = 1
  cardImage.style.opacity = 0.1
}

// Undo opacity changes of card
// Opposite of previous function
function opacityCancel(card) {
  cardDescription = card.getElementsByClassName('projects-description')[0]
  cardImage = card.getElementsByClassName('projects-image')[0]

  cardDescription.style.opacity = 0
  cardImage.style.opacity = 1
}

// Get all cards
projectCards = document.getElementsByClassName('projects-card')

projectDestinations = []

projectLinks = document.getElementsByClassName('projects-link')
// Get the projects link destinations
Array.prototype.forEach.call(projectLinks, link => {
  projectDestinations.push(link.href)
});

// On card click
// First click: make opacity changes, add active class
// Second click: go to link destination
Array.prototype.forEach.call(projectCards, card => {
  card.addEventListener('click', function() {
    // Get index of card
    cardIndex = parseInt(card.classList[0].match(/\d+/g)[0],10)

    if (card.classList.contains('card-active') === false) {
      // Undo changes from all cards
      Array.prototype.forEach.call(projectCards, card2 => {
        opacityCancel(card2)
        card2.classList.remove('card-active')
      });

      // Do changes for clicked card
      opacityChanges(card)
      card.classList.add('card-active')

    } else {
      window.open(projectDestinations[cardIndex], '_blank');
    }
  });
});





});
