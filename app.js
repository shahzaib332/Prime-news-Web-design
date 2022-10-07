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

