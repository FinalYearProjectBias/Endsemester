window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    document.querySelector('.form-container').classList.add('visible');
});

document.getElementById('student-signup-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting

    // Show the success message
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block'; // Show the success message

    // Optionally, reset the form after submission
    this.reset();

    // Redirect to the login page after 3 seconds
    setTimeout(function() {
        window.location.href = 'login.html'; // Replace 'login.html' with the actual login page URL
    }, 3000); // 3000 milliseconds = 3 seconds
});









document.getElementById('student-signup-form').addEventListener('submit', function(event) {
event.preventDefault();

// Gather form data
const name = document.getElementById('name').value;
const gender = document.querySelector('input[name="gender"]:checked').value;
const course = document.getElementById('course').value;
const batch = document.getElementById('batch').value;
const rollNo = document.getElementById('roll-no').value;
const email = document.getElementById('email').value;
const contactNumber = document.getElementById('contact-number').value;

const newStudent = {
    name,
    gender,
    course,
    batch,
    rollNo,
    email,
    contactNumber
};

// Save to localStorage
let students = JSON.parse(localStorage.getItem('pendingStudents')) || [];
students.push(newStudent);
localStorage.setItem('pendingStudents', JSON.stringify(students));

// Debugging: Check if data is stored
console.log("Student Data Stored in Local Storage:", students);

// Redirect to pending approvals section
window.location.href = 'admin.html#students-pending';
});  