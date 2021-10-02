document.getElementById('send').onclick = function() {
  var input = document.querySelector('input');
  var list = document.createElement('p');
  list.innerText = input.value;
  list.className = "sender";
  document.getElementById('messages').appendChild(list);
  input.value = "";
}
var a = 1;
document.querySelector('h1').onclick = function() {

  if (a == 1) {
    a = 0;
    document.getElementById('themes').style.display = "flex";
  }
  else {
    a = 1;
    document.getElementById('themes').style.display = "none";
  }
}





// Themes


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