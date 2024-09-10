let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

// Toggle navbar menu on hamburger click
hamburgerMenu.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default behavior of the link
  navbarNav.classList.toggle("active");
});

// Handle scroll event to toggle navbar visibility
window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop < lastScrollTop) {
    // Scrolling up
    navbar.classList.remove("scrolled-down");
    navbar.classList.add("scrolled-up");
  } else {
    // Scrolling down
    navbar.classList.remove("scrolled-up");
    navbar.classList.add("scrolled-down");
  }

  // Always remove the active class from navbar-nav when scrolling
  navbarNav.classList.remove("active");

  lastScrollTop = scrollTop;
});

// Prevent default behavior of anchor links in .navbar-nav
navbarNav.addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    event.preventDefault(); // Prevent the default action of scrolling
    navbarNav.classList.remove("active"); // Hide menu when a link is clicked

    // Optionally scroll to the section smoothly if needed
    const targetId = event.target.getAttribute("href");
    if (targetId && targetId.startsWith("#")) {
      document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
    }
  }
});
// click ouside to close menu

document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Feather icons initialization
feather.replace();

// Close the modal when the user clicks on the 'X' button
document.getElementById("closeModalBtn").onclick = function () {
  document.getElementById("mobileModal").style.display = "none";
};

// Array of background image URLs
const backgrounds = [
  'url("img/bg1.jpg")',
  'url("img/bg2.jpg")',
  'url("img/bg3.jpg")',
  'url("img/bg4.jpg")',
  'url("img/bg5.jpg")',
  'url("img/bg6.jpg")',
  'url("img/bg7.jpg")',
  'url("img/bg8.jpg")',
];
// Function to randomize background
function randomizeBackground() {
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const heroSection = document.querySelector(".hero");
  heroSection.style.backgroundImage = backgrounds[randomIndex];
}

// Call the function on page load
randomizeBackground();

document.querySelectorAll(".grid-wrapper img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".popup-image").style.display = "flex"; // Use flex for centering
    document.querySelector(".popup-image img").src = image.getAttribute("src");
  };
});

document.querySelector(".popup-image span").onclick = () => {
  document.querySelector(".popup-image").style.display = "none";
};
