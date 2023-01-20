// ---- Навігація по DOM

console.log('');

console.log(document);

const body = document.body;
console.log(body);

const list = body.firstElementChild;
console.log(list);

const firstListItem = list.firstElementChild;
console.log(firstListItem);

const listItems = list.children;
console.log(listItems);

//---------- Пошук елементів
console.log('');

const listWithId = document.querySelector('#menu');
listWithId.style.textTransform = 'uppercase';
listWithId.style.fontSize = '24px';
console.log(listWithId);

const listWithClass = document.querySelector('.menu');
console.log(listWithClass);

const menuItemsByTagName = document.querySelectorAll("li");
console.log(menuItemsByTagName);

const menuItemsByClass = document.querySelectorAll(".menu-item");
console.log(menuItemsByClass);

const firstMenuItem = document.querySelector(".menu-item");
firstMenuItem.style.color = 'tomato';
console.log(firstMenuItem);

// ---- Властивості та атрибути

/*
    value - містить поточний текстовий контент елементів форм.
    checked - зберігає стан чекбокса або радіокнопки.
    name - зберігає значення, вказане в HTML-атрибуті name.
    src - шлях до зображення тегу <img>.
*/