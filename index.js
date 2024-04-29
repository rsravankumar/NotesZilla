function init() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".navv");
mobile_nav.addEventListener("click", () => {
  nav_header.classList.toggle("active");
});

var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
    ease: "back.out",
  });
});
init();

var t1 = gsap.timeline();
var t2 = gsap.timeline();
var t3 = gsap.timeline();
t1.from(".navv h1", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

t1.from(".nav-menu li", {
  y: -30,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});
t1.from("#official a", {
  y: -30,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});
gsap.from(".moblie-nav-icon", {
  delay: 0.7,
  y: -30,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
});
t2.from(".heading h2", {
  delay: 1,
  y: 30,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});
t2.from(".heading h3", {
  delay: -0.3,
  y: 30,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});
t2.from(".page2 h1", {
  delay: -0.5,
  x: 30,
  opacity: 0,
  duration: 1,
  stagger: 0.6,
});
t2.from(".page2 .p", {
  delay: -0.5,
  x: -30,
  opacity: 0,
  duration: 0.5,
  stagger: 0.6,
});
t3.from(".page3 h3", {
  delay: 1,
  y: -30,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
});
t3.from(".page3 a", {
  delay: 1,
  x: -30,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
});

function ani() {
  var t4 = gsap.timeline();
  t4.from(".nav-menu li", {
    x: 150,
    delay: 1,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
  });
  t4.from("#official a", {
    x: 150,
    delay: -0.7,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
  });
}

gsap.from(".page2 .animatee", {
  y: -30,
  delay: 2,
  opacity: 0,
  duration: 2.2,
  stagger: 0.6,
});
