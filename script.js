// Dark Mode Toggle
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.textContent = "☀️";
    }else{
        themeBtn.textContent = "🌙";
    }
});

// Contact Form
const form = document.getElementById("contactForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e){
    e.preventDefault();

    message.innerHTML = "✅ Thank you! Your message has been sent.";

    form.reset();
});