document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       MOBILE MENU
    ========================================= */

    const mobileMenuButton = document.querySelector(".mobile-menu-button");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (mobileMenuButton && mobileMenu) {

        mobileMenuButton.addEventListener("click", function () {

            mobileMenu.classList.toggle("active");

            const isOpen = mobileMenu.classList.contains("active");

            mobileMenuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );
        });

        // Close mobile menu when a link is clicked
        const mobileLinks = mobileMenu.querySelectorAll("a");

        mobileLinks.forEach(function (link) {

            link.addEventListener("click", function () {
                mobileMenu.classList.remove("active");

                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );
            });

        });
    }


    /* =========================================
       SEARCH
    ========================================= */

    const searchButton = document.querySelector(".search-button");
    const searchContainer = document.querySelector(".search-container");
    const searchInput = document.querySelector(".search-input");
    const searchForm = document.querySelector(".search-form");

    if (searchButton && searchContainer) {

        searchButton.addEventListener("click", function (event) {

            event.stopPropagation();

            searchContainer.classList.toggle("active");

            if (searchContainer.classList.contains("active") && searchInput) {
                searchInput.focus();
            }

        });
    }


    /* =========================================
       SEARCH FUNCTION
    ========================================= */

    if (searchForm && searchInput) {

        searchForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const searchTerm = searchInput.value.trim().toLowerCase();

            if (searchTerm === "") {
                return;
            }

            const pages = {
                "about": "about.html",
                "about us": "about.html",
                "energy": "solutions.html",
                "energy solutions": "solutions.html",
                "waste": "solutions.html",
                "waste management": "solutions.html",
                "careers": "careers.html",
                "contact": "index.html#contact"
            };

            if (pages[searchTerm]) {

                window.location.href = pages[searchTerm];

                return;
            }

            alert(
                "No exact page was found for your search. " +
                "Try searching for About Us, Energy Solutions, " +
                "Waste Management or Careers."
            );

        });
    }


    /* =========================================
       CLOSE SEARCH WHEN CLICKING OUTSIDE
    ========================================= */

    document.addEventListener("click", function (event) {

        if (
            searchContainer &&
            searchButton &&
            !searchContainer.contains(event.target) &&
            !searchButton.contains(event.target)
        ) {

            searchContainer.classList.remove("active");
        }

    });


    /* =========================================
       DROPDOWN MENU
    ========================================= */

    const dropdowns = document.querySelectorAll(".nav-dropdown");

    dropdowns.forEach(function (dropdown) {

        const dropdownButton = dropdown.querySelector(
            ".nav-dropdown-toggle"
        );

        if (!dropdownButton) {
            return;
        }

        dropdownButton.addEventListener("click", function (event) {

            event.preventDefault();

            dropdown.classList.toggle("active");

        });

    });


    /* =========================================
       CLOSE DROPDOWN WHEN CLICKING OUTSIDE
    ========================================= */

    document.addEventListener("click", function (event) {

        dropdowns.forEach(function (dropdown) {

            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove("active");
            }

        });

    });


    /* =========================================
       CONTACT FORM
    ========================================= */

    const contactForm = document.querySelector("#contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!contactForm.checkValidity()) {

                contactForm.reportValidity();

                return;
            }

            const successMessage =
                document.querySelector(".form-success");

            if (successMessage) {

                successMessage.textContent =
                    "Thank you. Your inquiry has been submitted.";

                successMessage.classList.add("show");

            } else {

                alert(
                    "Thank you. Your inquiry has been submitted."
                );

            }

            contactForm.reset();

        });

    }


    /* =========================================
       SMOOTH SCROLLING
    ========================================= */

    const anchorLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    anchorLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const targetElement =
                document.querySelector(targetId);

            if (targetElement) {

                event.preventDefault();

                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =========================================
       CURRENT PAGE NAVIGATION
    ========================================= */

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const navigationLinks =
        document.querySelectorAll(".nav-links a");

    navigationLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");

        if (
            linkPage &&
            linkPage === currentPage
        ) {

            link.classList.add("active");

        }

    });


    /* =========================================
       SCROLL REVEAL ANIMATION
    ========================================= */

    const revealElements =
        document.querySelectorAll(".reveal");

    if (revealElements.length > 0) {

        const revealObserver =
            new IntersectionObserver(
                function (entries, observer) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("visible");

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );

        revealElements.forEach(function (element) {

            revealObserver.observe(element);

        });

    }


    /* =========================================
       HEADER SHADOW ON SCROLL
    ========================================= */

    const header =
        document.querySelector(".navbar");

    if (header) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 30) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        });

    }

});