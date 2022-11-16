window.addEventListener("DOMContentLoaded", function () {
  
  const loader = document.querySelector(".loader");

    setTimeout(() => {
      loader.style.opacity = 0;
      setTimeout(() => {
        loader.style.display="none";
      }, 1000);
    }, 3000);
 


  const car = document.querySelector(".car"),
  btn = document.querySelector(".btn");
  btn.addEventListener("click", function () {
    let i = 0;
    setInterval(() => {
      if(i==700){
        clearInterval();
      } else{
        i++;
        car.style.left = i + "px";
      }
    }, 10);
  });
});
