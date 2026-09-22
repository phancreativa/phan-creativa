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

  const discoverButton = document.querySelector('[data-view="plans"]');

  if (discoverButton) {
    discoverButton.addEventListener("click", () => {
      document.querySelector("#plans-details")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }

});
