var theme = document.getElementsByClassName('theme');


function themeChange(theme,theme2) {
  document.querySelector(':root').style.setProperty('--primary', theme);
  document.querySelector(':root').style.setProperty('--primary2', theme2);

}


theme[0].onclick = function() {
  themeChange('orange','orangered');
}
theme[1].onclick = function() {
  themeChange('lightblue','cyan');
}
theme[2].onclick = function() {
  themeChange('lightseagreen','seagreen');
}

document.getElementById('send').onclick=function(){
  var list = document.createElement('li');
  list.innerText=document.querySelector('input').value;
  list.className="sender";
  document.getElementById('messages').appendChild(list);
}