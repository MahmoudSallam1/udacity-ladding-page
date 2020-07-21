const startingTime = performance.now();

// ===================Start of Defining global variables========================
const unorderedList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const navBarToggle = document.getElementById("js-navbar-toggle");
// ===================End of Defining global variables==========================

// ===================Start of Building dynamic Navigation Bar===================
const buildNavBar = () => {
  let navBullets = "";
  sections.forEach((section) => {
    const sectionID = section.getAttribute("id");
    const sectionValue = section.getAttribute("data-nav");
    navBullets += `<li> <a class="menu__link" href="#${sectionID}">${sectionValue}</a> </li>`;
  });
  unorderedList.innerHTML = navBullets;
};
buildNavBar();
// ===================End of Building dynamic Navigation Bar====================

// ===================Start of Toggling menu====================================
navBarToggle.addEventListener("click", function () {
  unorderedList.classList.toggle("active-toggle");
});
// ===================Start of Toggling menu====================================

// ========Start of adding active class to the section and menu item near top of view port====
const checkViewPort = () => {
  sections.forEach((section) => {
    let bounding = section.getBoundingClientRect();
    let sectionID = section.getAttribute("id");
    sectionID = sectionID.slice(7, 8) - 1;
    let activeItem = unorderedList.childNodes[sectionID];
    // console.log(bounding);
    if (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.right <= window.innerWidth &&
      bounding.bottom <= window.innerHeight
    ) {
      // console.log("Section is in the viewport!");
      section.classList.add("your-active-class");
      activeItem.classList.add("active-item");
      section.style.cursor = "cell";
    } else {
      // console.log("Section is NOT in the viewport!");
      section.classList.remove("your-active-class");
      activeItem.classList.remove("active-item");
      section.style.cursor = "default";
    }
  });
};
window.addEventListener("scroll", checkViewPort);
// ========End of adding active class to the section and menu item near top of view port====

// ==========Start of Scroll to anchor ID using scrollTO event==================
const smoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (el) {
      el.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
};
smoothScroll();
// ==========End of Scroll to anchor ID using scrollTO event====================

const endingTime = performance.now();
console.log("This code took " + (endingTime - startingTime) + " milliseconds.");
