/**
 * THE SMUGGLE - Global Interactive Controller
 * Professional consolidated JS for smooth scrolling, GSAP scroll reveals,
 * mobile navigation, and interactive magnetic buttons.
 */

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");

    const updateMobileNavState = () => {
        if (!nav) return;
        if (window.innerWidth >= 768) {
            nav.classList.remove("nav-scrolled");
            return;
        }
        nav.classList.toggle("nav-scrolled", window.scrollY > 8);
    };

    updateMobileNavState();
    window.addEventListener("scroll", updateMobileNavState, { passive: true });
    window.addEventListener("resize", updateMobileNavState);

    // 1. Initialize Lenis Smooth Scroll (if Lenis is loaded)
    let lenis;
    if (typeof Lenis !== "undefined") {
        lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }

    // 2. Register GSAP ScrollTrigger (if GSAP & ScrollTrigger are loaded)
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);

        // Hero Text Reveal Animation
        const textReveals = document.querySelectorAll(".text-reveal span");
        if (textReveals.length > 0) {
            gsap.to(textReveals, {
                y: 0,
                duration: 1.5,
                ease: "expo.out",
                stagger: 0.1
            });
        }

        // Stagger Text Fade-In Animation
        const staggerTexts = document.querySelectorAll(".stagger-text");
        if (staggerTexts.length > 0) {
            gsap.from(staggerTexts, {
                opacity: 0,
                y: 20,
                duration: 1,
                delay: 0.8,
                ease: "power2.out",
                stagger: 0.1
            });
        }

        // Section-based Scroll Reveals (Default sections)
        const sections = document.querySelectorAll("section");
        sections.forEach(section => {
            // Find inner elements to reveal
            const revealChildren = section.querySelectorAll("h2, p, img, .border-t, .custom-list");
            // If the section doesn't use manual '.reveal-item' classes, reveal its standard elements
            if (revealChildren.length > 0 && !section.querySelector(".reveal-item")) {
                gsap.from(revealChildren, {
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                    },
                    opacity: 0,
                    y: 45,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power3.out"
                });
            }
        });

        // Individual Item-based Scroll Reveals (.reveal-item)
        const revealItems = document.querySelectorAll(".reveal-item");
        if (revealItems.length > 0) {
            revealItems.forEach(item => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                    },
                    opacity: 0,
                    y: 30,
                    duration: 1,
                    ease: "power3.out"
                });
            });
        }
    }

    // 3. Magnetic Hover Button Interactions
    const magneticBtns = document.querySelectorAll(".magnetic-btn");
    magneticBtns.forEach(btn => {
        btn.addEventListener("mousemove", (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "translate(0px, 0px)";
        });
    });

    // 4. Responsive Mobile Fullscreen Menu Handler
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuToggle && mobileMenu) {
        let menuOpen = false;

        menuToggle.addEventListener("click", () => {
            menuOpen = !menuOpen;
            const spans = menuToggle.querySelectorAll("span");

            if (menuOpen) {
                // Morph hamburger into X
                if (spans.length >= 3) {
                    spans[0].style.transform = "rotate(45deg) translate(2px, -2px)";
                    spans[1].style.opacity = "0";
                    spans[2].style.transform = "rotate(-45deg) translate(2px, 2px)";
                }

                // Show menu
                mobileMenu.classList.remove("hidden");
                mobileMenu.classList.add("flex");
                setTimeout(() => {
                    mobileMenu.classList.add("opacity-100");
                    mobileMenu.classList.remove("pointer-events-none");
                }, 10);

                // Stop scrolling with Lenis
                if (lenis) lenis.stop();
            } else {
                // Morph X back into hamburger
                if (spans.length >= 3) {
                    spans[0].style.transform = "none";
                    spans[1].style.opacity = "1";
                    spans[2].style.transform = "none";
                }

                // Hide menu smoothly
                mobileMenu.classList.remove("opacity-100");
                mobileMenu.classList.add("pointer-events-none");
                setTimeout(() => {
                    mobileMenu.classList.add("hidden");
                    mobileMenu.classList.remove("flex");
                }, 500);

                // Resume scrolling with Lenis
                if (lenis) lenis.start();
            }
        });
    }
});
