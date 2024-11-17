// Filter lessons by category and difficulty
function showLessons(category) {
    // Hide all lessons
    document.querySelectorAll('.lesson-card').forEach(card => card.classList.add('hidden'));

    // Show lessons in selected category
    document.querySelectorAll(`.${category}`).forEach(card => card.classList.remove('hidden'));

    // Update active tab button
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.tab-btn[onclick="showLessons('${category}')"]`).classList.add('active');
}

// Search functionality
function searchSpeech() {
    const query = document.getElementById("speech-search").value.toLowerCase();
    document.querySelectorAll('.lesson-card').forEach(card => {
        card.style.display = card.textContent.toLowerCase().includes(query) ? 'block' : 'none';
    });
}

// Start lesson functionality
function startLesson(lessonName) {
    // Get lesson data based on the lesson name
    const lessonData = getLessonData(lessonName);

    // Create a modal or display area to show lesson data
    const lessonModal = document.createElement('div');
    lessonModal.className = 'lesson-modal';
    lessonModal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <h2>${lessonData.title}</h2>
            <p>${lessonData.description}</p>
            <video controls>
                <source src="${lessonData.video}" type="video/mp4">
            </video>
            <button onclick="completeLesson('${lessonName}')">Complete Lesson</button>
        </div>
    `;

    // Append modal to the body
    document.body.appendChild(lessonModal);
}

// Function to close the modal
function closeModal() {
    const modal = document.querySelector('.lesson-modal');
    if (modal) {
        modal.remove();
    }
}

// Function to get lesson data
function getLessonData(lessonName) {
    const lessons = {
        "Public Speaking Basics": {
            title: "Public Speaking Basics",
            description: "Develop confidence and learn the foundations of effective public speaking.",
            video: "videos/public_speaking_basics.mp4"
        },
        "Overcoming Stage Fright": {
            title: "Overcoming Stage Fright",
            description: "Learn techniques to manage anxiety and deliver with confidence.",
            video: "videos/overcoming_stage_fright.mp4"
        },
        "Persuasive Speech Techniques": {
            title: "Persuasive Speech Techniques",
            description: "Explore essential techniques to persuade an audience effectively.",
            video: "videos/persuasive_speech_techniques.mp4"
        },
        "Crafting Effective Arguments": {
            title: "Crafting Effective Arguments",
            description: "Learn how to structure your arguments for maximum impact.",
            video: "videos/crafting_effective_arguments.mp4"
        },
        "Storytelling Skills": {
            title: "Storytelling Skills",
            description: "Learn how to captivate an audience with engaging stories.",
            video: "videos/storytelling_skills.mp4"
        },
        "Advanced Persuasion Techniques": {
            title: "Advanced Persuasion Techniques",
            description: "Master advanced strategies to influence and persuade.",
            video: "videos/advanced_persuasion_techniques.mp4"
        },
    };
    return lessons[lessonName];
}

// Function to mark the lesson as completed
function completeLesson(lessonName) {
    alert(`You have completed the ${lessonName} lesson.`);
    updateProgress();
    closeModal();
}

// Progress tracker functionality
function updateProgress() {
    let progress = document.querySelector('.progress').style.width;
    progress = parseInt(progress) + 10; // Increase by 10% with each completed lesson
    if (progress > 100) progress = 100; // Cap at 100%
    document.querySelector('.progress').style.width = `${progress}%`;
    document.querySelector('.progress').textContent = `${progress}%`;
}

// Function to filter lessons by difficulty
function filterByDifficulty() {
    const selectedDifficulty = document.getElementById('difficulty').value;
    document.querySelectorAll('.lesson-card').forEach(card => {
        const cardDifficulty = card.classList.contains(selectedDifficulty) || !selectedDifficulty;
        card.style.display = cardDifficulty ? 'block' : 'none';
    });
}
