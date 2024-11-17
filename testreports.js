// Sample report data with score details
const reports = [
  { id: 1, title: "Vocabulary Test 1", date: "2024-10-01", type: "Vocabulary", details: "Scored high in vocabulary retention.", score: 85 },
  { id: 2, title: "Speech Test 1", date: "2024-10-05", type: "Speech", details: "Excellent articulation and fluency.", score: 78 },
  { id: 3, title: "Pronunciation Test 1", date: "2024-10-10", type: "Pronunciation", details: "Top marks in clarity.", score: 90 },
  { id: 4, title: "Vocabulary Test 2", date: "2024-10-15", type: "Vocabulary", details: "Improved retention.", score: 92 },
];

document.addEventListener("DOMContentLoaded", () => {
  displayReports(reports);
});

function displayReports(reportData) {
  const reportList = document.getElementById("reportList");
  reportList.innerHTML = "";
  reportData.forEach(report => {
    const reportItem = document.createElement("li");
    reportItem.classList.add("report-item");

    reportItem.innerHTML = `
      <div>
        <h4>${report.title}</h4>
        <p>${report.date} | ${report.type}</p>
      </div>
      <button class="view-button" onclick="viewReport(${report.id})">View Report</button>
    `;
    reportList.appendChild(reportItem);
  });
}

function filterReports() {
  const searchTerm = document.getElementById("searchBar").value.toLowerCase();
  const filterType = document.getElementById("filterType").value;
  const filterDate = document.getElementById("filterDate").value;

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm);
    const matchesType = filterType === "" || report.type === filterType;
    const matchesDate = filterDate === "" || report.date === filterDate;

    return matchesSearch && matchesType && matchesDate;
  });

  displayReports(filteredReports);
}

// Mock AI function to generate dynamic insights
function generateMockAIInsights(report) {
  const insights = {
    "Vocabulary": [
      "You’ve improved vocabulary retention significantly!",
      "Focus on synonyms for better performance.",
      "Keep practicing new words daily."
    ],
    "Speech": [
      "Articulation is strong; work on fluency.",
      "Consider practicing impromptu speech sessions.",
      "Focus on vocal variety to add emphasis."
    ],
    "Pronunciation": [
      "Excellent clarity; maintain your consistency.",
      "Focus on regional accent neutrality.",
      "Practice specific sounds for improved clarity."
    ]
  };

  const randomIndex = Math.floor(Math.random() * insights[report.type].length);
  return insights[report.type][randomIndex];
}

function viewReport(reportId) {
  const report = reports.find(r => r.id === reportId);
  if (report) {
    document.getElementById("modalTitle").textContent = report.title;
    document.getElementById("modalDate").textContent = `Date: ${report.date}`;
    document.getElementById("modalType").textContent = `Type: ${report.type}`;
    document.getElementById("modalDetails").textContent = report.details;
    document.getElementById("modalScore").textContent = `${report.score}%`;
    document.getElementById("progressBar").style.width = `${report.score}%`;

    // Generate and display mock AI feedback
    const aiFeedback = generateMockAIInsights(report);
    document.getElementById("modalAIInsights").textContent = aiFeedback;

    openModal();
  }
}

function openModal() {
  document.getElementById("reportModal").style.display = "block";
}

function closeModal() {
  document.getElementById("reportModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("reportModal");
  if (event.target === modal) {
    closeModal();
  }
};
