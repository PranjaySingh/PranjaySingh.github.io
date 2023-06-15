//////////////////////////////
// set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//////////////////////////////
//make navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//////////////////////////////
//Close Navigation

document.addEventListener("DOMContentLoaded", function () {
  var mainNavLinks = document.getElementsByClassName("main-nav-link");
  for (var i = 0; i < mainNavLinks.length; i++) {
    mainNavLinks[i].addEventListener("click", function () {
      document.querySelector(".header").classList.toggle("nav-open");
    });
  }
});

// const mainNavLinkEl = document.querySelector(".main-nav-link");
// mainNavLinkEl.addEventListener("click", function () {
//   document.querySelector(".header").classList.toggle("nav-open");
// });

//////////////////////////////
//make header sticky
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    } else if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
