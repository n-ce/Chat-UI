var input = document.querySelector('input');
var c = 1;
var vol = document.querySelector('.fa-volume-up');
vol.onclick = function() {
  c++;
  vol.classList.toggle("off");
}

function send() {
  if (input.value != "") {

    if (c % 2 == 1) {
      new Audio('send.ogg').play();
    }
    var send = document.createElement('p');
    send.innerText = input.value;
    send.className = "sender";
    document.getElementById('messages').appendChild(send);
    input.value = "";
  }
}
document.onkeypress = function() {
  if ("".key = 13) {
    send();
  }
}


// Themes

var a = 1;
document.querySelector('h1').onclick = function() {

  if (a == 1) {
    a = 0;
    document.querySelector('h1').style.color="white";
    document.getElementById('themes').style.display = "flex";
  }
  else {
    a = 1;
    document.querySelector('h1').style.color="transparent";
    document.getElementById('themes').style.display = "none";
  }
}


var theme = document.getElementsByClassName('theme');


if (localStorage.getItem('scheme')) {
  themeChange(localStorage.getItem('scheme'), localStorage.getItem('scheme2'));
}


function themeChange(theme, theme2) {
  document.querySelector(':root').style.setProperty('--primary', theme);
  document.querySelector(':root').style.setProperty('--secondary', theme2);
  document.querySelector('meta[name="theme-color"]').setAttribute("content", theme)
  localStorage.setItem('scheme', theme);
  localStorage.setItem('scheme2', theme2);
}


theme[0].onclick = function() {
  themeChange('orange', 'darkorange');
}
theme[1].onclick = function() {
  themeChange('lightskyblue', 'deepskyblue');
}
theme[2].onclick = function() {
  themeChange('mediumseagreen', 'seagreen');
}
theme[3].onclick = function() {
  themeChange('mediumpurple', 'rebeccapurple');
}
theme[4].onclick = function() {
  themeChange('black', 'black');
}

theme[5].onclick = function() {
  themeChange('#076', '#065');
  localStorage.clear();
}