// Search Functionality
function searchPronunciation() {
    const query = document.getElementById("pronunciation-search").value.toLowerCase();
    document.querySelectorAll('.lesson-card').forEach(card => {
        card.style.display = card.textContent.toLowerCase().includes(query) ? 'block' : 'none';
    });
}

// Filter Functionality
function filterPronunciation() {
    const filter = document.getElementById("pronunciation-filter").value;
    document.querySelectorAll('.lesson-card').forEach(card => {
        if (filter === 'all') {
            card.classList.remove('hidden');
        } else {
            card.classList.toggle('hidden', !card.classList.contains(filter));
        }
    });
}

// Start Lesson Functionality
function startLesson(lessonName) {
    alert(`Starting ${lessonName} lesson.`);
    // Implement additional start lesson functionality here
}
