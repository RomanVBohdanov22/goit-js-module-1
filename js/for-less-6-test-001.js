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

const message = document.querySelector("#message");
console.log(message.value); // Default textarea message

//===================================================
const activeLink = document.querySelector(".btn.active");
console.log(activeLink.href); // https://s.codepen.io/about

//===================================================
const image = document.querySelector(".image");
console.log(image.src); // https://placeimg.com/640/480/animals
image.src = 'https://placeimg.com/640/480/tech';


/*
Властивість textContent
elem.textContent повертає текстовий контент всередині елемента. Доступний для читання і запису. Неважливо, що буде передано в textContent, дані завжди будуть записані як текс

*/

const text = document.querySelector(".article-text");
console.log(text.textContent); // text inside p.article-text

const title = document.querySelector(".article-title");
title.textContent = 'Welcome to Bahamas!';

