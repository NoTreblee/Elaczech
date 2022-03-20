mybutton = document.getElementById('myBtn');
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function openNav() {
  document.getElementById('mySidenav').style.width = '250px';
  document.getElementById('nav').style.marginLeft = '250px';
}

function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
  document.getElementById('nav').style.marginLeft = '0';
}
