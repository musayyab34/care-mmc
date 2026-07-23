/* Compassionate Care Management — main.js
   Mobile nav, scroll reveals, contact form handling, gallery lightbox.
   Everything is progressive enhancement: the site works without JS. */

(function () {
  "use strict";

  document.documentElement.classList.add("js");

  /* ---- Mobile navigation ------------------------------------------------ */

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });

    document.addEventListener("click", function (e) {
      if (
        nav.classList.contains("is-open") &&
        !nav.contains(e.target) &&
        !toggle.contains(e.target)
      ) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- Scroll reveal (respects prefers-reduced-motion) ------------------- */

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal");

  if (!reduceMotion && "IntersectionObserver" in window && revealEls.length) {
    var ioFired = false;
    var io = new IntersectionObserver(
      function (entries) {
        ioFired = true;
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
    // Fail-safe: a healthy IntersectionObserver always delivers an initial
    // callback right after observe(). If none arrives (broken/odd webview),
    // never leave content hidden — reveal everything.
    window.setTimeout(function () {
      if (!ioFired) {
        io.disconnect();
        revealEls.forEach(function (el) {
          el.classList.add("is-visible");
        });
      }
    }, 1500);
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ---- Contact form ------------------------------------------------------- */

  var form = document.getElementById("contact-form");

  if (form) {
    var status = document.getElementById("form-status");

    var setError = function (field, hasError) {
      var wrap = field.closest(".form-field");
      if (!wrap) return;
      wrap.classList.toggle("has-error", hasError);
      field.setAttribute("aria-invalid", hasError ? "true" : "false");
    };

    var validate = function () {
      var valid = true;
      var firstInvalid = null;

      form.querySelectorAll("input, textarea").forEach(function (field) {
        var ok = field.checkValidity();
        setError(field, !ok);
        if (!ok && !firstInvalid) firstInvalid = field;
        if (!ok) valid = false;
      });

      if (firstInvalid) firstInvalid.focus();
      return valid;
    };

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      status.textContent = "";
      status.className = "form-status";

      if (!validate()) {
        status.textContent = "Please check the highlighted fields above.";
        status.classList.add("is-error");
        return;
      }

      // CLIENT-INPUT: the form endpoint. Create a free form at formspree.io,
      // then replace YOUR_FORM_ID in the form's action attribute (contact.html).
      if (form.action.indexOf("YOUR_FORM_ID") !== -1) {
        status.innerHTML =
          "The contact form isn’t connected yet. Please call us at " +
          '<a href="tel:+17322002898">732-200-2898</a> or email ' +
          '<a href="mailto:info@compassionatecaremgmnt.com">info@compassionatecaremgmnt.com</a>.';
        status.classList.add("is-error");
        return;
      }

      var submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
        .then(function (res) {
          if (res.ok) {
            form.reset();
            status.textContent =
              "Thank you — your message has been sent. We’ll respond as soon as possible.";
            status.classList.add("is-success");
          } else {
            throw new Error("Form service error");
          }
        })
        .catch(function () {
          status.innerHTML =
            "Something went wrong sending your message. Please call us at " +
            '<a href="tel:+17322002898">732-200-2898</a> instead.';
          status.classList.add("is-error");
        })
        .then(function () {
          submitBtn.disabled = false;
        });
    });

    // Clear a field's error as soon as the visitor fixes it
    form.querySelectorAll("input, textarea").forEach(function (field) {
      field.addEventListener("input", function () {
        if (field.checkValidity()) setError(field, false);
      });
    });
  }

  /* ---- Gallery lightbox ----------------------------------------------------- */

  var lightbox = document.getElementById("lightbox");

  if (lightbox && typeof lightbox.showModal === "function") {
    var lbImg = lightbox.querySelector("img");
    var lbCaption = lightbox.querySelector(".lightbox-caption");
    var lbClose = lightbox.querySelector(".lightbox-close");

    document.querySelectorAll(".gallery-item").forEach(function (item) {
      item.addEventListener("click", function () {
        var img = item.querySelector("img");
        var caption = item.querySelector(".gallery-caption");
        lbImg.src = img.currentSrc || img.src;
        lbImg.alt = img.alt;
        lbCaption.textContent = caption ? caption.textContent : "";
        lightbox.showModal();
      });
    });

    lbClose.addEventListener("click", function () {
      lightbox.close();
    });

    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) lightbox.close();
    });
  }
})();
