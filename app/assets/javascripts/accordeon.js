document.addEventListener('DOMContentLoaded', function() {

function l(x) {
  return console.log(x)
}

accordeonHeaders = document.getElementsByClassName('accordeon-group')
accordeonContents = document.getElementsByClassName('smenu')
accordeonCarets = document.getElementsByClassName('accordeon-dropdown-carets')

// All contents start closed
Array.prototype.forEach.call(accordeonContents, content => {
  content.style.maxHeight = '0em'
});

// When accordeon header is clicked, close all others and open the contents of the clicked
Array.prototype.forEach.call(accordeonHeaders, header => {
  // Event listener hears click on accordeon header
  header.addEventListener('click', function() {

    // Define index of header selected
    headerIndex = parseInt(header.classList[1].match(/\d+/g)[0],10)

    // If clicked header has content closed, close all others and open the clicked
    // If clicked header is open, close all contents
    // Also, modify the carets accordingly
    contentClosed = accordeonContents[headerIndex].style.maxHeight === '0em'
    Array.prototype.forEach.call(accordeonCarets, caret => {
      caret.classList = 'fas fa-caret-down accordeon-dropdown-carets'
    });
    Array.prototype.forEach.call(accordeonContents, content => {
      content.style.maxHeight = '0em'
    });
    if (contentClosed) {
      accordeonContents[headerIndex].style.maxHeight = '100em'
      accordeonCarets[headerIndex].classList = 'fas fa-caret-up accordeon-dropdown-carets'
    }
  });
});

});
