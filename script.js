const header = document.querySelector("header");

window.addEventListener("scroll",function(){
  header.classList.toggle("sticky",window.scrollY>80);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navbar");

menu.onclick = () =>{
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
}

window.onscroll = () =>{
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
}

const sr = ScrollReveal({
  origin:'top',
  distance:'85px',
  duration:2500,
  reset:true
})

sr.reveal ('.home-text',{delay:300});
sr.reveal ('.home-img',{delay:400});
sr.reveal ('.container',{delay:400});

sr.reveal ('.about-img',{});
sr.reveal ('.about-txt',{delay:300});

sr.reveal ('.middle-text',{});
sr.reveal ('.row-btn',{delay:300});

sr.reveal ('.review-content,.contact',{delay:200});



document.addEventListener('DOMContentLoaded', () => {
  // Function to toggle visibility and arrow direction
  function toggleMenu(e) {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = e.currentTarget.getAttribute('href').substring(1);
      const targetMenu = document.getElementById(targetId);

      if (targetMenu.classList.contains('hidden')) {
          targetMenu.classList.remove('hidden');
          e.currentTarget.classList.remove('arrow-down');
          e.currentTarget.classList.add('arrow-up');
      } else {
          targetMenu.classList.add('hidden');
          e.currentTarget.classList.remove('arrow-up');
          e.currentTarget.classList.add('arrow-down');
      }
  }

  // Attach click event listener to all explore-menu links
  const exploreMenus = document.querySelectorAll('.explore-menu');
  exploreMenus.forEach(menu => {
      menu.addEventListener('click', toggleMenu);
  });
});

