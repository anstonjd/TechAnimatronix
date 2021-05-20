const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".header__nav-links");
  const navLinks = document.querySelectorAll(".header__nav-links li");

  burger.addEventListener("click", () => {
    // toggle nav
    nav.classList.toggle("nav-active");
    console.log("yes");

    //   animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.4
        }s`;
      }
    });
    // burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();
