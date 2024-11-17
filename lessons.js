// Function to get query parameters from the URL
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

document.addEventListener("DOMContentLoaded", function() {
    const lessonName = getQueryParameter('lesson');
    if (lessonName) {
        document.getElementById('lesson-title').innerText = lessonName;

        // Lesson data
        const lessonsData = {
            'Basic Sounds': {
                audio: 'audio/basic_sounds.mp3',
                description: 'This lesson focuses on the basic sounds of English. Students will learn how to produce and recognize the fundamental phonetic sounds that form the building blocks of pronunciation.',
                objectives: [
                    'Identify and produce basic English sounds.',
                    'Practice clarity and articulation.',
                    'Differentiate between similar sounds to improve understanding.'
                ],
                practiceQuestions: [
                    'What sound does the letter "A" represent in the word "cat"?',
                    'Provide examples of words that contain the /s/ sound.',
                    'How do you pronounce the sound /ɪ/? List three words.'
                ]
            },
            'Consonant Clusters': {
                audio: 'audio/consonant_clusters.mp3',
                description: 'In this lesson, students will master the pronunciation of consonant clusters, which are groups of consonants that appear together in words. Understanding and practicing these clusters will enhance fluency.',
                objectives: [
                    'Understand the formation of consonant clusters in English.',
                    'Practice with examples of words containing consonant clusters.',
                    'Use consonant clusters correctly in spoken sentences.'
                ],
                practiceQuestions: [
                    'Which of the following is a consonant cluster? (str, a, e)',
                    'How do you pronounce the cluster "thr"? Provide a word that contains it.',
                    'Create a sentence using the word "strength".'
                ]
            },
            'Advanced Intonation Patterns': {
                audio: 'audio/advanced_intonation.mp3',
                description: 'This advanced lesson will enhance students\' fluency by exploring intonation patterns and stress in spoken English. Students will learn how to use intonation to convey meaning and emotion in their speech.',
                objectives: [
                    'Recognize and apply different intonation patterns in conversation.',
                    'Differentiate between statements, questions, and commands based on intonation.',
                    'Improve overall fluency and expression in spoken English.'
                ],
                practiceQuestions: [
                    'What is the intonation pattern in a yes/no question?',
                    'How would you stress the sentence, "I didn’t say he stole the money"?',
                    'Listen to the following sentences. Where is the stress in each?'
                ]
            }
        };

        const lessonData = lessonsData[lessonName];
        if (lessonData) {
            document.getElementById('lesson-audio').src = lessonData.audio;
            document.getElementById('lesson-description').innerText = lessonData.description;

            // Populate learning objectives
            const objectivesList = document.getElementById('learning-objectives');
            lessonData.objectives.forEach(objective => {
                const listItem = document.createElement('li');
                listItem.innerText = objective;
                objectivesList.appendChild(listItem);
            });

            // Populate practice questions
            const quizSection = document.getElementById('quiz-section');
            lessonData.practiceQuestions.forEach(question => {
                const questionElement = document.createElement('p');
                questionElement.innerText = question;
                quizSection.appendChild(questionElement);
                const inputElement = document.createElement('input');
                inputElement.type = 'text';
                inputElement.placeholder = 'Your answer here';
                quizSection.appendChild(inputElement);
            });
        } else {
            document.getElementById('lesson-description').innerText = 'Lesson not found.';
        }
    }
});

// Function to go back to the lessons page
function goBack() {
    window.history.back();
}
