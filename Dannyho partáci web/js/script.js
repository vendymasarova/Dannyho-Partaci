"use strict";

let project = setInterval(projectDone, 200);
let clients = setInterval(happyClients, 10);
let coffee = setInterval(CupsOfCoffee, 10);
const brand = document.querySelector(".navbar-brand");
let count1 = 1;
let count2 = 1;
let count3 = 1;

function projectDone() {
  count1++;
  document.querySelector("#number1").innerHTML = count1;

  if (count1 === 12) {
    clearInterval(project);
  }
}

function happyClients() {
  count2++;
  document.querySelector("#number2").innerHTML = count2;

  if (count2 === 895) {
    clearInterval(clients);
  }
}

function CupsOfCoffee() {
  count3++;
  document.querySelector("#number3").innerHTML = count3;

  if (count3 === 359) {
    clearInterval(coffee);
  }
}

//Smooth scrolling
document.querySelector(".navbar").addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target);

  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
// /////////////////////////
// //Sticky Navbar
const headerSlider = document.getElementById("slider");
const navbar = document.querySelector(".navbar");

const navbarHeight = navbar.getBoundingClientRect().height;
console.log(navbarHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting) navbar.classList.remove("sticky");
  else navbar.classList.add("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  treshold: 0,
  rootMargin: `-${navbarHeight + 30}px`,
});

console.log(headerObserver);
headerObserver.observe(headerSlider);

///////////////////
//Reveal Section
const allSection = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {});

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
