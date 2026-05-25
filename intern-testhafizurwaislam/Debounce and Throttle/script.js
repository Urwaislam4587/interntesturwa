
let normalCount = 0;

let throttleCount = 0;

let debounceCount = 0;


let isScrolling = false;

let debounceTimer;



function normalCounter(){

  normalCount++;

  document.querySelector(".normal").innerHTML =
  `Normal Count = ${normalCount}`;

}



function throttleCounter(){

  if(!isScrolling){

    isScrolling = true;

    throttleCount++;

    document.querySelector(".throttle").innerHTML =
    `Throttle Count = ${throttleCount}`;

    setTimeout(()=>{

      isScrolling = false;

    },1000);

  }

}



function debounceCounter(){

  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(()=>{

    debounceCount++;

    document.querySelector(".debounce").innerHTML =
    `Debounce Count = ${debounceCount}`;

  },1000);

}



function handleScroll(){

  normalCounter();

  throttleCounter();

  debounceCounter();

}



window.addEventListener("scroll",handleScroll);
