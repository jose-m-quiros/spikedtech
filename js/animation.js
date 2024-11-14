window.onload = () => {
  setTimeout(() => {
    const typingWrapper = document.querySelector(".typing-wrapper");

    if (typingWrapper) {
      typingWrapper.style.display = "inline-block";
      typingWrapper.classList.add("start-animation");
    } else {
      console.error("The container was not found.");
    }
  }, 900);
};
