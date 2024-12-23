const email = document.getElementById('email');
const form = document.getElementById('form');
const errorMessage = document.getElementById('errorMessage');
const userEmail = document.querySelector('#userMail');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    let errors = false;
    errorMessage.innerText = '';
    userEmail.innerText = '';

    // Validate email input
    if (email.value.trim() === '') {
        errors = true;
        errorMessage.innerText = 'Valid email required';
        email.classList.add('incorrect');
    } else {
        email.classList.remove('incorrect');
    }

    if (!errors) {
        // Show the success message and hide other elements
        userEmail.innerText = email.value;
        document.querySelector('.success').classList.add('show');
        document.querySelector('.everythingElse').style.display = 'none';
        document.querySelector('.picture').style.display = 'none';
        document.querySelector('.mainContainer').style.width = '24%'
        document.querySelector('.mainContainer').style.padding = '2rem'
    }
});
