// =========================
// 2. Read More Button (Blog)
// =========================
const readMoreButtons = document.querySelectorAll(".read-more-btn");
if (readMoreButtons.length > 0) {
    readMoreButtons.forEach(button => {
        button.addEventListener("click", function () {
            const articleTitle = this.getAttribute("data-title");
            alert("You are reading: " + articleTitle);
        });
    });
}

// =========================
// 3. Cart Counter (Products)
// =========================
let count = 0;
const cartCount = document.getElementById("cartCount");
const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
if (cartCount && addToCartBtns.length > 0) {
    addToCartBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            count++;
            cartCount.textContent = count;
        });
    });
}

// =========================
// 4. Calculator Logic
// =========================
const display = document.getElementById("calcDisplay");
if (display) {
    let currentInput = "";
    document.querySelectorAll(".calc-btn, .calc-op").forEach(btn => {
        btn.addEventListener("click", () => {
            if (display.value === "0") currentInput = "";
            currentInput += btn.textContent;
            display.value = currentInput;
        });
    });
    document.getElementById("calcClear")?.addEventListener("click", () => {
        currentInput = "";
        display.value = "0";
    });
    document.getElementById("calcEquals")?.addEventListener("click", () => {
        try {
            display.value = eval(currentInput);
            currentInput = display.value;
        } catch {
            display.value = "Error";
            currentInput = "";
        }
    });
}

// =========================
// 5. Form Validation (Consultation)
// =========================
const consultForm = document.getElementById("consultForm");
if (consultForm) {
    consultForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const alertBox = document.getElementById("formAlert");
        alertBox.innerHTML = `<div class="alert alert-success">Thank you! Your consultation request has been submitted successfully.</div>`;
        consultForm.reset();
    });
}