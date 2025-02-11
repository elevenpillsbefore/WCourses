// Общая функция для работы с dropdown-меню
function toggleDropdown(dropdownContent) {
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
}

// Добавляем функциональность для всех dropdown-кнопок
document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', function () {
        const content = this.nextElementSibling;
        toggleDropdown(content);
    });
});

// Функциональность для кнопки "Форум"
const forumBtn = document.querySelector('.forum-btn');
const forumContent = document.querySelector('.forum-content');
if (forumBtn && forumContent) {
    forumBtn.addEventListener('click', function () {
        toggleDropdown(forumContent);
    });
}

// Функциональность для кнопки "Курсы"
const coursesBtn = document.querySelector('.courses-btn');
const coursesContent = document.querySelector('.courses-content');
if (coursesBtn && coursesContent) {
    coursesBtn.addEventListener('click', function () {
        toggleDropdown(coursesContent);
    });
}

// Закрыть все dropdown при клике вне их
window.addEventListener('click', function (event) {
    // Закрытие форума
    if (!event.target.matches('.forum-btn')) {
        const forumContent = document.querySelector('.forum-content');
        if (forumContent && forumContent.style.display === 'block') {
            forumContent.style.display = 'none';
        }
    }

    // Закрытие курсов
    if (!event.target.matches('.courses-btn')) {
        const coursesContent = document.querySelector('.courses-content');
        if (coursesContent && coursesContent.style.display === 'block') {
            coursesContent.style.display = 'none';
        }
    }

    // Закрытие других dropdown
    document.querySelectorAll('.dropdown-content').forEach(content => {
        if (!event.target.closest('.dropdown-item') && content.style.display === 'block') {
            content.style.display = 'none';
        }
    });
});

// Поиск по сайту
document.querySelector('.search input')?.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    // Проверяем, существует ли элемент для поиска
    const searchableItems = document.querySelectorAll('section ul li');
    if (searchableItems.length > 0) {
        searchableItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(searchTerm) ? 'block' : 'none';
        });
    }
});
// Функция для переключения темы
function toggleTheme() {
    const body = document.body;
    const isDarkTheme = !body.classList.contains('light-theme');

    // Переключаем класс
    if (isDarkTheme) {
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light'); // Сохраняем выбранную тему
    } else {
        body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark'); // Сохраняем выбранную тему
    }

    // Изменяем иконку кнопки
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
        themeToggleBtn.textContent = body.classList.contains('light-theme') ? '🌙' : '☀️';
    }
}

// При загрузке страницы проверяем сохраненную тему
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark'; // По умолчанию темная тема
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }

    // Добавляем обработчик для кнопки переключения темы
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);

        // Устанавливаем начальную иконку
        themeToggleBtn.textContent = savedTheme === 'light' ? '🌙' : '☀️';
    }
});
// Правильные ответы
const correctAnswers = {
    q1: "b", // Кибербезопасность — это защита компьютерных систем, сетей и данных.
    q2: "b", // Двухфакторная аутентификация помогает предотвратить взлом.
    q3: "c", // Антивирусное ПО должно обновляться регулярно.
    q4: "b", // Не рекомендуется размещать личную информацию.
    q5: "b", // Рansomware — это вредоносное ПО, которое блокирует доступ к данным.
};

// Обработчик кнопки "Проверить результат"
document.getElementById("submit-btn").addEventListener("click", function () {
    const form = document.getElementById("quiz-form");
    let score = 0;
    let resultText = "";

    // Проверяем каждый вопрос
    for (let question in correctAnswers) {
        const selectedAnswer = form[question].value;
        if (selectedAnswer === correctAnswers[question]) {
            score++;
        }
    }

    // Определяем результат
    if (score >= 4) {
        resultText = `Отлично! Вы правильно ответили на ${score} из 5 вопросов. Ваш уровень знаний высок!`;
    } else if (score >= 2) {
        resultText = `Неплохо! Вы правильно ответили на ${score} из 5 вопросов. Попробуйте повторить материал курса.`;
    } else {
        resultText = `К сожалению, вы правильно ответили только на ${score} из 5 вопросов. Рекомендуется повторить материал курса.`;
    }

    // Показываем результат
    const resultDiv = document.getElementById("result");
    const resultTextElement = document.getElementById("result-text");
    resultTextElement.textContent = resultText;
    resultDiv.style.display = "block";
});