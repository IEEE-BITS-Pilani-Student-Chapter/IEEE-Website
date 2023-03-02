const slider= document.querySelector('.slider');
const leftarrow= document.querySelector('.Arrow-left');
const rightarrow= document.querySelector('.Arrow-right');

var index=0;
leftarrow.addEventListener('click',function(){
    index=(index>0)? index-1 :0;
slider.style.transform= 'translate('+ (index) * -100 + '%)';
});
rightarrow.addEventListener('click',function(){
    index=(index<3)? index+1: 3;
    slider.style.transform= 'translate('+ (index) * -100 + '%)';
    });