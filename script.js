function openMenu() {
  document.getElementById("navbar").style.left = "0px";
}
function closeMenu() {
  document.getElementById("navbar").style.left = "-50%";
}

function performSearch() {
  const input = document
    .getElementById("searchInput")
    .value.toLowerCase()
    .trim();
  const boxes = document.querySelectorAll(".category-box");
  const headings = document.querySelectorAll(".cata h2, .cata br");
  const sections = document.querySelectorAll(".category-list");
  const hero = document.querySelector(".hero");

  if (input === "") {
    // Show everything again if search is empty
    boxes.forEach((box) => (box.style.display = "block"));
    headings.forEach((h) => (h.style.display = "block"));
    sections.forEach((sec) => (sec.style.display = "flex"));
    if (hero) hero.style.display = "block";
    return;
  }

  let found = false;
  boxes.forEach((box) => {
    const title = box.querySelector("h3")?.textContent.toLowerCase() || "";
    if (title.includes(input)) {
      box.style.display = "block";
      found = true;
    } else {
      box.style.display = "none";
    }
  });

  // Hide headings, sections, banner if searching
  headings.forEach((h) => (h.style.display = "none"));
  sections.forEach((sec) => (sec.style.display = "flex"));
  if (hero) hero.style.display = "none";
}

// On every page load
document.addEventListener("DOMContentLoaded", () => {
  // ✅ Update cart count
  const cartCountElem = document.getElementById("cartCount");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cartCountElem) {
    cartCountElem.textContent = cart.length;
  }

  // ✅ Update Login/Logout link
  const loginLink = document.getElementById("loginLink");
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  if (loginLink) {
    if (isLoggedIn) {
      loginLink.innerHTML = `<a href="#" onclick="logout()">Logout</a>`;
    } else {
      loginLink.innerHTML = `<a href="login.html">Login</a>`;
    }
  }
});

// Logout function
function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("userEmail");
  alert("Logged out successfully!");
  window.location.href = "login.html";
}

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

setInterval(nextSlide, 5000); // Change slide every 3 seconds

// (Optional) Allow dot click to navigate
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    slideIndex = i;
    showSlide(slideIndex);
  });
});

const categoryTitles = {
  tshirts: "T-Shirts & Polos",
  jeans: "Jeans & Trousers",
  watches: "Watch & Accessories",
  kurtis: "Kurtis",
  mobiles: "Mobile Phones",
  notebooks: "Notebooks & Registers",
  shirts: "Shirts",
  ethnicwear: "Ethnic Wear",
  western: "Western Wears",
  saree: "Sarees",
  lehengas: "Lehengas",
  salwar: "Salwar Suits",
  sleepwear: "Sleepwear",
  watch: "Watche for Womens",
  jewel: "Jewellery & Accessories",
  Makeup: "Beauty & Personal Care",
  boys: "Boys Clothing",
  girls: "Girls Clothing",
  games: "Toys & Games",
  lunch: "School Bags & Lunch Boxes",
  Laptops: "Laptop & Tablets",
  buds: "Headphones & Buds",
  smartwatches: " Smartwatches & Fitness Bands",
  homeappliances: "Home Appliances",
  computer: "Computer Accessories",
  penspencils: "Pens & Pencils",
  crafts: "Art & Craft",
  kschoolsupplies: "School Supplies",
  officesupplies: "Office Supplies",
  mfootwear: "Mens Footwears",
  wfootwear: "Womens Footwears",
  kfootwears: "Kids Footwears",
};

const title = categoryTitles[cat] || "Products";
document.getElementById("categoryTitle").innerText = title;

document.querySelector(
  ".footer-bottom p"
).innerHTML = `&copy; ${new Date().getFullYear()} SmartCart. All rights reserved.`;

function openHelpModal() {
  document.getElementById("helpModal").style.display = "block";
}

function closeHelpModal() {
  document.getElementById("helpModal").style.display = "none";
}
