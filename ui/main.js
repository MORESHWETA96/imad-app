console.log('Loaded!');
//change the value 
var element = document.getElementById('main-text');
element.innerHTML = 'NEW VALUE';

//change to the madi
var img = document.getElementById('madi');
img.onClick = function(){
    img.style.marginleft='100px';
};