document.addEventListener('DOMContentLoaded', function() {

function l(x) {
  return console.log(x)
}

// Get all code snippets on page
snippets = document.getElementsByClassName('gist')
// Get all the expand buttons that can be clicked
expandSnippets = document.getElementsByClassName('btn-expandcode')
// Get all the expand buttons that start hidden
expandSnippets2 = document.getElementsByClassName('btn-expandcode-bottom')

Array.prototype.forEach.call(snippets, snp => {
  snp.style.display = "none"
});

Array.prototype.forEach.call(expandSnippets2, snp => {
  snp.style.display = "none"
});

// Click listeners and action
Array.prototype.forEach.call(expandSnippets, btn => {
  btn.addEventListener('click', function() {
    // Get parent snippet div
    snippetDiv = btn.parentNode

    // Get code snippet
    snippet = snippetDiv.querySelector('.gist')

    // Switch visibility and button texts
    // If not visible, make snippet visible and add another button in the bottom
    // If visible, make snippet not visible and remove button from the bottom
    if (snippet.style.display === 'none') {
      snippet.style.display = ''

      // Change button texts
      buttons = snippetDiv.getElementsByClassName('btn-expandcode')
      Array.prototype.forEach.call(buttons, btn => {
        btn.innerHTML = "Click to hide code"
        if (btn.classList.contains('btn-expandcode-bottom')) {
          btn.style.display = ''
        }
      });
    } else {
      snippet.style.display = 'none'

      // Change button texts
      buttons = snippetDiv.getElementsByClassName('btn-expandcode')
      Array.prototype.forEach.call(buttons, btn => {
        btn.innerHTML = "Click to expand code"
        if (btn.classList.contains('btn-expandcode-bottom')) {
          btn.style.display = 'none'
        }
      });
    }





  });
});





});
