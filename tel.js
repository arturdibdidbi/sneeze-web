import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import { kn } from "intl-tel-input/i18n";

document.addEventListener("DOMContentLoaded", function () {
  const phone = document.getElementById("phone");

  const iti = intlTelInput(phone, {
    initialCountry: "br"
  });

  phone.addEventListener("input", function () {

    let value = phone.value.replace(/\D/g, "");

    const countryData = iti.getSelectedCountryData();

    if (countryData.iso2 === "br") {
      if (value.length <= 10) {
        value = value.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
      } else {
        value = value.replace(/^(\d{2})(\d{5})(\d{0,4})$/, "($1) $2-$3");
      }
    }

    phone.value = value;
  });

  phone.addEventListener("countrychange", function () {
    console.log(iti.getSelectedCountryData());
    phone.value = "";
  });



  const li = document.querySelectorAll("#project-type > li");

  li.forEach(function (item) {
    item.addEventListener('click', function () {

      if (item.classList.contains('active')) {

        item.classList.remove('active')
        item.querySelector('.check-icon').remove().closest();
      }

      else {

        li.forEach(function (item) {
          item.classList.remove('active')
          const icon = item.querySelector('.check-icon');
          if (icon) {
            icon.remove();
          }
        })

        const liChosed1 = event.target.closest('li');
        liChosed1.classList.add('active');

        const check = document.createElement('img');

        check.src = "/imgs/check_icon.png";

        check.classList.add('check-icon');



        const ps = item.getBoundingClientRect();

        check.style.top = ps.top;
        check.style.left = ps.left;
        check.style.transform = "translate(400%, -175%)";

        item.append(check);


      };

    });

  });


  const li2 = document.querySelectorAll("#service-type > li");

  li2.forEach(function (item) {
    item.addEventListener('click', function () {

      if (item.classList.contains('active')) {

        item.classList.remove('active')
        item.querySelector('.check-icon').remove().closest();
      }

      else {

        const liChosed1 = event.target.closest('li');
        liChosed1.classList.add('active');

        const check = document.createElement('img');

        check.src = "/imgs/check_icon.png";

        check.classList.add('check-icon');



        const ps = item.getBoundingClientRect();

        check.style.top = ps.top;
        check.style.left = ps.left;
        check.style.transform = "translate(275%, -175%)";

        item.append(check);


      };

    });

  });

  const li3 = document.querySelectorAll("#investment-amount > li");

  li3.forEach(function (item) {
    item.addEventListener('click', function () {

      if (item.classList.contains('active')) {

        item.classList.remove('active')
        item.querySelector('.check-icon').remove();
      }

      else {

        li3.forEach(function (item) {

          item.classList.remove('active');
          const icon = item.querySelector('.check-icon');
          if (icon) {
            icon.remove();
          }
        });



        const liChosed1 = event.target.closest('li');
        liChosed1.classList.add('active');

        const check = document.createElement('img');

        check.src = "/imgs/check_icon.png";

        check.classList.add('check-icon');



        const ps = item.getBoundingClientRect();

        check.style.top = ps.top;
        check.style.left = ps.left;
        check.style.transform = "translate(200%, -200%)";

        item.append(check);


      };

    });

  });

  const li4 = document.querySelectorAll("#delivery-deadline > li");

  li4.forEach(function (item) {
    item.addEventListener('click', function () {

      if (item.classList.contains('active')) {

        item.classList.remove('active')
        item.querySelector('.check-icon').remove();
      }

      else {

        li4.forEach(function (item) {

          item.classList.remove('active')
          const icon = item.querySelector('.check-icon');
          if (icon) {
            icon.remove();
          }

        });

        const liChosed1 = event.target.closest('li');
        liChosed1.classList.add('active');

        const check = document.createElement('img');

        check.src = "/imgs/check_icon.png";

        check.classList.add('check-icon');



        const ps = item.getBoundingClientRect();

        check.style.top = ps.top;
        check.style.left = ps.left;
        check.style.transform = "translate(275%, -175%)";

        item.append(check);


      };

    });

  });

  






});
















