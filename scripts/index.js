const menu = document.querySelector(".menu");
const mobileNav = document.querySelector(".nav-menu");
const loader = document.querySelector(".loader-wrapper");

let mobileNavCounter = 0;

menu.addEventListener("click", () => {
  mobileNav.style.transform = `translate(0)`;
  mobileNavCounter++;
  console.log(mobileNavCounter);
  if (mobileNavCounter === 2) {
    mobileNav.style.transform = `translate(-100%)`;
    mobileNavCounter = 0;
  }
});


window.addEventListener("load", () => {
  loader.style.transform = `translate(-100%)`;
});

