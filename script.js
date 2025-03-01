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

// Закрыть все dropdown при клике вне их
window.addEventListener('click', function (event) {
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

