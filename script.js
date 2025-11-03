// Функция для выполнения всех заданий
function runAllTasks() {
    console.clear();
    console.log("🎯 ВЫПОЛНЕНИЕ ПРАКТИЧЕСКИХ ЗАДАНИЙ 19-20\n");
    
    task1();
    task2();
    task3();
    task4();
    
    alert("Все задания выполнены! Проверьте консоль браузера (F12)");
}

// Задание 1: Объявление переменных и условные операторы
function task1() {
    console.log("=== ЗАДАНИЕ 1 ===");
    
    // 1. Объявление переменных
    const myName = "Анна";
    const myAge = 20;
    
    // 2. Проверка возраста
    let ageStatus;
    if (myAge >= 18) {
        ageStatus = "совершеннолетний";
    } else {
        ageStatus = "несовершеннолетний";
    }
    
    // Вывод в консоль
    console.log(`Меня зовут ${myName}`);
    console.log(`Мне ${myAge} лет`);
    console.log(`Вы ${ageStatus}`);
    
    // Вывод на страницу
    const result1 = document.getElementById('result1');
    result1.innerHTML = `Меня зовут ${myName}\nМне ${myAge} лет\nВы ${ageStatus}`;
    
    console.log(""); // Пустая строка для разделения
}

// Задание 2: Циклы
function task2() {
    console.log("=== ЗАДАНИЕ 2 ===");
    
    let resultText = "";
    
    // 1. Цикл for от 1 до 10
    console.log("Цикл for (числа от 1 до 10):");
    resultText += "Цикл for (1-10): ";
    for (let i = 1; i <= 10; i++) {
        console.log(i);
        resultText += i + " ";
    }
    
    console.log(""); // Разделитель
    
    // 2. Цикл while от 10 до 1
    console.log("Цикл while (числа от 10 до 1):");
    resultText += "\nЦикл while (10-1): ";
    let j = 10;
    while (j >= 1) {
        console.log(j);
        resultText += j + " ";
        j--;
    }
    
    // Вывод на страницу
    const result2 = document.getElementById('result2');
    result2.innerHTML = resultText;
    
    console.log(""); // Пустая строка для разделения
}

// Задание 3: Работа с массивами
function task3() {
    console.log("=== ЗАДАНИЕ 3 ===");
    
    let resultText = "";
    
    // 1. Создание массивов
    const lectures = ['Введение в JavaScript', 'Переменные и типы данных', 'Функции'];
    const practices = ['Практика по переменным', 'Практика по условиям', 'Практика по циклам'];
    
    console.log("Исходные массивы:");
    console.log("Лекции:", lectures);
    console.log("Практики:", practices);
    resultText += "Исходные массивы:\n";
    resultText += `Лекции: ${arrayToCommaString(lectures)}\n`;
    resultText += `Практики: ${arrayToCommaString(practices)}\n\n`;
    
    // 2. Добавление новых элементов
    lectures.push('Объекты и массивы');
    practices.unshift('Вводная практика');
    
    console.log("\nПосле добавления элементов:");
    console.log("Лекции:", lectures);
    console.log("Практики:", practices);
    resultText += "После добавления элементов:\n";
    resultText += `Лекции: ${arrayToCommaString(lectures)}\n`;
    resultText += `Практики: ${arrayToCommaString(practices)}\n\n`;
    
    // 3. Вывод с помощью forEach
    console.log("\nТемы лекций (forEach):");
    resultText += "Темы лекций:\n";
    lectures.forEach((lecture, index) => {
        console.log(`${index + 1}. ${lecture}`);
        resultText += `${index + 1}. ${lecture}\n`;
    });
    
    console.log("\nПрактические занятия (forEach):");
    resultText += "\nПрактические занятия:\n";
    practices.forEach((practice, index) => {
        console.log(`${index + 1}. ${practice}`);
        resultText += `${index + 1}. ${practice}\n`;
    });
    
    // Вывод на страницу
    const result3 = document.getElementById('result3');
    result3.innerHTML = resultText;
    
    console.log(""); // Пустая строка для разделения
}

// 4. Функция для вывода массива в строку через запятую
function arrayToCommaString(arr) {
    return arr.join(', ');
}

// Задание 4: Манипуляции с массивами
function task4() {
    console.log("=== ЗАДАНИЕ 4 ===");
    
    let resultText = "";
    
    // Функция для фильтрации тем, начинающихся на "О"
    function filterTopicsStartingWithO(topicsArray) {
        return topicsArray.filter(topic => 
            topic.toLowerCase().startsWith('о')
        );
    }
    
    // Пример использования
    const allTopics = [
        'Основы программирования',
        'Операторы и выражения',
        'Функции в JavaScript',
        'Объекты',
        'Массивы',
        'Циклы',
        'Обработка событий'
    ];
    
    const topicsWithO = filterTopicsStartingWithO(allTopics);
    
    console.log("Все темы:", allTopics);
    console.log("Темы, начинающиеся на 'О':", topicsWithO);
    
    resultText += "Все темы:\n";
    resultText += arrayToCommaString(allTopics) + "\n\n";
    resultText += "Темы, начинающиеся на 'О':\n";
    resultText += arrayToCommaString(topicsWithO);
    
    // Вывод на страницу
    const result4 = document.getElementById('result4');
    result4.innerHTML = resultText;
    
    console.log("\n=== ВСЕ ЗАДАНИЯ ВЫПОЛНЕНЫ ===");
}

// Автоматически выполняем все задания при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log("Страница загружена. Нажмите кнопку 'Выполнить все задания' или откройте консоль (F12)");
});
