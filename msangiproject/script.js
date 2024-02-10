// Get all tabs and content sections
const tabs = document.querySelectorAll('nav ul li');
const sections = document.querySelectorAll('main section');

// Add click event listeners to each tab
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // Remove 'active' class from all tabs and sections
    tabs.forEach((tab) => tab.classList.remove('active'));
    sections.forEach((section) => section.classList.remove('active'));

    // Add 'active' class to the clicked tab and corresponding section
    tab.classList.add('active');
    sections[index].classList.add('active');
  });
});
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-link');
    const sections = document.querySelectorAll('main section');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', function(event) {
        event.preventDefault();
  
        const targetId = this.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
  
        if (!targetSection) return;
  
        sections.forEach(section => {
          section.classList.remove('active');
        });
  
        targetSection.classList.add('active');
      });
    });
  });
 //when menu-icon clicked it shows the tabs
 /* document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const tabs = document.querySelector('.tabs');
  
    menuIcon.addEventListener('click', function() {
      tabs.classList.toggle('active');
    });
  });*/
  // Access the content within the iframe and apply CSS styles
var iframe = document.getElementById('text-document');
var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
var iframeBody = iframeDoc.querySelector('body');
iframeBody.id = 'iframe-content'; // Assign an ID to the body for styling
//When menu-icon is clicked it calls the selector of the tab 
/*function toggleMenu() {
  var tabs = document.querySelector('.tabs');
  tabs.classList.toggle('active');
}*/
function toggleMenu() {
  var navigation = document.querySelector('.navigation');
  navigation.classList.toggle('active');
}
function toggleQuizzes() {
  var quizQuestions = document.getElementById("quizQuestions");
  quizQuestions.classList.toggle("hidden");
}

function togglePracticalQuestions() {
  var practicalQuestions = document.getElementById("practicalQuestions");
  practicalQuestions.classList.toggle("hidden");
}
// Function to toggle visibility of the code container
function toggleCodeContainer() {
  var codeContainer = document.querySelector('#quizQuestions .code-container');
  codeContainer.classList.toggle('hidden');
}

// Event listener for the "View Quizzes" button
document.getElementById('viewQuizzesBtn').addEventListener('click', function() {
  toggleCodeContainer();
});
//Dashboard tab











  