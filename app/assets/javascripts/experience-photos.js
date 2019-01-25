document.addEventListener('DOMContentLoaded', function() {

function l(x) {
  return console.log(x)
}

// Get all elements needed for feature
experiencePictures = document.getElementsByClassName('experience-images')
experiencePicture = document.getElementsByClassName('experience-image')
experienceRightArrow = document.getElementsByClassName('right-carousel-control')
experienceLeftArrow = document.getElementsByClassName('left-carousel-control')

// Count how many pictures are in each slide-show for navigation needs
experiencePictureCount = []
Array.prototype.forEach.call(experiencePictures, function(pic) {
  experiencePictureCount.push(pic.childElementCount)
});

// Start hiding the display of all pictures which aren't the first of their groups
// Add class 'active-image' to all the first pictures
// The picture with 'active-image' class will be pivotal for the code to find
// which pic is currently showing and which should be the next
Array.prototype.forEach.call(experiencePicture, function(pic) {
  if (pic.classList[0].match(/\d+/g)[1] !== '0' ) {
    pic.style.display = 'none'
  } else {
    pic.classList.add('active-image')
  }
});

// Click on right arrow
Array.prototype.forEach.call(experienceRightArrow, arrow => {
  arrow.addEventListener('click', function() {
    // Get which modal is being navigated
    modalIndex = parseInt(arrow.classList[0].match(/\d+/g)[0],10)

    // Get index of active pic of the modal being navigated, and save the active pic
    Array.prototype.forEach.call(experiencePicture, function(pic) {
      if (pic.classList.contains('active-image') && parseInt(pic.classList[0].match(/\d+/g)[0],10) === modalIndex) {
        indexActivePic = parseInt(pic.classList[0].match(/\d+/g)[1],10)
        activePic = pic
      }
    });

    // Get number of max pics and understand which is the last pic
    indexLastPic = experiencePictureCount[modalIndex] - 1

    // Get index of target pic, ie., the next pic which will be shown when arrow is clicked
    // Since this is a right arrow:
    // If in last pic, cycle back to first
    // If not last pic, target pic is the next pic
    if (indexLastPic === indexActivePic) {
      indexTargetPic = 0
    } else {
      indexTargetPic = indexActivePic + 1
    }

    targetPic = document.querySelector(`.experience-image-${modalIndex}-${indexTargetPic}`)

    // Make display switch from active to target; make classlist changes
    activePic.classList.remove('active-image')
    activePic.style.display = 'none'
    targetPic.classList.add('active-image')
    targetPic.style.display = ''
  });
});

// Click on left arrow
Array.prototype.forEach.call(experienceLeftArrow, arrow => {
  arrow.addEventListener('click', function() {
    // Get which modal is being navigated
    modalIndex = parseInt(arrow.classList[0].match(/\d+/g)[0],10)

    // Get index of active pic of the modal being navigated, and save the active pic
    Array.prototype.forEach.call(experiencePicture, function(pic) {
      if (pic.classList.contains('active-image') && parseInt(pic.classList[0].match(/\d+/g)[0],10) === modalIndex) {
        indexActivePic = parseInt(pic.classList[0].match(/\d+/g)[1],10)
        activePic = pic
      }
    });

    // Get number of max pics and understand which is the last pic
    // (so the right arrow when last pic is active goes to first pic)
    indexLastPic = experiencePictureCount[modalIndex] - 1

    // Get index of target pic
    // Since this is a left arrow:
    // If in first pic, cycle back to last
    // If not last pic, target pic is previous pic
    if (indexActivePic === 0) {
      indexTargetPic = indexLastPic
    } else {
      indexTargetPic = indexActivePic - 1
    }

    targetPic = document.querySelector(`.experience-image-${modalIndex}-${indexTargetPic}`)

    // Make display switch from active to target; make classlist changes
    activePic.classList.remove('active-image')
    activePic.style.display = 'none'
    targetPic.classList.add('active-image')
    targetPic.style.display = ''
  });
});
















});
