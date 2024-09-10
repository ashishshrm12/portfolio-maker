var type = new Typed(".ig", {
  strings: ["Frontend Devloper", "Teacher", "Web Devloper", "Blogger"],
  typedSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

$(`.circlechart`).circlechart();

// Smooth scrolling to the education section when clicking on the navigation link
document
  .querySelector('a[href="#education"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#education").scrollIntoView({ behavior: "smooth" });
  });S
