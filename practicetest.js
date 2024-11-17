// Sample test data
const tests = [
    { id: 1, name: "Vocabulary Test 1", type: "vocabulary" },
    { id: 2, name: "Speech Test 1", type: "speech" },
    { id: 3, name: "Pronunciation Test 1", type: "pronunciation" },
    { id: 4, name: "Vocabulary Test 2", type: "vocabulary" },
    { id: 5, name: "Speech Test 2", type: "speech" },
];

// Function to render tests
function renderTests(filterType = 'all', searchQuery = '') {
    const testList = document.getElementById('testList');
    testList.innerHTML = ''; // Clear existing tests

    const filteredTests = tests.filter(test => {
        const matchesType = filterType === 'all' || test.type === filterType;
        const matchesSearch = test.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesType && matchesSearch;
    });

    filteredTests.forEach(test => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${test.name}</span>
            <button class="start-test" onclick="startTest(${test.id})">Start Test</button>
        `;
        testList.appendChild(li);
    });

    if (filteredTests.length === 0) {
        testList.innerHTML = '<li>No tests found.</li>';
    }
}

// Function to handle test starting
function startTest(testId) {
    // Store the test ID in local storage
    localStorage.setItem('currentTest', testId);
    // Navigate to the test page
    window.location.href = 'test.html';
}

// Event listeners for search and filter
document.getElementById('searchBar').addEventListener('input', (e) => {
    renderTests(document.getElementById('testType').value, e.target.value);
});

document.getElementById('testType').addEventListener('change', (e) => {
    renderTests(e.target.value, document.getElementById('searchBar').value);
});

// Initial render
renderTests();
