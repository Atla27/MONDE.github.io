document.addEventListener("DOMContentLoaded", function () {
  const navBar = document.querySelector(".navBar");
  const menuBar = document.querySelector(".menuBar");

  let lastScrollTop = 0; 
  
  window.addEventListener("scroll", function () {
      let currentScroll = window.scrollY || document.documentElement.scrollTop;

      
      if (currentScroll > lastScrollTop) {
          navBar.style.top = "-100px"; 
          menuBar.classList.remove("active"); 
      } else {
          navBar.style.top = "0"; 
      }
      lastScrollTop = currentScroll;
  });

  
  document.querySelectorAll(".menuBar ul li a").forEach(item => {
      item.addEventListener("click", () => {
          menuBar.classList.remove("active"); 
      });
  });

  
  document.addEventListener("click", function (event) {
      if (!menuBar.contains(event.target) && !event.target.closest(".sec1__menuIcon")) {
          menuBar.classList.remove("active"); 
      }
  });
});
