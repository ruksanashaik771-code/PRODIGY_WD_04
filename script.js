function showPage(pageId) {
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active-link'));

    document.getElementById(pageId).classList.add('active');
    const link = document.getElementById('link-' + pageId);
    if(link) link.classList.add('active-link');
    window.scrollTo(0,0);
}

function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('userName').value;
    document.getElementById('display-name').innerText = name;
    document.getElementById('contact-content').classList.add('hidden');
    const confirmBox = document.getElementById('confirmation-msg');
    confirmBox.classList.remove('hidden');
    confirmBox.classList.add('fade-in');
}

function resetForm() {
    document.getElementById('contact-content').classList.remove('hidden');
    document.getElementById('confirmation-msg').classList.add('hidden');
    document.querySelector('form').reset();
}
