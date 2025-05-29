document.addEventListener("DOMContentLoaded", () => {
  const sparkle = document.createElement("div");
  sparkle.style.position = "fixed";
  sparkle.style.top = "0";
  sparkle.style.left = "0";
  sparkle.style.width = "100%";
  sparkle.style.height = "100%";
  sparkle.style.pointerEvents = "none";
  sparkle.style.background = "url('assets/sparkle.gif') repeat";
  sparkle.style.opacity = "0.3";
  document.body.appendChild(sparkle);
});
