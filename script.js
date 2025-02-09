// Добавляем функциональность для dropdown
document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', function() {
        const content = this.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Функциональность для форума решений
const forumBtn = document.querySelector('.forum-btn');
const forumContent = document.querySelector('.forum-content');

forumBtn.addEventListener('click', function() {
    forumContent.style.display = forumContent.style.display === 'block' ? 'none' : 'block';
});
// Закрыть dropdown при клике вне его
window.addEventListener('click', function(event) {
    if (!event.target.matches('.forum-btn')) {
        if (forumContent.style.display === 'block') {
            forumContent.style.display = 'none';
        }
    }
});
// Функциональность для курсов
const coursesBtn = document.querySelector('.courses-btn');
const coursesContent = document.querySelector('.courses-content');

coursesBtn.addEventListener('click', function() {
    coursesContent.style.display = coursesContent.style.display === 'block' ? 'none' : 'block';
});
// Закрыть dropdown при клике вне его
window.addEventListener('click', function(event) {
    if (!event.target.matches('.courses-btn')) {
        if (coursesContent.style.display === 'block') {
            coursesContent.style.display = 'none';
        }
    }
});

// Поиск по сайту
document.querySelector('.search input').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    document.querySelectorAll('section ul li').forEach(li => {
        const text = li.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            li.style.display = 'block';
        } else {
            li.style.display = 'none';
        }
    });
});