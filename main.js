let slider = document.getElementById('card');
let left = document.getElementById('left');
let item = 0;

left.addEventListener('click',function(){
    item = item -100
    if(item < -800) {
        item = 0
    }
    slider.style.left = item + 'px'
})