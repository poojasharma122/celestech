// Header Scroll JS Start
$(document).ready(function () {
  $(window).on("scroll", function () {
    var header = $(".sticky-header"); // target header correctly
    if ($(window).scrollTop() > 0) {
      header.addClass("fixed_header");
    } else {
      header.removeClass("fixed_header");
    }
  });
});

// Header Scroll JS End


















document.addEventListener("DOMContentLoaded", function () {
  const timelineLinks = document.querySelectorAll(".timeline-link");
  const imageElement = document.querySelector(".DeWatermark-img");
  const overlayBox = document.querySelector(".overlay-box");

  timelineLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove "active" class from all list items
      timelineLinks.forEach(l => l.parentElement.classList.remove("active"));
      this.parentElement.classList.add("active");

      // Read data attributes
      const newImage = this.dataset.image;
      const newTitle = this.dataset.title;
      const newDescription = this.dataset.description;

      // Smooth fade effect
      imageElement.style.opacity = "0";
      overlayBox.style.opacity = "0";

      setTimeout(() => {
        // Update image & overlay
        imageElement.setAttribute("src", newImage);
        overlayBox.innerHTML = `<h5>${newTitle}</h5>${newDescription}`;

        // Fade back in
        imageElement.style.opacity = "1";
        overlayBox.style.opacity = "1";
      }, 300);
    });
  });
});


















document.addEventListener("DOMContentLoaded", function () {
  if (typeof particlesJS === "undefined") {
    console.error("particles.js not loaded!");
    return;
  }

  particlesJS("particles-js", {
    particles: {
      number: {
        value: 120,
        density: { enable: true, value_area: 800 },
      },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: {
        value: 0.8,
        random: true,
        anim: { enable: true, speed: 0.8, opacity_min: 0.3 },
      },
      size: { value: 2, random: true },
      line_linked: { enable: false },
      move: {
        enable: true,
        speed: 0.3,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false },
        onclick: { enable: false },
        resize: true,
      },
    },
    retina_detect: true,
  });
});





document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector(".streak-canvas");
  const ctx = canvas.getContext("2d");

  const arcs = [];
  const arcCount = 30;

  function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  // Initialize arcs
  for (let i = 0; i < arcCount; i++) {
    arcs.push({
      radius: 30 + i * 15,
      angleStart: -0.2 * Math.PI,
      angleEnd: 0.8 * Math.PI,
      speed: 0.3 + Math.random() * 0.5,
      drift: Math.random() * 20
    });
  }

  function drawArcs() {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 1.2;
    ctx.strokeStyle = "rgba(255,255,255,0.15)";
    ctx.lineCap = "round";

    arcs.forEach(arc => {
      ctx.beginPath();
      ctx.arc(0, height, arc.radius + arc.drift, arc.angleStart, arc.angleEnd);
      ctx.stroke();

      // Move arcs outward
      arc.radius += arc.speed;
      // Reset radius when it gets too large
      if (arc.radius > width + height) {
        arc.radius = 30 + Math.random() * 50;
        arc.drift = Math.random() * 20;
      }
    });

    requestAnimationFrame(drawArcs);
  }

  drawArcs();
});

