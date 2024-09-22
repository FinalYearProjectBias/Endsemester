window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    document.querySelector('.form-container').classList.add('visible');
});

document.getElementById('staff-signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Display success message
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';

    // Redirect to login page after a delay
    setTimeout(() => {
        window.location.href = 'login.html'; // Redirect to your login page
    }, 2000); // 2 seconds delay
});