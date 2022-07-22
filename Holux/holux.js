const scrollHeader = function () {
  const header = document.getElementById("header");

  window.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};

window.addEventListener("scroll", scrollHeader);

const swiper = new Swiper(".popular__container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// =======================================================================================
const accordionItems = document.querySelectorAll(".value__accordion-item");

accordionItems.forEach((item) => {
  const accordioHeader = item.querySelector(".value__accordion-header");

  accordioHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".value__accordion-content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};
// =======================================================================================

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");

  if (window.scrollY >= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);

const change = document.getElementById("theme-button");
const changer = document.querySelector(".changer");
const moon = "bx-moon";
const sun = "bxs-sun";

const darkmood = () => {
  changer.classList.toggle("off");
  document.body.classList.toggle("dark-theme");

  if (changer.classList.contains("off")) {
    change.classList.add(moon);
    change.classList.remove(sun);
  } else {
    change.classList.remove(moon);
    change.classList.add(sun);
  }
};

change.addEventListener("click", darkmood);

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1700,
  delay: 400,
});

ScrollReveal().reveal(".home__description ", { delay: 450 });
ScrollReveal().reveal(".home__search ", { delay: 550 });
ScrollReveal().reveal(".home__value", { delay: 650 });
ScrollReveal().reveal(".home__images", { delay: 750, origin: "bottom" });
ScrollReveal().reveal(".logos__img", { interval: 100, delay: 650 });
ScrollReveal().reveal(
  ".home__title , .popular__container , .subscribe__container , .footer__container ,  .footer__info"
);
ScrollReveal().reveal(".value__images , .contact__content", { origin: "left" });
ScrollReveal().reveal(".value__content ,  .contact__images", {
  origin: "right",
});
