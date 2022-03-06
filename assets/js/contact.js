
const contactPage = document.getElementById('contact-section');
const contactForm = document.getElementById('form');
const back = document.getElementById('go-back');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let username = document.getElementById('name').value;
    contactPage.innerHTML = `
    <h2>Thank you ${username} for reaching out!</h2>
    <p>We'll get back to you in no time!</p>
    <button class="btn btn-hover go-back-btn"><a id="go-back-link" href="index.html">Go back</a></button>`;
});
