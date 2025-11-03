// Задание 1: Объявление переменных и условные операторы
function runTask1() {
    // Очистка предыдущего результата
    document.getElementById('result1').innerHTML = '';
    
    // 1. Создание переменных
    let userName = "Алексей";
    let userAge = 20;
    
    // 2. Проверка возраста
    let message;
    if (userAge >= 18) {
        message = "Вы совершеннолетний";
    } else {
        message = "Вы несовершеннолетний";
    }
    
    // Вывод результата
    const resultElement = document.getElementById('result1');
    resultElement.innerHTML = `Имя: ${userName}\nВозраст: ${userAge}\n${message}`;
    
    // Вывод в консоль
    console.log("=== Задание 1 ===");
    console.log(`Имя: ${userName}`);
    console.log(`Возраст: ${userAge}`);
    console.log(message);
}

// Задание 2: Циклы
function runTask2() {
    // Очистка предыдущего результата
    document.getElementById('result2').innerHTML = '';
    
    let result = "Цикл for от 1 до 10:\n";
    
    // 1. Цикл for от 1 до 10
    for (let i = 1; i <= 10; i++) {
        result += i + " ";
    }
    
    result += "\n\nЦикл while от 10 до 1:\n";
    
    // 2. Цикл while от 10 до 1
    let j = 10;
    while (j >= 1) {
        result += j + " ";
        j--;
    }
    
    // Вывод результата
    document.getElementById('result2').innerHTML = result;
    
    // Вывод в консоль
    console.log("=== Задание 2 ===");
    console.log("Цикл for от 1 до 10:");
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
    
    console.log("Цикл while от 10 до 1:");
    let k = 10;
    while (k >= 1) {
        console.log(k);
        k--;
    }
}

// Задание 3: Работа с массивами
function runTask3() {
    // Очистка предыдущего результата
    document.getElementById('result3').innerHTML = '';
    
    let result = "";
    
    // 1. Создание массивов
    const lectures = ['Тема 1', 'Тема 2', 'Тема 3'];
    const practices = ['Практика 1', 'Практика 2', 'Практика 3'];
    
    result += "Исходные массивы:\n";
    result += `Лекции: ${arrayToString(lectures)}\n`;
    result += `Практики: ${arrayToString(practices)}\n\n`;
    
    // 2. Добавление новых элементов
    lectures.push('Тема 4');
    practices.unshift('Практика 0');
    
    result += "Массивы после добавления элементов:\n";
    result += `Лекции: ${arrayToString(lectures)}\n`;
    result += `Практики: ${arrayToString(practices)}\n\n`;
    
    result += "Темы лекций:\n";
    lectures.forEach(lecture => {
        result += `- ${lecture}\n`;
    });
    
    result += "\nПрактики:\n";
    practices.forEach(practice => {
        result += `- ${practice}\n`;
    });
    
    // Вывод результата
    document.getElementById('result3').innerHTML = result;
    
    // Вывод в консоль
    console.log("=== Задание 3 ===");
    console.log("Темы лекций:");
    lectures.forEach(lecture => console.log(lecture));
    
    console.log("Практики:");
    practices.forEach(practice => console.log(practice));
}

// 4. Функция для вывода массива в строку
function arrayToString(arr) {
    return arr.join(', ');
}

// Задание 4: Манипуляции с массивами
function runTask4() {
    // Очистка предыдущего результата
    document.getElementById('result4').innerHTML = '';
    
    let result = "";
    
    // 1. Функция для фильтрации тем, начинающихся на "О"
    function filterTopicsStartingWithO(topics) {
        return topics.filter(topic => topic.startsWith('О'));
    }
    
    // 2. Пример использования
    const lectureTopics = ['Основы HTML', 'Основы CSS', 'JavaScript', 'ООП', 'React'];
    const filteredTopics = filterTopicsStartingWithO(lectureTopics);
    
    result += "Исходный массив тем:\n";
    result += arrayToString(lectureTopics) + "\n\n";
    
    result += "Темы, начинающиеся с 'О':\n";
    result += arrayToString(filteredTopics);
    
    // Вывод результата
    document.getElementById('result4').innerHTML = result;
    
    // Вывод в консоль
    console.log("=== Задание 4 ===");
    console.log("Темы, начинающиеся с 'О':", filteredTopics);
}
