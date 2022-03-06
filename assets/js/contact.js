const contactPage = document.getElementById('contact-section');
const myForm = document.getElementById('form');
const back = document.getElementById('go-back');
    myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let username = document.getElementById('name').value;
    contactPage.innerHTML = `
    <h2>Thank you ${username} for reaching out!</h2>
    <p>We'll get back to you in no time!</p>
    <button class="btn btn-hover"><a href="index.html">Go back</a></button>`;
});
