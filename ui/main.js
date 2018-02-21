console.log('Loaded!');
//change the value 
var element = document.getElementById('main-text');
element.innerHTML = 'NEW VALUE';

//change to the madi
var elementimg = document.getElementById('madi');
elementimg.onClick = function()
{
    elementimg.style.marginleft='100px';
};