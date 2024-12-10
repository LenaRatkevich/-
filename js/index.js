document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('scroll').addEventListener('click', function() {
        window.scrollTo({
            top: document.body.scrollHeight, 
            behavior: 'smooth'
        })
    });
});