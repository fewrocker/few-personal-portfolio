document.addEventListener('DOMContentLoaded', function() {

function l(x) {
  return console.log(x)
}

// Get all necessary elements
accordeonHeaders = document.getElementsByClassName('accordeon-group')
accordeonContents = document.getElementsByClassName('smenu')
accordeonCarets = document.getElementsByClassName('accordeon-dropdown-carets')

// All contents start closed
Array.prototype.forEach.call(accordeonContents, content => {
  content.style.maxHeight = '0em'
});

// When accordeon header is clicked, close all others and open the contents of the clicked
// If clicked header has contents already open, close them and leave no contents open (initial state)
Array.prototype.forEach.call(accordeonHeaders, header => {
  // Event listener hears click on accordeon header
  header.addEventListener('click', function() {

    // Define index of header clicked
    headerIndex = parseInt(header.classList[0].match(/\d+/g)[0],10)
    l(headerIndex)

    // --------------------------------------------------------
    // If clicked header has content closed, close all others and open the clicked
    // If clicked header is open, close all contents
    // Also, modify the carets accordingly
    // --------------------------------------------------------

    // Boolean to check if clicked header already has or hasnt open contents
    // Gives true if header content is closed
    contentClosed = accordeonContents[headerIndex].style.maxHeight === '0em'

    // Close all contents and modify all carets to closed
    Array.prototype.forEach.call(accordeonCarets, caret => {
      caret.classList = 'fas fa-caret-down accordeon-dropdown-carets'
    });
    Array.prototype.forEach.call(accordeonContents, content => {
      content.style.maxHeight = '0em'
    });

    // If the clicked header content was closed, then we need to open them
    // If it was open, nothing needs to be done and all contents will be closed
    if (contentClosed) {
      accordeonContents[headerIndex].style.maxHeight = '1000em'
      accordeonCarets[headerIndex].classList = 'fas fa-caret-up accordeon-dropdown-carets'
    }
  });
});

});
