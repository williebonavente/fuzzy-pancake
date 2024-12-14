function openModal(modalId ) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
    document.querySelector('.container').classList.add('modal-open');
    fetchContent(modalId);
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
    document.body.classList.remove('modal-open');
    document.querySelector('.container').classList.remove('modal-open');
}

function fetchContent(modalId) {
    var contentId = modalId + '-content';
    var contentElement = document.getElementById(contentId);
    var filePath = `../reflections/${modalId}.md`;

    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            const htmlContent = marked.parse(data);
            contentElement.innerHTML = htmlContent;
        })
        .catch(error => {
            contentElement.innerHTML = 'Error loading content.';
            console.error('Error fetching content:', error);
        });
}

