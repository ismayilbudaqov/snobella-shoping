$(document).ready(function () {
  $("#hero").owlCarousel({
  items: 1,
  loop: true,
  // margin:10,
  autoplay: true,
  autoplayTimeout: 1500,
  autoplayHoverPause: false,
    // autoplayHoverPause: true,
    // smartSpeed: 1050,
    // navText: [
    //   "<span class='nav-main-slider-btn fa fa-chevron-left'></span>",
    //   "<span class='nav-main-slider-btn fa fa-chevron-right'></span>",
    // ],
    // responsive: {
    //   0: {
    //     items: 2,
    //   },
    //   600: {
    //     items: 1,
    //   },
    // },

    
  });








});


let basketItem = document.getElementById("basketItem")




var owl = $("#fc");
owl.owlCarousel({
  items: 4,
  loop: true,
  // margin:10,
  autoplay: true,
  autoplayTimeout: 1500,
  autoplayHoverPause: true,
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

// -----carusel---

// ---animate--text__
var textWrapper = document.querySelector(".ml11 .letters");

textWrapper.innerHTML = textWrapper.textContent.replace(
  /([^\x00-\x80]|\w)/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml11 .line",
    scaleY: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700,
  })
  .add({
    targets: ".ml11 .line",
    translateX: [
      0,
      document.querySelector(".ml11 .letters").getBoundingClientRect().width +
        10,
    ],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100,
  })
  .add({
    targets: ".ml11 .letter",
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=775",
    delay: (el, i) => 34 * (i + 1),
  })
  .add({
    targets: ".ml11",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
// ---animate--text__
const baskett = document.querySelector(".baskett");
const basket = document.querySelector(".basket");


  baskett.addEventListener("click",function(){
     basket.classList.toggle("active")
   
   
  });


// cartToggle();


let modalBtn = document.querySelector('.modal-btn');
let modalBg = document.querySelector('.modal-bg');
let modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click',function(){
  modalBg.classList.add('bg-active')

});
modalClose.addEventListener('click',function(){
  modalBg.classList.remove('bg-active')
})




let sebetArr = [] 
let box = document.getElementById("red")
let carRed = document.getElementById("carRed")
let allItems = []
fetch("https://fakestoreapi.com/products")
.then(res=>res.json())
.then(res=>{
  allItems = res

  console.log(res)
  res.map(index => {
    
    box.innerHTML +=`
          <div class="items">
          <div class="new-box">
          <div class="new">new</div>
          </div>
            <div class="img-box">
            <img class="item-img" src="${index.image}" alt="">
            </div>
            <div  class="in-title">
            <h4>${index.category}</h4>
            </div>
            <div class="rating">
              <h4>${index.price}$</h4>
              <h4>${index.raiting}</h4>
            </div>
            <div class="btn">
              <button onclick="handleSebet(${index.id})">
              sebete elave et
            </button>
            </div>
          </div>
    `

    
    carRed.innerHTML +=`
    
    
    <div class="items">
    <div class="new-box">
    <div class="new">new</div>
    </div>
    <div class="img-box">
    <img class="item-img" src="${index.image}" alt="">
    </div>
      <div  class="in-title">
      <h4>${index.category}</h4>
      </div>
      <div class="rating">
        <h4>${index.price}$</h4>
        <h4>${index.raiting}</h4>
      </div>
      <div class="btn">
        <button onclick="handleSebet(${index.id})">
        sebete elave et
      </button>
      </div>
    </div>
    
    `

  })




  
  
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
  
    autoplay: true,
    autoplayTimeout: 2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})



})

function handleSebet(item){
  let u = allItems.filter(index => index.id == item)
sebetArr.push(...u)
basket.innerHTML =""
basketItem.innerText = sebetArr.length
sebetArr.map(index =>{
basket.innerHTML+=`

<div class="pro-flex">

<div class="poructd">
  <img width="60px" height="60px" src="${index.image}" alt="">
</div>
<div class="price">
<p>${index.price}</p>
</div>
<button id="trash" onclick="handleRemove(${index.id})"><i class="far fa-trash-alt"></i></button>
</div>
`
})
}



function handleRemove(id){
let i =sebetArr.filter(index => index.id !== id)
sebetArr = i
basketItem.innerText = sebetArr.length
basket.innerHTML=""
sebetArr.map(index =>{
  basket.innerHTML+=`
  
  <div class="pro-flex">
  
  <div class="poructd">
    <img width="60px" height="60px" src="${index.image}" alt="">
  </div>

  <div class="price">
  <p>${index.price}</p>
  </div>
  <button id="trash" onclick="handleRemove(${index.id})"><i class="far fa-trash-alt"></i></button>
  </div>
  `
  })
  }
// -----carusel3---




const body = document.querySelector("body");

const icon = document.querySelector("#icon-moon")



icon.addEventListener("click",()=>{

 icon.classList.toggle("dark");
 if(icon.classList.contains("dark")){

  body.style="background-color:black;color:gray;transition:1s";
 } 
 else{
   body.style="background-color:white;color:black;transition:1s";
  
 }


})



$(function(){
  $('.mhn-slide').owlCarousel({
    nav:true,
    loop:true,
    slideBy:'page',
    rewind:false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive:{
      0:{items:1},
      480:{items:2},
      600:{items:3},
      1000:{items:4}
    },
    smartSpeed:70,
    onInitialized:function(e){
      $(e.target).find('img').each(function(){
        if(this.complete){
          $(this).closest('.mhn-inner').find('.loader-circle').hide();
          $(this).closest('.mhn-inner').find('.mhn-img').css('background-image','url('+$(e.target).attr('src')+')');
        }else{
          $(this).bind('load',function(e){
            $(e.target).closest('.mhn-inner').find('.loader-circle').hide();
            $(e.target).closest('.mhn-inner').find('.mhn-img').css('background-image','url('+$(e.target).attr('src')+')');
          });
        }
      });
    },
    navText:['<svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>','<svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>']
  });
});