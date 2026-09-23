/* Los botones de cada plan envían a contacto.html?plan=Nombre.
   El formulario de Contacto podrá usar ese parámetro para seleccionar
   automáticamente el plan elegido. */
/* =========================================================
   LOGO EXPRESS — DESPLEGABLE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.querySelector(".logo-express-toggle");
  const details = document.querySelector("#logo-express-details");
  const plus = document.querySelector(".logo-express-plus");

  if (!toggle || !details || !plus) return;

  toggle.addEventListener("click", () => {

    const isOpen = toggle.getAttribute("aria-expanded") === "true";

    toggle.setAttribute("aria-expanded", String(!isOpen));

    if (isOpen) {
      details.hidden = true;
      plus.textContent = "+";
      plus.style.transform = "rotate(0deg)";
    } else {
      details.hidden = false;
      plus.textContent = "−";
      plus.style.transform = "rotate(180deg)";
    }

  });

});


document.addEventListener("DOMContentLoaded", () => {

  const viewButtons = document.querySelectorAll(".plans-view-button");
  const plansDetails = document.querySelector("#plans-details");
  const comparison = document.querySelector("#plans-comparison");

  if (!viewButtons.length || !plansDetails || !comparison) return;

  viewButtons.forEach(button => {

    button.addEventListener("click", () => {

      const selectedView = button.dataset.view;

      viewButtons.forEach(btn => {
        btn.classList.remove("is-active");
      });

      button.classList.add("is-active");

      if (selectedView === "comparison") {

        plansDetails.style.display = "none";
        comparison.style.display = "block";

        comparison.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      } else {

        comparison.style.display = "none";
        plansDetails.style.display = "block";

        plansDetails.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    });

  });

});
