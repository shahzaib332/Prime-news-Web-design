//2nd slider
let sliderImages = document.querySelectorAll(".imageslider"),
arrowLeft = document.querySelector(".leftarrow"),
arrowRight = document.querySelector(".rightarrow"),
current = 0;

// Clear all images
function reset() {
for (let i = 0; i < sliderImages.length; i++) {
	sliderImages[i].style.display = "none";
}
}

// Initial slide
function startSlide() {
reset();
sliderImages[0].style.display = "block";
}

// Show previous
function slideLeft() {
reset();
sliderImages[current - 1].style.display = "block";
current--;
}

// Show next
function slideRight() {
reset();
sliderImages[current + 1].style.display = "block";
current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function () {
if (current === 0) {
	current = sliderImages.length;
}
slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function () {
if (current === sliderImages.length - 1) {
	current = -1;
}
slideRight();
});

startSlide();

//3rd slider



const slider2=document.querySelectorAll('.readsliderimage');
const nxtBtn=document.querySelectorAll('.rightangle');
const prevBtn=document.querySelectorAll('.leftangle');

slider2.forEach((item,i)=>{
  let containerDimensions=item.getBoundingClientRect();
  let containerWidth=containerDimensions.width;

  nxtBtn[i].addEventListener('click',()=>{
    item.scrollLeft +=containerWidth;
  })

  prevBtn[i].addEventListener('click',()=>{
    item.scrollLeft -=containerWidth;
  })
})






//3rd sliderends here




function toggle(){
    document.getElementById('sidenav').style.display= "block";
   var element= document.querySelector('.opacity');
   element.style.opacity = "0.7";

   var element1= document.querySelector('.opacity1');
   element1.style.opacity = "0.7";

 

//    var element2= document.getElementById('sidenav');
//    element2.style.opacity = "1";
   
  


}
function toggleclose(){
    document.getElementById('sidenav').style.display= "none";
    var element= document.querySelector('.opacity');
    element.style.opacity = "1";

    var element2= document.querySelector('.opacity1');
    element2.style.opacity = "1";

}

//sidenav menu drop
function myFunction() {
    var x = document.getElementById("business");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function sportsmenu() {
    var x = document.getElementById("sports");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function thememenu() {
    var x = document.getElementById("theme");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }






//nav bar
$(window).scroll(function(){
  if($(this).scrollTop() > 100){
      $('.navbar').addClass('sticky')
  } else{
      $('.nav').removeClass('sticky')
  }
});





//slider
const product = [...document.querySelectorAll('.readsliderimage')];
const nextBtn = [...document.querySelectorAll('.rightangle')];
const preBtn = [...document.querySelectorAll('.leftangle')];
let product_page=Math.ceil(product.length/4);


let moveper=25.34;
let maxmove=25.34;

let l =0;

//mobile view
let mobile_view=window.matchMedia("(max-width:768px)");
if(mobile_view.matches){
  moveper=50.36;
  maxmove=504;
}
let right_move=()=>{
  l=1+moveper;
  if(product==1){l=0}
  for(const i of product)
  {
    if(l>maxmove){l=l-moveper;}
    i.style.left='-'+l+'%'
  }
};
nextBtn[1].onclick=()=>{right_move();}

// productContainers.forEach((item, i) => {
//     let containerDimensions = item.getBoundingClientRect();
//     let containerWidth = containerDimensions.width;

//     nextBtn[i].addEventListener('click', () => {
//         item.scrollLeft += containerWidth;
//     })

//     preBtn[i].addEventListener('click', () => {
//         item.scrollLeft -= containerWidth;
//     })
// })
//ends here

//slider
//products slider starts here
// const slider= document.querySelector('.topslider');
// const carousel= document.querySelector('.corosal');



// const prev=document.querySelector('.rightbtn');
// const next=document.querySelector('.leftbtn');
// let direction;

// next.addEventListener('click',function(){
//     slider.appendChild(slider.firstElementChild);
//     slider.style.transform='translate(-20%)';
    
//    direction = -1;
//   carousel.style.justifyContent = 'flex-start';

    

    
// });
// prev.addEventListener('click', function() {
  
//     slider.appendChild(slider.firstElementChild);
//   direction=1;
   
//   slider.style.transform = 'translate(30%)';  
  
 
  
// });

// slider.addEventListener('transitionend', function() {
//   // get the last element and append it to the front
  
//  // if (direction === 1) {
//     //slider.prepend(slider.lastElementChild);
//   //} else {
//     //slider.appendChild(slider.firstElementChild);
//   //}
  
//   slider.style.transition = 'none';
//   //slider.style.transform = 'translate(0)';
//   setTimeout(() => {
//     slider.style.transition = 'all 0.8s';
//   })
// }, false);


// most view menu
function openpopular(){
  document.getElementById('list2').style.display= "block";
  document.getElementById('list').style.display= "none";
  var mv=document.getElementById('mostview');
  mv.style.backgroundColor="#f4f5f5";
  var mp=document.getElementById('mostpopular');
  mp.style.backgroundColor="#2857bd";
  mp.style.color="white";
  mv.style.color="#aaa";
  

}

function openview(){
  document.getElementById('list').style.display= "block";
  document.getElementById('list2').style.display= "none";
  document.getElementById('mostview').style.backgroundColor="#2857bd";
  document.getElementById('mostpopular').style.backgroundColor="#f4f5f5";
  document.getElementById('mostview').style.color="white";
  document.getElementById('mostpopular').style.color="#aaa";
  document.getElementById('mostpopular').style.color.hover="black";
 
  

}

// var mv=document.getElementById('mostview');
// mv.style.backgroundColor="#f4f5f5";
// var mp=document.getElementById('mostpopular');
// mp.style.backgroundColor="#f4f5f5";
//#aaa

