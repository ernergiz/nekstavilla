
(function () {
    "use strict";

    const ready = (callback) => {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", callback);
        } else {
            callback();
        }
    };

    ready(() => {
        const header = document.querySelector(".header-main");

        const handleHeader = () => {
            if (!header) return;
            header.classList.toggle("pm-scrolled", window.scrollY > 12);
        };

        handleHeader();
        window.addEventListener("scroll", handleHeader, { passive: true });

        /* Cursor glow */
        let rafId = null;
        window.addEventListener("pointermove", (event) => {
            if (rafId) return;

            rafId = window.requestAnimationFrame(() => {
                document.body.style.setProperty("--pm-glow-x", `${event.clientX}px`);
                document.body.style.setProperty("--pm-glow-y", `${event.clientY}px`);
                rafId = null;
            });
        }, { passive: true });

        /* Reveal on scroll */
        const revealSelectors = [
            ".hero-content",
            ".service-item",
            ".section-heading",
            ".product-card",
            ".promo-box",
            ".popular-heading",
            ".popular-card",
            ".pm-minik-banner",
            ".breadcrumb",
            ".sidebar",
            ".cart-table",
            ".cart-summary",
            ".checkout-left",
            ".checkout-summary",
            ".product-gallery",
            ".product-summary",
            ".product-tabs-wrapper",
            ".favorite-card",
            ".auth-left",
            ".auth-right",
            ".account-sidebar",
            ".account-content",
            ".orders-sidebar",
            ".orders-main",
            ".order-card",
            ".success-card",
            ".order-success-content"
        ];

        const revealItems = document.querySelectorAll(revealSelectors.join(","));
        revealItems.forEach((item, index) => {
            item.classList.add("pm-reveal");
            item.style.transitionDelay = `${Math.min(index % 6, 5) * 60}ms`;
        });

        if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("pm-visible");
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.12,
                rootMargin: "0px 0px -50px 0px"
            });

            revealItems.forEach((item) => observer.observe(item));
        } else {
            revealItems.forEach((item) => item.classList.add("pm-visible"));
        }

        /* Product/card 3D hover - sadece pointer destekleyen cihazlarda */
        const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

        if (canHover) {
            document.querySelectorAll(".product-card, .favorite-card, .success-card").forEach((card) => {
                card.addEventListener("mousemove", (event) => {
                    const rect = card.getBoundingClientRect();
                    const x = event.clientX - rect.left;
                    const y = event.clientY - rect.top;
                    const rotateY = ((x / rect.width) - 0.5) * 5;
                    const rotateX = ((y / rect.height) - 0.5) * -5;

                    card.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                });

                card.addEventListener("mouseleave", () => {
                    card.style.transform = "";
                });
            });
        }

        /* Button ripple */
        const rippleTargets = [
            ".hero-btn",
            ".product-btn",
            ".promo-btn",
            ".load-more-btn",
            ".summary-btn",
            ".place-order-btn",
            ".add-cart-btn",
            ".auth-main-btn",
            ".account-save-btn",
            ".empty-cart-btn",
            ".favorite-add-cart",
            ".address-add-btn",
            ".cargo-track-btn"
        ];

        document.addEventListener("click", (event) => {
            const target = event.target.closest(rippleTargets.join(","));
            if (!target) return;

            const rect = target.getBoundingClientRect();
            const ripple = document.createElement("span");
            ripple.className = "pm-ripple";
            ripple.style.left = `${event.clientX - rect.left}px`;
            ripple.style.top = `${event.clientY - rect.top}px`;

            target.appendChild(ripple);
            window.setTimeout(() => ripple.remove(), 650);
        });
    });
})();
