const menu = document.getElementById("hamburger");
const mobile_nav = document.getElementById("collapseExample");
const mobile_why = document.getElementById("my-navitem-why");
const mobile_about = document.getElementById("my-navitem-about");
const mobile_contact = document.getElementById("my-navitem-contact");

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
