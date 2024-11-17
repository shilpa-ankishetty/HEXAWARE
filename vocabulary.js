let vocabularyLessons = [];

// Fetch the lessons from the JSON file
fetch('lessons.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        vocabularyLessons = data.lessons; // Ensure you're accessing the correct property
        displayLessons(vocabularyLessons); // Call the function to display lessons
    })
    .catch(error => {
        console.error('Error loading lessons:', error);
    });

// Function to display the lessons in the HTML
function displayLessons(lessons) {
    const lessonGrid = document.querySelector('.lesson-grid');
    lessonGrid.innerHTML = ''; // Clear existing lessons

    lessons.forEach(lesson => {
        const lessonCard = document.createElement('div');
        lessonCard.classList.add('lesson-card');
        lessonCard.setAttribute('data-level', lesson.level);
        lessonCard.innerHTML = `
            <img src="${lesson.image}" alt="${lesson.title}" class="lesson-image">
            <h3>${lesson.title}</h3>
            <p>${lesson.description}</p>
            <button onclick="startLesson('${lesson.id}')">Start Lesson</button>
        `;
        lessonGrid.appendChild(lessonCard);
    });
}

// Function to start the lesson
function startLesson(lessonId) {
    // Redirect to lesson details page with the lesson ID as a query parameter
    window.location.href = `lessondetails.html`;
}

// Optional: Function for filtering vocabulary lessons
function filterVocabularyLessons() {
    const filterValue = document.getElementById('vocabulary-filter').value;
    const lessonCards = document.querySelectorAll('.lesson-card');

    lessonCards.forEach(card => {
        if (filterValue === 'all') {
            card.style.display = 'block'; // Show all lessons
        } else {
            // Check if the lesson's level matches the filter
            if (card.getAttribute('data-level') === filterValue) {
                card.style.display = 'block'; // Show lesson if it matches
            } else {
                card.style.display = 'none'; // Hide lesson if it doesn't match
            }
        }
    });
}

// Optional: Function for searching vocabulary lessons
function searchVocabularyLessons() {
    const searchValue = document.getElementById('vocabulary-search').value.toLowerCase();
    const lessonCards = document.querySelectorAll('.lesson-card');

    lessonCards.forEach(card => {
        const lessonTitle = card.querySelector('h3').innerText.toLowerCase();
        if (lessonTitle.includes(searchValue)) {
            card.style.display = 'block'; // Show lesson if it matches the search
        } else {
            card.style.display = 'none'; // Hide lesson if it doesn't match
        }
    });
}
