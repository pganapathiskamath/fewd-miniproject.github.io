document.addEventListener('DOMContentLoaded', function () {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
  });

  function videoconanimation() {
    var videocon = document.querySelector("#video_container");
    var playbtn = document.querySelector("#play");
    videocon.addEventListener("mouseenter", function () {
      gsap.to(playbtn, { scale: 1, opacity: 1 });
    });
    videocon.addEventListener("mouseleave", function () {
      gsap.to(playbtn, { scale: 0, opacity: 0 });
    });
    videocon.addEventListener("mousemove", function (dets) {
      gsap.to(playbtn, { left: dets.x - 100, top: dets.y - 100 });
    });
  }
  videoconanimation();

  function loadinganimation() {
    gsap.from("#page1 h1", { y: 100, opacity: 0, delay: 0.5, duration: 0.9, stagger: 0.3 });
    gsap.from("#page1 #video_container", { scale: 0.9, opacity: 0, delay: 1.3, duration: 0.3 });
  }
  loadinganimation();

  document.addEventListener("mousemove", function (dets) {
    gsap.to(".cursor", {
      left: dets.x,
      top: dets.y
    });
  });

  document.querySelectorAll(".child").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(".cursor", {
        transform: "translate(-50%, -50%) scale(1)",
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(".cursor", {
        transform: "translate(-50%, -50%) scale(0)",
      });
    });
  });

  // Add event listeners to the navigation links
  const homeLink = document.querySelector('.navbar a[href="#home"]');
  const galleryLink = document.querySelector('.navbar a[href="#gallery"]');
  const aboutLink = document.querySelector('.navbar a[href="#about"]');
  const contactLink = document.querySelector('.navbar a[href="#contact"]');

  // Smooth scrolling for Home link
  homeLink.addEventListener('click', function (event) {
    event.preventDefault();
    scroll.scrollTo('#page1');
  });

  // Smooth scrolling for Gallery link
  galleryLink.addEventListener('click', function (event) {
    event.preventDefault();
    scroll.scrollTo('#page3');
  });

  // Smooth scrolling for About link
  aboutLink.addEventListener('click', function (event) {
    event.preventDefault();
    scroll.scrollTo('#page4');
  });

  // Smooth scrolling for Contact link
  contactLink.addEventListener('click', function (event) {
    event.preventDefault();
    scroll.scrollTo('#page5');
  });
});
