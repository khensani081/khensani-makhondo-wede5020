document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================
       1. PERSISTENT NAVIGATION ACTIVE STATES
       ========================================== */
    const currentUrl = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentUrl || (currentUrl === "" && link.getAttribute("href") === "index.html")) {
            link.classList.add("active");
        }
    });

    /* ==========================================
       2. GALLERY FILTER & LIGHTBOX MODAL LOGIC
       ========================================== */
    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");
    const modal = document.getElementById("galleryModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("modalCaption");
    const closeBtn = document.querySelector(".close-modal");

    // Gallery Category Filters
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelector(".filter-btn.active")?.classList.remove("active");
            btn.classList.add("active");
            const filterValue = btn.getAttribute("data-filter");

            galleryItems.forEach(item => {
                if (filterValue === "all" || item.classList.contains(filterValue)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    // Lightbox Modal Expansion Trigger
    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            const img = item.querySelector("img");
            if (modal && modalImg && captionText) {
                modal.style.display = "block";
                modalImg.src = img.src;
                captionText.innerHTML = img.alt;
            }
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    /* ==========================================
       3. INTERACTIVE CONTAINER ACCORDION CLOSURES
       ========================================== */
    const accordions = document.querySelectorAll(".accordion-header");
    accordions.forEach(header => {
        header.addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                panel.style.padding = "0 1rem";
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.style.padding = "1rem";
            }
        });
    });

    /* ==========================================
       4. CLIENT-SIDE VALIDATION MODULES
       ========================================== */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Contact Form Process Execution
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            document.querySelectorAll(".error-message").forEach(el => el.textContent = "");
            document.getElementById("contactSuccess").textContent = "";

            let passed = true;

            if (document.getElementById("contactName").value.trim() === "") {
                document.getElementById("contactNameError").textContent = "Full identifier title value is required.";
                passed = false;
            }
            if (!emailRegex.test(document.getElementById("contactEmail").value.trim())) {
                document.getElementById("contactEmailError").textContent = "Provide a structurally authentic email delivery path.";
                passed = false;
            }
            if (document.getElementById("contactMessage").value.trim().length < 15) {
                document.getElementById("contactMessageError").textContent = "Message depth must cross minimum 15 characters target requirement.";
                passed = false;
            }

            if (passed) {
                document.getElementById("contactSuccess").textContent = "Transmission successful! Form values verified.";
                contactForm.reset();
            }
        });
    }

    // Booking Form Process Execution
    const bookingForm = document.getElementById("bookingForm");
    if (bookingForm) {
        bookingForm.addEventListener("submit", (e) => {
            e.preventDefault();
            document.querySelectorAll(".error-message").forEach(el => el.textContent = "");
            document.getElementById("bookingSuccess").textContent = "";

            let passed = true;

            if (document.getElementById("bookingName").value.trim() === "") {
                document.getElementById("bookingNameError").textContent = "Please state client registry name.";
                passed = false;
            }
            if (document.getElementById("bookingService").value === "") {
                document.getElementById("bookingServiceError").textContent = "A specialized structural plan choice is required.";
                passed = false;
            }
            if (document.getElementById("bookingDate").value === "") {
                document.getElementById("bookingDateError").textContent = "Please pick a target deployment schedule timing option.";
                passed = false;
            }

            if (passed) {
                document.getElementById("bookingSuccess").textContent = "Reservation pipeline compiled successfully!";
                bookingForm.reset();
            }
        });
    }
});