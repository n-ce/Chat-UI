var theme = document.getElementsByClassName('theme');


function themeChange(theme) {
  document.querySelector(':root').style.setProperty('--primary', theme);

}


theme[0].onclick = function() {
  themeChange('orange');
}
theme[1].onclick = function() {
  themeChange('lightblue');
}
theme[2].onclick = function() {
  themeChange('seagreen');
}