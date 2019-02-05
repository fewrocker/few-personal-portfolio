// document.addEventListener('DOMContentLoaded', function() {

// function l(x) {
//   return console.log(x)
// }

// // Make all elements of array visible or invisible
// // arr --> array of elements
// // act --> string, action to perform, can be 'vis' or 'invis'
// function arrayVisibility(arr,act) {
//   Array.prototype.forEach.call(arr, function(el) {
//     if ( act === 'vis') {
//       el.style.display = ''
//     } else if (act === 'invis') {
//       el.style.display = 'none'
//     }
//   });
// }
// // --------------------------------------------------------

// mobileWidthMax = 768

// // Whole page --> .page-desktop, .page-mobile
// if (document.querySelector('.page-desktop')) {
//   deviceWidth = window.innerWidth;
//   desktopPage = document.querySelector('.page-desktop')
//   mobilePage = document.querySelector('.page-mobile')

//   // On load
//   if (deviceWidth < mobileWidthMax) {
//     desktopPage.style.display = 'none'
//     mobilePage.style.display = ''
//   }

//   if (deviceWidth > mobileWidthMax) {
//     mobilePage.style.display = 'none'
//     desktopPage.style.display = ''
//   }

//   // On resize
//   window.addEventListener ('resize', function(){
//     deviceWidth = window.innerWidth;

//     if (deviceWidth < mobileWidthMax) {
//       desktopPage.style.display = 'none'
//       mobilePage.style.display = ''
//     }

//     if (deviceWidth > mobileWidthMax) {
//       mobilePage.style.display = 'none'
//       desktopPage.style.display = ''
//     }
//   });
// }
// // Elementsonly --> .element-desktop,  .element-mobile
// if ((document.querySelector('.element-mobile')) || (document.querySelector('.element-desktop'))) {
//   deviceWidth = window.innerWidth;
//   desktopElements = document.getElementsByClassName('element-desktop')
//   mobileElements = document.getElementsByClassName('element-mobile')

//   l(mobileElements)

//   // On load
//   if (deviceWidth < mobileWidthMax) {
//     arrayVisibility(mobileElements,'vis')
//     arrayVisibility(desktopElements,'invis')
//   }

//   if (deviceWidth > mobileWidthMax) {
//     arrayVisibility(mobileElements,'invis')
//     arrayVisibility(desktopElements,'vis')
//   }

//   // On resize
//   window.addEventListener ('resize', function(){
//     deviceWidth = window.innerWidth;

//     if (deviceWidth < mobileWidthMax) {
//       arrayVisibility(mobileElements,'vis')
//       arrayVisibility(desktopElements,'invis')
//     }

//     if (deviceWidth > mobileWidthMax) {
//       arrayVisibility(mobileElements,'invis')
//       arrayVisibility(desktopElements,'vis')
//     }
//   });
// }




// });
