// Quiz App Logic
let selectedCategory = null;
let filteredQuestions = [];
let currentQuestion = 0;
let score = 0;
let userAnswers = [];

const categorySelect = document.getElementById('category-select');
const startBtn = document.getElementById('start-btn');
const quizSection = document.getElementById('quiz-section');
const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const explanationDiv = document.getElementById('explanation');
const progressBar = document.getElementById('progress-bar');
const resultSection = document.getElementById('result-section');
const scoreSpan = document.getElementById('score');
const reviewBtn = document.getElementById('review-btn');
const restartBtn = document.getElementById('restart-btn');
const reviewSection = document.getElementById('review-section');
const mockTestBtn = document.getElementById('mocktest-btn');
const mockTestSetup = document.getElementById('mocktest-setup');
const mockCategoryList = document.getElementById('mock-category-list');
const mockTotalQuestionsDiv = document.getElementById('mock-total-questions');
const mockQuestionCountInput = document.getElementById('mock-question-count');
const startMockBtn = document.getElementById('start-mock-btn');
const cancelMockBtn = document.getElementById('cancel-mock-btn');
const mockCategoryDropdown = document.getElementById('mock-category-dropdown');
const mockCategoryTags = document.getElementById('mock-category-tags');
let allCategories = [];
let selectedMockCategories = [];
let dropdownOpen = false;

// Populate categories
document.addEventListener('DOMContentLoaded', () => {
  const categories = [...new Set(questions.map(q => q.category))];
  categories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    categorySelect.appendChild(opt);
  });
});

// Populate checkboxes for mock test categories
document.addEventListener('DOMContentLoaded', () => {
  const categories = [...new Set(questions.map(q => q.category))];
  mockCategoryList.innerHTML = '';
  categories.forEach(cat => {
    const label = document.createElement('label');
    label.style.display = 'flex';
    label.style.alignItems = 'center';
    label.style.marginBottom = '6px';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = cat;
    checkbox.className = 'mock-category-checkbox';
    label.appendChild(checkbox);
    const span = document.createElement('span');
    span.textContent = cat;
    span.style.marginLeft = '8px';
    label.appendChild(span);
    mockCategoryList.appendChild(label);
  });
});

// Populate categories for dropdown
function renderMockCategoryDropdown() {
  mockCategoryDropdown.innerHTML = '';
  const dropdownBox = document.createElement('div');
  dropdownBox.className = 'dropdown-box';
  dropdownBox.textContent = selectedMockCategories.length
    ? `${selectedMockCategories.length} selected`
    : 'Select categories...';
  const arrow = document.createElement('span');
  arrow.className = 'dropdown-arrow';
  arrow.innerHTML = dropdownOpen ? '&#9650;' : '&#9660;';
  dropdownBox.appendChild(arrow);
  mockCategoryDropdown.appendChild(dropdownBox);

  dropdownBox.onclick = (e) => {
    e.stopPropagation();
    dropdownOpen = !dropdownOpen;
    renderMockCategoryDropdown();
  };

  if (dropdownOpen) {
    const optionsList = document.createElement('div');
    optionsList.className = 'dropdown-options';
    allCategories.forEach(cat => {
      const option = document.createElement('div');
      option.className = 'dropdown-option';
      option.textContent = cat;
      if (selectedMockCategories.includes(cat)) option.classList.add('selected');
      option.onclick = (e) => {
        e.stopPropagation();
        if (selectedMockCategories.includes(cat)) {
          selectedMockCategories = selectedMockCategories.filter(c => c !== cat);
        } else {
          selectedMockCategories.push(cat);
        }
        // Keep dropdown open after selection
        renderMockCategoryDropdown();
        renderMockCategoryTags();
        updateMockTotalQuestions();
        dropdownOpen = true;
      };
      optionsList.appendChild(option);
    });
    mockCategoryDropdown.appendChild(optionsList);
  }
}

function renderMockCategoryTags() {
  mockCategoryTags.innerHTML = '';
  selectedMockCategories.forEach(cat => {
    const tag = document.createElement('span');
    tag.className = 'mock-tag';
    tag.textContent = cat;
    const remove = document.createElement('span');
    remove.className = 'mock-tag-remove';
    remove.innerHTML = '&times;';
    remove.onclick = () => {
      selectedMockCategories = selectedMockCategories.filter(c => c !== cat);
      renderMockCategoryDropdown();
      renderMockCategoryTags();
      updateMockTotalQuestions();
    };
    tag.appendChild(remove);
    mockCategoryTags.appendChild(tag);
  });
}

function updateMockTotalQuestions() {
  const total = questions.filter(q => selectedMockCategories.includes(q.category)).length;
  mockTotalQuestionsDiv.textContent = selectedMockCategories.length
    ? `Total questions in selected categories: ${total}`
    : '';
  mockQuestionCountInput.max = total;
  if (parseInt(mockQuestionCountInput.value) > total) {
    mockQuestionCountInput.value = total;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  allCategories = [...new Set(questions.map(q => q.category))];
  selectedMockCategories = [];
  renderMockCategoryDropdown();
  renderMockCategoryTags();
});

document.addEventListener('click', (e) => {
  if (!mockCategoryDropdown.contains(e.target)) {
    dropdownOpen = false;
    renderMockCategoryDropdown();
  }
});

mockTestBtn.addEventListener('click', () => {
  history.pushState({page: 'mockSetup'}, '', '');
  document.getElementById('category-select-section').style.display = 'none';
  mockTestSetup.style.display = 'flex';
  mockTotalQuestionsDiv.textContent = '';
  mockQuestionCountInput.value = 1;
  selectedMockCategories = [];
  dropdownOpen = false;
  renderMockCategoryDropdown();
  renderMockCategoryTags();
  updateMockTotalQuestions();
});

function shuffleOptionsAndAnswer(question) {
  const correctOption = question.options[question.answer];
  const options = [...question.options];
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  question.options = options;
  question.answer = options.indexOf(correctOption);
}

startMockBtn.addEventListener('click', () => {
  history.pushState({page: 'quiz'}, '', '');
  const total = questions.filter(q => selectedMockCategories.includes(q.category));
  const count = parseInt(mockQuestionCountInput.value);
  if (!selectedMockCategories.length) {
    alert('Please select at least one category.');
    return;
  }
  if (isNaN(count) || count < 1 || count > total.length) {
    alert('Please enter a valid number of questions.');
    return;
  }
  filteredQuestions = [...total];
  shuffle(filteredQuestions);
  filteredQuestions = filteredQuestions.slice(0, count);
  // Shuffle options for each question and update answer index
  filteredQuestions.forEach(q => shuffleOptionsAndAnswer(q));
  currentQuestion = 0;
  score = 0;
  userAnswers = [];
  mockTestSetup.style.display = 'none';
  resultSection.style.display = 'none';
  quizSection.style.display = 'block';
  document.getElementById('category-select-section').style.display = 'none';
  showQuestion();
  updateProgressBar();
});

cancelMockBtn.addEventListener('click', () => {
  mockTestSetup.style.display = 'none';
  document.getElementById('category-select-section').style.display = 'flex';
});

startBtn.addEventListener('click', () => {
  history.pushState({page: 'quiz'}, '', '');
  selectedCategory = categorySelect.value;
  filteredQuestions = questions.filter(q => q.category === selectedCategory);
  shuffle(filteredQuestions);
  // Shuffle options for each question and update answer index
  filteredQuestions.forEach(q => shuffleOptionsAndAnswer(q));
  currentQuestion = 0;
  score = 0;
  userAnswers = [];
  resultSection.style.display = 'none';
  quizSection.style.display = 'block';
  document.getElementById('category-select-section').style.display = 'none';
  showQuestion();
  updateProgressBar();
});

function showQuestion() {
  const q = filteredQuestions[currentQuestion];
  // Shuffle options and update answer index every time the question is shown
  shuffleOptionsAndAnswer(q);
  questionContainer.textContent = q.question;
  optionsContainer.innerHTML = '';
  explanationDiv.style.display = 'none';
  nextBtn.style.display = 'none';
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.onclick = () => selectOption(idx);
    optionsContainer.appendChild(btn);
  });
}

function selectOption(idx) {
  const q = filteredQuestions[currentQuestion];
  const optionBtns = document.querySelectorAll('.option-btn');
  optionBtns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add('correct');
    if (i === idx && i !== q.answer) btn.classList.add('incorrect');
    if (i === idx) btn.classList.add('selected');
  });
  explanationDiv.textContent = q.explanation;
  explanationDiv.style.display = 'block';
  nextBtn.style.display = 'inline-block';
  userAnswers[currentQuestion] = idx;
  if (idx === q.answer) score++;
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < filteredQuestions.length) {
    showQuestion();
    updateProgressBar();
  } else {
    showResult();
  }
};

function updateProgressBar() {
  progressBar.innerHTML = `<div style="width:${((currentQuestion)/filteredQuestions.length)*100}%"></div>`;
}

function showResult() {
  quizSection.style.display = 'none';
  resultSection.style.display = 'block';
  scoreSpan.textContent = `${score} / ${filteredQuestions.length}`;
  reviewSection.style.display = 'none';
}

reviewBtn.onclick = () => {
  reviewSection.innerHTML = '';
  filteredQuestions.forEach((q, i) => {
    const div = document.createElement('div');
    div.innerHTML = `<b>Q${i+1}: ${q.question}</b><br>
      <span style="color:${userAnswers[i]===q.answer?'#10b981':'#ef4444'}">Your answer: ${q.options[userAnswers[i]] || 'No answer'}</span><br>
      <span style="color:#10b981">Correct answer: ${q.options[q.answer]}</span><br>
      <span style="color:#374151">Explanation: ${q.explanation}</span><hr>`;
    reviewSection.appendChild(div);
  });
  reviewSection.style.display = 'block';
};

restartBtn.onclick = () => {
  history.pushState({page: 'home'}, '', '');
  showHomePage();
  resultSection.style.display = 'none';
  quizSection.style.display = 'none';
  categorySelect.value = '';
};

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
} 

function showHomePage() {
  quizSection.style.display = 'none';
  resultSection.style.display = 'none';
  mockTestSetup.style.display = 'none';
  document.getElementById('category-select-section').style.display = 'flex';
  categorySelect.value = '';
}

function navigateToPage(page) {
  switch(page) {
    case 'home':
      showHomePage();
      break;
    case 'quiz':
      // Do nothing, quiz is already shown
      break;
    case 'mockSetup':
      // Do nothing, mock setup is already shown
      break;
    case 'result':
      // Do nothing, result is already shown
      break;
  }
}

window.addEventListener('popstate', (event) => {
  if (event.state && event.state.page) {
    navigateToPage(event.state.page);
  } else {
    showHomePage();
  }
});