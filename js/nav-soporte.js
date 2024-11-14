const header = document.querySelector("header");
const titleSection = document.querySelector(".main");

function changeHeaderBackground() {
  const titleTop = titleSection.getBoundingClientRect().top;
  const headerHeight = header.offsetHeight;

  if (titleTop <= headerHeight) {
    header.style.backgroundColor = "black";
  } else {
    header.style.backgroundColor = "";
  }
}

window.addEventListener("scroll", changeHeaderBackground);
