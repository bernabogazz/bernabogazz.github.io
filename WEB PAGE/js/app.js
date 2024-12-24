const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

const slider = document.querySelector('.slider');
const img = document.querySelector('.img');

const imgLenght = document.querySelectorAll('.img').length;
const sliderMax = (imgLenght - 1) * img.offsetWidth;

next.addEventListener('click', () => {
    if(slider.scrollLeft < sliderMax){
        slider.scrollLeft += img.offsetWidth
    } else if(slider.scrollLeft == sliderMax){
        slider.scrollLeft = 0 ;
    }
    console.log(slider.scrollLeft)
})

prev.addEventListener('click', () => {
    if (slider.scrollLeft >0){
          slider.scrollLeft -= img.offsetWidth
    }else if(slider.scrollLeft==0 ){
        slider.scrollLeft = sliderMax
    }
    console.log(slider.scrollLeft)
})

const toggleBtn = document.querySelector('.toggle-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});
