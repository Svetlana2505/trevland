let slider = document.getElementById('slider');
let left = document.getElementById('left');
let rignt = document.getElementById('rignt');
let itemleft = 0;
let itemrignt = 0;

left.addEventListener('click',function(){
    itemleft = itemleft -325
    if(itemleft < -1300) {
        itemleft = 0
    }
    slider.style.left = itemleft + 'px'
});

rignt.addEventListener('click',function(){
    itemrignt = itemrignt +325
    if(itemrignt > 0) {
        itemrignt = -1300
    }
    slider.style.left = itemrignt + 'px'
});