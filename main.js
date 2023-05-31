const humberger = document.getElementById("humberger");
const menu = document.getElementById("menu");
const cross = document.getElementById("close");
const body = document.getElementById("body");

humberger.addEventListener("click", () => {
  menu.classList.remove("hidden");
  humberger.classList.add("hidden");
  cross.classList.remove("hidden");
  body.classList.toggle('overflow-y-hidden')
});

cross.addEventListener("click", () => {
  menu.classList.add("hidden");
  humberger.classList.remove("hidden");
  cross.classList.add("hidden");
  body.classList.toggle('overflow-y-hidden')
});

