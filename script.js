var theme = document.getElementsByClassName('theme');


if (localStorage.getItem('scheme')) {
  themeChange(localStorage.getItem('scheme'), localStorage.getItem('scheme2'));
}


function themeChange(theme, theme2) {
  document.querySelector(':root').style.setProperty('--primary', theme);
  document.querySelector(':root').style.setProperty('--secondary', theme2);
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
  themeChange('dimgray', 'black');
}

document.getElementById('send').onclick = function() {
  var input = document.querySelector('input');
  var list = document.createElement('li');
  list.innerText = input.value;
  list.className = "sender";
  document.getElementById('messages').appendChild(list);
  input.value="";
}
var count=1;
document.querySelector('h1').onclick=function(){
  
  if(count==1){
    count++;
  document.getElementById('themes').style.display="flex";}
  else{
    count--;
    document.getElementById('themes').style.display="none";
  }
}