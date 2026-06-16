document.addEventListener("DOMContentLoaded", function () {

console.log("AddLifeON Loaded Successfully");

const form = document.getElementById("joinForm");

if (!form) {
    console.error("joinForm not found");
    return;
}

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    console.log("Form submit detected");

    const formData = {

        name: document.querySelector('input[placeholder*="Name"]')?.value || "",
        mobile: document.querySelector('input[placeholder*="Mobile"]')?.value || "",
        email: document.querySelector('input[type="email"]')?.value || "",
        age: document.querySelector('input[placeholder*="Age"]')?.value || "",
        dob: document.querySelector('input[type="date"]')?.value || "",
        weight: document.querySelector('input[placeholder*="Weight"]')?.value || "",

        reason: document.querySelectorAll('select')[0]?.value || "",
        outcome: document.querySelectorAll('select')[1]?.value || "",
        remarks: document.querySelector('textarea')?.value || ""

    };

    console.log("Sending:", formData);

    const submitBtn = form.querySelector("button");

    submitBtn.disabled = true;
    submitBtn.innerText = "Submitting...";

    try {

        const response = await fetch(
            "https://script.google.com/macros/s/AKfycbzoPh58hVhNob_vRnwaY4APlTVcy4BAboVI3T6L0sdXMQ7tZRJcNoHv8tTkT5PPU9iV/exec",
            {
                method: "POST",
                body: JSON.stringify(formData)
            }
        );

        console.log("Response:", response);

        alert("Registration submitted successfully!");

        form.reset();

        window.open(
            "https://wa.me/919256751167?text=Hi%20AddLifeON,%20I%20have%20submitted%20the%20registration%20form.",
            "_blank"
        );

    } catch (err) {

        console.error("Submission Error:", err);

        alert(
            "Submission failed. Open F12 → Console and share the error."
        );

    }

    submitBtn.disabled = false;
    submitBtn.innerText =
        "Start My Transformation Journey";

});

});


if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker.register("service-worker.js")
        .then(() => {

            console.log("Service Worker Registered");

        });

    });

}
/* ==========================
   Scroll Reveal Animation
========================== */

function revealOnScroll() {

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((item) => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            item.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

revealOnScroll();
