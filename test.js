// Sample test data
const tests = [
    {
        id: 1,
        name: "Vocabulary Test 1",
        type: "vocabulary",
        questions: [
            { question: "What is the synonym of 'happy'?", options: ["Sad", "Joyful", "Angry", "Excited"], answer: "Joyful" },
            { question: "What does 'meticulous' mean?", options: ["Careless", "Detailed", "Quick", "Lazy"], answer: "Detailed" }
        ]
    },
    {
        id: 2,
        name: "Speech Test 1",
        type: "speech",
        questions: [
            { question: "What is an essential element of persuasive speaking?", options: ["Statistics", "Emotion", "Clarity", "All of the above"], answer: "All of the above" },
            { question: "What should you avoid in a speech?", options: ["Engaging the audience", "Using filler words", "Clear structure", "Good pacing"], answer: "Using filler words" }
        ]
    },
    {
        id: 3,
        name: "Pronunciation Test 1",
        type: "pronunciation",
        questions: [
            { question: "How do you pronounce 'entrepreneur'?", options: ["On-truh-pruh-nur", "En-tre-pre-neur", "On-truh-pre-neur", "En-tre-pre-nur"], answer: "On-truh-pruh-nur" },
            { question: "Which word is pronounced incorrectly?", options: ["Schedule", "Refrigerator", "Asterisk", "Phlegm"], answer: "Phlegm" }
        ]
    }
    // Add more tests as needed...
];

// Load test data from local storage
const currentTestId = localStorage.getItem('currentTest');

if (currentTestId) {
    const test = tests.find(t => t.id == currentTestId);

    if (test) {
        document.getElementById('testName').innerText = test.name;

        const questionsContainer = document.getElementById('questionsContainer');
        test.questions.forEach((q, index) => {
            const div = document.createElement('div');
            div.className = 'question';
            div.innerHTML = `
                <p>${index + 1}. ${q.question}</p>
                ${q.options.map(option => `
                    <label>
                        <input type="radio" name="question-${index}" value="${option}"> ${option}
                    </label>
                `).join('')}
            `;
            questionsContainer.appendChild(div);
        });

        // Show the submit button
        document.getElementById('submitTest').style.display = 'block';

        // Submit test functionality
        document.getElementById('submitTest').addEventListener('click', () => {
            let score = 0;

            test.questions.forEach((q, index) => {
                const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
                if (selectedOption && selectedOption.value === q.answer) {
                    score++;
                }
            });

            alert(`You scored ${score} out of ${test.questions.length}`);
            // Optionally, redirect or clear local storage after submission
            localStorage.removeItem('currentTest'); // Clear the current test ID after submission
        });
    } else {
        alert('Test not found!');
    }
} else {
    alert('No test selected!');
}
