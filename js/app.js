var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 
  /* Do things after DOM has fully loaded */

  const main = document.querySelector('.rbg-header');
  const icons = document.querySelectorAll('.icon');
  
  var hiddenState = "-hidden", nav_dark = "page-header";
  let ttlapps = 0;
  const apps = [], fullNameList = [], years_every = [];
  
  var threshold = 30, 
        position = 0, 
        lastScroll = 0, 
        n_event = 0;
  
  window.addEventListener("scroll", function () {
      var position = window.scrollY || document.documentElement.scrollTop;
      
      if (position > threshold && position > lastScroll) {
        // console.log("Hello!!!");
        main.classList.add(hiddenState);
      } else {
        main.classList.remove(hiddenState);
        if (window.scrollY > 4) {
          main.classList.add(nav_dark);
        } else {
          main.classList.remove(nav_dark);
        }
      }
  
      lastScroll = position <= 0 ? 0 : position;
  
    });
  
  
  icons.forEach (icon => {  
    icon.addEventListener('click', (event) => {
      icon.classList.toggle("open");
    });
  });
  
  const p = document.querySelector('.rbg--griot-text p:first-child');
  
  let val = getComputedStyle(p, 'font-size');
  
  console.log(val);

});
