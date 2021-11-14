let slider = document.getElementById('slider');
let left = document.getElementById('left');
let rignt = document.getElementById('rignt');
let item = document.getElementById('item');

let itemleft = 0;
let itemline = 0;

left.addEventListener('click',function(){
    itemleft = itemleft -325
    itemline = itemline + 46;
    if(itemleft < -1300) {
        itemleft = -1300
        itemline = 180
    }
    slider.style.left = itemleft + 'px'
    item.style.left = itemline + 'px'
});

rignt.addEventListener('click',function(){
    itemleft = itemleft + 325
    itemline = itemline - 46;
    if(itemleft > 0) {
        itemleft = 0
        itemline = 0
    }
    slider.style.left = itemleft + 'px'
    item.style.left = itemline + 'px'
});