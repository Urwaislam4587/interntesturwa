let normalCount = 0;
let throttleCount = 0;
let debounceCount = 0;
let isScrolling = false;
let flag;

function normalCounter(){

  normalCount++;

  document.querySelector(".normal").innerHTML =
  `Normalcount = ${normalCount}`;

}



function throttleCounter(){

  if(!isScrolling){

    isScrolling = true;

    throttleCount++;

    document.querySelector(".throttle").innerHTML =
    `Throttlecount = ${throttleCount}`;

    setTimeout(()=>{

      isScrolling = false;

    },1000);

  }

}



function debounceCounter(){

  clearTimeout(flag);

  flag = setTimeout(()=>{

    debounceCount++;

    document.querySelector(".debounce").innerHTML =
    `Debouncecount = ${debounceCount}`;

  },1000);

}

function forall(){

  normalCounter();

  throttleCounter();

  debounceCounter();

}
window.addEventListener("scroll",forall);
