/* ------------------------------------------------------------------
   La Dulce Mermeladas — interactions
------------------------------------------------------------------ */

/* ⚠️  CAMBIAR antes de publicar.
   Formato internacional sin "+" ni espacios:
   código país (54) + "9" (móvil) + código área + número.
   Ej: Tigre/GBA (011) 4555-1234  →  "541145551234"        */
const WHATSAPP_PHONE = "541145551234";

(() => {
  "use strict";

  /* ---------- WhatsApp wiring ----------
     Convierte cualquier <a> o <button> con [data-wa="mensaje"]
     en un link que abre WhatsApp con el texto pre-cargado.   */
  const buildWa = (msg) =>
    `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;

  document.querySelectorAll("[data-wa]").forEach((el) => {
    const url = buildWa(el.dataset.wa);
    if (el.tagName === "A") {
      el.href = url;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    } else {
      el.style.cursor = "pointer";
      el.addEventListener("click", (e) => {
        e.preventDefault();
        window.open(url, "_blank", "noopener,noreferrer");
      });
    }
  });

  /* ---------- Reveal-on-scroll ---------- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const delay = parseInt(el.dataset.revealDelay || "0", 10);
        setTimeout(() => el.classList.add("is-visible"), delay);
        io.unobserve(el);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );
  revealEls.forEach((el) => io.observe(el));

  /* ---------- Smooth scroll para anchors internos ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      if (link.hasAttribute("data-wa")) return; // los WA ya tienen href real
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();
