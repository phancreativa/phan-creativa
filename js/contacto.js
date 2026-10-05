document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const planSelect = document.getElementById("plan");
  const serviceSelect = document.getElementById("servicio");

  /*
    Si alguien llega desde planes.html?plan=Semilla,
    seleccionamos automáticamente ese plan.
  */
  const params = new URLSearchParams(window.location.search);
  const selectedPlan = params.get("plan");

  if (selectedPlan && planSelect) {
    const option = Array.from(planSelect.options).find(
      item => item.value.toLowerCase() === selectedPlan.toLowerCase()
    );

    if (option) {
      planSelect.value = option.value;
      if (serviceSelect) {
        serviceSelect.value = "Plan de identidad";
      }
    }
  }

  /*
    Por ahora el formulario es visual/interactivo.
    GitHub Pages no procesa formularios por sí solo.
    Cuando decidamos el servicio de recepción (por ejemplo,
    Formspree), sustituiremos esta parte sin cambiar el diseño.
  */
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const button = form.querySelector(".contact-submit");
      const original = button.innerHTML;

      button.innerHTML = "¡Gracias! Te contactaré pronto ♡";
      button.disabled = true;

      setTimeout(function () {
        button.innerHTML = original;
        button.disabled = false;
      }, 3500);
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const contactButton = document.querySelector(".contact-scroll-trigger");
  const contactForm = document.querySelector("#contact-form");

  if (!contactButton || !contactForm) return;

  contactButton.addEventListener("click", (event) => {
    event.preventDefault();

    contactForm.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});
/* =========================================================
   SELECCIÓN AUTOMÁTICA DE PLAN
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);
  const selectedPlan = params.get("plan");

  const servicioSelect = document.querySelector("#servicio");
  const planSelect = document.querySelector("#plan");
  const contactForm = document.querySelector("#contactForm");

  if (!selectedPlan || !servicioSelect || !planSelect) return;

  // Seleccionar automáticamente "Plan de identidad"
  servicioSelect.value = "Plan de identidad";

  // Seleccionar el plan elegido
  planSelect.value = selectedPlan;

  // Si el navegador no encuentra el plan, no hacemos nada más
  if (planSelect.value !== selectedPlan) return;

  // Llevar suavemente al formulario
  if (contactForm) {
    setTimeout(() => {
      contactForm.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 150);
  }

});
