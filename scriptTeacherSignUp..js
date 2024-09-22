window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    document.querySelector('.form-container').classList.add('visible');
});

// Handle form submission and show success message
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Display the success message
    document.getElementById('success-message').style.display = 'block';

    // Reset the form
    this.reset();

    // Redirect to login page after 3 seconds
    setTimeout(function() {
        window.location.href = 'login.html'; // Change to the actual login page URL
    }, 3000);
});











document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Gather form data
    const name = document.getElementById('name').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const department = document.getElementById('department').value;
    const designation = document.getElementById('designation').value;
    const email = document.getElementById('email').value;
    const contactNumber = document.getElementById('contact-number').value;

    const newTeacher = {
        name,
        gender,
        department,
        designation,
        email,
        contactNumber
    };

    // Save to localStorage
    let teachers = JSON.parse(localStorage.getItem('pendingTeachers')) || [];
    teachers.push(newTeacher);
    localStorage.setItem('pendingTeachers', JSON.stringify(teachers));

    // Redirect to admin page (teacher approvals section)
    window.location.href = 'admin.html#teachers-pending';
});