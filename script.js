mybutton = document.getElementById('myBtn');
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
let mySidenav = document.getElementById('mySidenav');
let header = document.getElementById('header');

document.getElementById('navButton').addEventListener('click', () => {
  navOpen();
  headerMargin();
});
function headerMargin() {
  header.classList.toggle('headertop');
}
function navOpen() {
  mySidenav.classList.toggle('opened');
}
