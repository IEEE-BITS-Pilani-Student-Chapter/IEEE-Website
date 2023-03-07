const slider= document.querySelector('.slider');
const leftarrow= document.querySelector('.Arrow-left');
const rightarrow= document.querySelector('.Arrow-right');

var index=0;



leftarrow.addEventListener('click',function(){
    index=(index>0)? index-1 :0;
    document.querySelector('.controls .selected').classList.remove('.selected');
    document.querySelector('.controls ul').children[index].classList.add('.selected');
    slider.style.transform= 'translate('+ (index) * -100 + '%)';
     });
rightarrow.addEventListener('click',function(){
    index=(index<3)? index+1: 3;
    document.querySelector('.controls .selected').classList.remove('.selected');
    document.querySelector('.controls ul').children[index].classList.add('.selected');
    slider.style.transform= 'translate('+ (index) * -100 + '%)';
    });

    document.querySelectorAll('.controls li').forEach(function(indicator,ind){
        indicator.addEventListener('click', function(){
        index=ind;
        document.querySelector('.controls .selected').classList.remove('.selected');
        indicator.classList.add('.selected');
        slider.style.transform= 'translate('+ (index) * -100 + '%)';
        });
    });    