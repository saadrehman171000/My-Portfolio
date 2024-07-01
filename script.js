// document.addEventListener("DOMContentLoaded", function () {
//   var myCarousel = document.getElementById("carouselExampleDark");
//   var carousel = new bootstrap.Carousel(myCarousel, {
//     interval: false,
//   });
//   function nextSlide() {
//     carousel.next();
//   }
//   setInterval(nextSlide, 10000);
// });
document.addEventListener("contextmenu", () => {
  event.preventDefault();
});
document.onkeydown = (e) => {
  if (e.key == 123) {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == "I") {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == "C") {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == "J") {
    e.preventDefault();
  }
  if (e.ctrlKey && e.key == "I") {
    e.preventDefault();
  }
};
const words = [
  "MERN Stack",
  "NextJs",
  "Flutter",
  "Machine Learning",
  ".NET Framework",
];
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typewriterText = "";
const typewriterElement = document.getElementById("typewriter");

function typewriterEffect() {
  const word = words[currentWordIndex];
  if (!isDeleting) {
    typewriterText = word.substring(0, currentCharIndex + 1);
    currentCharIndex++;
  } else {
    typewriterText = word.substring(0, currentCharIndex - 1);
    currentCharIndex--;
  }

  typewriterElement.textContent = typewriterText + "|";

  if (!isDeleting && typewriterText === word) {
    isDeleting = true;
    setTimeout(typewriterEffect, 1000);
  } else if (isDeleting && typewriterText === "") {
    isDeleting = false;
    currentWordIndex++;
    if (currentWordIndex >= words.length) {
      currentWordIndex = 0;
    }
    setTimeout(typewriterEffect, 500);
  } else {
    setTimeout(typewriterEffect, 100);
  }
}

typewriterEffect();

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
let mobileMenuIconBar = document.querySelector(".mobile-menu-icon");
let themeIcon = document.getElementById("theme-mode");
let nav = document.querySelector("header nav");
let header = document.querySelector("header");
let carousel = document.querySelector("#carouselExampleDark");
let menuToogle = false;

mobileMenuIconBar.addEventListener("click", () => {
  nav.classList.toggle("show");
  if (!menuToogle) {
    menuToogle = !menuToogle;
    mobileMenuIconBar.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    menuToogle = !menuToogle;
    mobileMenuIconBar.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("show");
    if (!menuToogle) {
      menuToogle = !menuToogle;
      mobileMenuIconBar.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
      menuToogle = !menuToogle;
      mobileMenuIconBar.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  });
});
window.addEventListener("scroll", function () {
  header.classList.toggle("scroll", window.scrollY > 0);
  document.querySelector("header a").style.color = "#ffffff";
  if (window.scrollY <= 0 && themeIcon.classList.contains("fa-moon")) {
    document.querySelector("header a").style.color = "#383838";
  }
});

function themeMode() {
  var root = document.documentElement;
  if (themeIcon.classList.contains("fa-sun")) {
    themeIcon.classList.remove("fa-regular");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-solid");
    themeIcon.classList.add("fa-moon");
    root.style.setProperty("--primary-color", "#fff");
    root.style.setProperty("--secondary-color", "#383838");
    if (window.scrollY > 0)
      document.querySelector("header a").style.color = "#ffffff";
    else document.querySelector("header a").style.color = "#383838";

    root.style.setProperty("--card-color", "#e6e6e6");
    root.style.setProperty("--cardFront-color", "#ffffff");
    root.style.setProperty("--cardFont-color", "#383838");

    carousel.classList.add("carousel-dark");
  } else {
    themeIcon.classList.remove("fa-solid");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-regular");
    themeIcon.classList.add("fa-sun");
    document.querySelector("header a").style.color = "#ffffff";
    root.style.setProperty("--primary-color", "#080808");
    root.style.setProperty("--secondary-color", "#ffffff84");
    root.style.setProperty("--card-color", "#212121");
    root.style.setProperty("--cardFront-color", "#2c2c2c");
    root.style.setProperty("--cardFont-color", "#cfcfcf");

    carousel.classList.remove("carousel-dark");
  }
}

function emailSend() {
  let senderName = document.getElementById("name").value;
  let senderEmail = document.getElementById("email").value;
  let senderMobile = document.getElementById("mobile").value;
  let sendermessage = document.getElementById("message").value;

  let messageBody = `<b><span style = "color:red">Name: </span></b>${senderName}</p><br/><b><span style = "color:red">Email: </span></b>${senderEmail}<br/><b><span style = "color:red">Mobile: </span></b>${senderMobile}<br/><br/>${sendermessage}<br/><br/><br/><br/>`;
  if (senderMobile.length < 11) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter correct mobile number!",
      confirmButtonColor: "#426edc",
    });
    return;
  } else if (sendermessage.length < 10) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter a valid message! At least 10 characters.",
      confirmButtonColor: "#426edc",
    });
    return;
  }
  Email.send({
    SecureToken: "94d16c52-4167-42cb-ab83-6aa1f5d535da",
    To: "saadrehman17100@gmail.com",
    From: "saadrehman17100@gmail.com",
    Subject: senderName,
    Body: messageBody,
  }).then((message) => {
    if (message === "OK") {
      Swal.fire({
        title: "Message Sent!",
        text: "I'll reply you within 24 hours!",
        icon: "success",
        confirmButtonColor: "#426edc",
      }); 
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("mobile").value = "";
      document.getElementById("message").value = "";
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        confirmButtonColor: "#426edc",
      });
    }
  });
}
