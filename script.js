let imgbox = document.getElementById("imgbox");
let qrimg = document.getElementById("qrimg");
let qrtext = document.getElementById("qrtext");
let btn = document.getElementById("btn");

// Event listener for the button
btn.addEventListener("click", function () {
    // Check if input is not empty
    if (qrtext.value.trim().length > 0) {
        // Generate QR code URL
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrtext.value);
        // Show the image box
        imgbox.classList.add("show-img");
    } else {
        // Add error class to input field if empty
        qrtext.classList.add("error");
        setTimeout(() => {
            qrtext.classList.remove('error');
        }, 1000);
        // Optionally, hide the image box if input is empty
        imgbox.classList.remove("show-img");
    }
});

// Optional: Function to reset QR code display
function resetQRCode() {
    qrtext.value = '';
    qrimg.src = '';
    imgbox.classList.remove("show-img");
}

// Optional: Debounce function for input change (if needed)
function debounce(func, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}
