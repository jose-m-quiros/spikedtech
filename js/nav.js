const header = document.querySelector("header");
const titleSection = document.querySelector(".title");

function changeHeaderBackground() {
  const titleTop = titleSection.getBoundingClientRect().top;
  const headerHeight = header.offsetHeight;

  if (titleTop <= headerHeight) {
    header.style.background = "linear-gradient(135deg, #1b1b1b, #000000)";
  } else {
    header.style.background = "";
  }
}

window.addEventListener("scroll", changeHeaderBackground);
