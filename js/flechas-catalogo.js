const navigationHeader = document.querySelector(".navigation");
const backgroundSection = document.querySelector(".main");

if (navigationHeader && backgroundSection) {
  function changeHeaderBackground() {
    const titleTop = backgroundSection.getBoundingClientRect().top;
    const headerHeight = navigationHeader.offsetHeight;

    if (window.innerWidth <= 1289) {
      if (titleTop <= headerHeight) {
        navigationHeader.style.background =
          "linear-gradient(135deg, #1b1b1b, #000000)";
      } else {
        navigationHeader.style.background = "";
      }
    } else {
      navigationHeader.style.background = "";
    }
  }

  window.addEventListener("scroll", changeHeaderBackground);
  window.addEventListener("resize", changeHeaderBackground);

  changeHeaderBackground();
}
