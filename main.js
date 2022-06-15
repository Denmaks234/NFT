const burgerBtn = document.querySelector('.burger-menu')
const menu = document.querySelector('.menu__active')
const closeBtn= document.querySelector('.close-btn')
const popularBtn= document.querySelector('.popular__btn-group')
const peopleBtn= document.querySelector('.people__btn-group')
const sellerBtn= document.querySelector('.seller__btn-group')
const sellerItems= document.querySelector('.seller__items')
const sliderLine= document.querySelector('.slider__Line')
const select= document.querySelectorAll('.select1')
const sliderLine1= document.querySelector('.slider__Line1')
let offset=-733
let offset1=-690
burgerBtn.addEventListener('click',function(){
    menu.classList.add('active')
})
closeBtn.addEventListener('click',function(){
    menu.classList.remove('active')
})
popularBtn.addEventListener('click',function(){
    offset+=345
    if(offset>-38){
        offset=-733
    }
    sliderLine.style.right=offset+"px"
})
peopleBtn.addEventListener('click',function(){
    offset1+=330
    if(offset1>-22){
        offset1=-690
    }
    sliderLine1.style.right=offset1+"px"
})
sellerBtn.addEventListener('click',function(){
   sellerItems.classList.toggle('active')
})
select.forEach(item=>(item.addEventListener("click",function(){
    
  if(item.getAttribute('src')=="img/select1.svg"){
    item.setAttribute('src',"img/close.png")
  }
  else{
    item.setAttribute('src',"img/select1.svg")
  }
    const parent=item.parentNode;
    parent.parentNode.classList.toggle('active')
})))