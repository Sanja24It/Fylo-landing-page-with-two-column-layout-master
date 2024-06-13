"use strict";
let form = document.querySelector(".form");

let email = document.querySelector(".email");

let mess = document.querySelector(".mess");

const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.setAttribute("novalidate", "");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (email.value === "" || !email.value.match(re)) {
    email.classList.add("error");
    mess.style.display = "block";
  } else {
    email.classList.remove("error");
    mess.style.display = "none";
  }
});

let form_footer = document.querySelector(".footer_get");
let email_footer = document.querySelector(".email_footer");
let mess_footer = document.querySelector(".mess_fo");

form_footer.setAttribute("novalidate", "");

form_footer.addEventListener("submit", function (e) {
  e.preventDefault();

  if (email_footer.value === "" || !email_footer.value.match(re)) {
    email_footer.classList.add("error");
    mess_footer.style.display = "block";
  } else {
    email_footer.classList.remove("error");
    mess_footer.style.display = "none";
  }
});
