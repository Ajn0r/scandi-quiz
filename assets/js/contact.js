const contactPage = document.getElementById('contact-section');
const contactForm = document.getElementById('form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let username = document.getElementById('name').value;
    contactPage.innerHTML = `
    <h2>Thank you ${username} for reaching out!</h2>
    <p>We'll get back to you in no time!</p>
    <button class="btn btn-hover back-btn go-back-btn" id="go-back-link">Go back</button>`;
    const backToMenu = document.getElementById('go-back-link');
    backToMenu.addEventListener('click', () => {
        window.location.href = "index.html";
    });
});