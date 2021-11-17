if (document.readyState !== "complete") {
  document.querySelector(`.dropdownMdm`).style.display = "none";
  document.querySelector(`.dropdownTblt`).style.display = "none";
}

const displayDropdownMdmScrn = (className, btn) => {
  document.querySelector(`.${className}`).style.display === "none"
    ? ($(`.${className}`).fadeIn(),
      (document.querySelector(`.${btn}`).style.backgroundImage =
        "url('/images/btnX.png')"))
    : ($(`.${className}`).fadeOut(), 
      (document.querySelector(`.${btn}`).style.backgroundImage =
        "url('/images/btn.png')"));
};

const displayDropdownTbltScrn = (className, btn) => {
  document.querySelector(`.${className}`).style.display === "none"
    ? ($(`.${className}`).fadeIn(),
      (document.querySelector(`.${btn}`).style.backgroundImage =
        "url('/images/btnX.png')"))
    : ($(`.${className}`).fadeOut(),
      (document.querySelector(`.${btn}`).style.backgroundImage =
        "url('/images/btn.png')"));
};
