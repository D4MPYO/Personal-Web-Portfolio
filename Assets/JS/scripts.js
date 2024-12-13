let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});
menu.onclick = () => {
    navbar.classList.toggle("active");
};
window.onscroll = () => {
    navbar.classList.remove("active");
};
// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");
darkmode.onclick = () => {
    if (darkmode.classList.contains("bx-moon")) {
        darkmode.classList.replace("bx-moon", "bx-sun");
        document.body.classList.add("active");
    }
    else {
        darkmode.classList.replace("bx-sun", "bx-moon");
        document.body.classList.remove("active");
    }
} 

const buttons = document.querySelectorAll(".card-item-btn");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        this.classList.toggle("active");
        const descriptions = this.nextElementSibling;
        const plusIcons = this.querySelector(".plus-icon");
        const minusIcons = this.querySelector(".minus-icon");

        if(descriptions.style.maxHeight){
            descriptions.style.maxHeight = null;
            plusIcons.style.display = "block";
            minusIcons.style.display = "none";
        }else{
            descriptions.style.maxHeight = descriptions.scrollHeight + 'px';
            plusIcons.style.display = 'none';
            minusIcons.style.display = 'block';
        }
    });
});

// Function to validate the contact form before submission
function validateForm() {
    // Get values from input fields
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Check if name is empty
    if (name.trim() == '') {
        alert('Please enter your name');
        return false;
    }

    // Check if phone number is empty
    if (phone.trim() == '') {
        alert('Please enter your phone number');
        return false;
    }

    // Check if email is empty
    if (email.trim() == '') {
        alert('Please enter your email');
        return false;
    }

    // Check if message is empty
    if (message.trim() == '') {
        alert('Please enter your message');
        return false;
    }

    // All fields are filled, return true for form submission
    return true;
}




