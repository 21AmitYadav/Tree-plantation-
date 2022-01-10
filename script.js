const menu = document.getElementById("hamburger");
const mobile_nav = document.getElementById("collapseExample");
const mobile_why = document.getElementById("my-navitem-why");
const mobile_about = document.getElementById("my-navitem-about");
const mobile_contact = document.getElementById("my-navitem-contact");
const Days = document.getElementById("Days");
const Hours = document.getElementById("Hours");
const Minutes = document.getElementById("Minutes");
const Seconds = document.getElementById("Seconds");

menu.addEventListener("click", () => {
  mobile_nav.classList.toggle("d-none");
});

mobile_why.addEventListener("click", () => {
  mobile_nav.classList.toggle("d-none");
});

mobile_about.addEventListener("click", () => {
  mobile_nav.classList.toggle("d-none");
});

mobile_contact.addEventListener("click", () => {
  mobile_nav.classList.toggle("d-none");
});

const currentYear = new Date().getFullYear();

//get carbon year

const carbon = new Date(`July 22 2029 00:00:00`);

function updateCountdown() {
  const currentTime = new Date();
  const diff = carbon - currentTime;
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);

  const h = Math.floor(diff / 1000 / 60 / 60) % 24;

  const m = Math.floor(diff / 1000 / 60) % 60;

  const s = Math.floor(diff / 1000) % 60;

  Days.innerHTML = d;
  Hours.innerHTML = h;
  Minutes.innerHTML = m;
  Seconds.innerHTML = s;
}

setInterval(updateCountdown, 1000);
