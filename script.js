mybutton = document.getElementById('myBtn');
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function openNav() {
  document.getElementById('mySidenav').style.height = '230px';
  document.getElementById('header').style.marginTop = '230px';
}
function closeNav() {
  document.getElementById('mySidenav').style.height = '0';
  document.getElementById('header').style.marginTop = '0';
}
