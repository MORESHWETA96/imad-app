console.log('Loaded!');
//change the value 
var element = document.getElementById('main-text');
element.innerHTML = 'NEW VALUE';

//change to the madi
var img = document.getElementById('madi');
var marginLeft='';

img.onclick = function(){
    img.style.marginLeft='100px';
};